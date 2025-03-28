// StarsBackground.jsx
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

const StarsBackground = ({ id }) => {
  const mountRef = useRef(null)

  useEffect(() => {
    // Setup scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement)
    }

    // Set initial size
    const updateSize = () => {
      const width = mountRef.current.clientWidth
      const height = mountRef.current.clientHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
    
    updateSize()
    window.addEventListener('resize', updateSize)

    // Create stars
    const starGeometry = new THREE.BufferGeometry()
    const starCount = window.innerWidth < 768 ? 1000 : 3000 // Reduced count for mobile
    const positions = new Float32Array(starCount * 3)

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: window.innerWidth < 768 ? 0.5 : 0.2, // Adjusted size for mobile
      transparent: true,
      opacity: 0.8,
    })

    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)
    camera.position.z = 1

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      stars.rotation.x += 0.0005 // Slower rotation for mobile
      stars.rotation.y += 0.0005
      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateSize)
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} id={id} className="stars-canvas" />
}

export default StarsBackground