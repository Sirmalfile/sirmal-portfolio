const express = require('express');
const cors = require('cors');
const multer = require('multer');
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const app = express();

// Configure Multer for file uploads
const upload = multer({ 
  dest: 'uploads/',
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5173'
}));

const EXCEL_FILE_PATH = path.join(__dirname, 'contacts.xlsx');

// Initialize Excel file
if (!fs.existsSync(EXCEL_FILE_PATH)) {
  const workbook = xlsx.utils.book_new();
  const worksheet = xlsx.utils.json_to_sheet([{
    'Timestamp': 'Timestamp',
    'Name': 'Name',
    'Email': 'Email',
    'Phone': 'Phone',
    'Message': 'Message',
    'Photo': 'Photo'
  }]);
  xlsx.utils.book_append_sheet(workbook, worksheet, 'Contacts');
  xlsx.writeFile(workbook, EXCEL_FILE_PATH);
}

app.post('/api/contact', upload.single('photo'), async (req, res) => {
  try {
    // Read existing data
    const workbook = xlsx.readFile(EXCEL_FILE_PATH);
    const worksheet = workbook.Sheets['Contacts'];
    const data = xlsx.utils.sheet_to_json(worksheet);

    // Add new entry
    data.push({
      'Timestamp': new Date().toISOString(),
      'Name': req.body.name,
      'Email': req.body.email,
      'Phone': req.body.phone || '',
      'Message': req.body.message,
      'Photo': req.file ? req.file.filename : ''
    });

    // Write back to Excel
    const newWorksheet = xlsx.utils.json_to_sheet(data);
    const newWorkbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(newWorkbook, newWorksheet, 'Contacts');
    xlsx.writeFile(newWorkbook, EXCEL_FILE_PATH);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ 
      error: 'Internal Server Error',
      details: error.message 
    });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});