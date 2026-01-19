'use client'

import { useEffect, useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows, useGLTF, Decal } from '@react-three/drei'
import * as THREE from 'three'
import { DecalGeometry } from 'three-stdlib'

interface Candle3DProps {
  shape: string
  color: string
  sticker: boolean
  charm: boolean
  message: string
  giftBox: boolean
}

// Color palette matching Préci brand
const colorMap: Record<string, { wax: string; label: string }> = {
  beige: { wax: '#F5E6D3', label: '#D4AF37' },
  brown: { wax: '#A0826D', label: '#E8D5B7' },
  white: { wax: '#FFFBF7', label: '#C9A876' },
  blush: { wax: '#EDD5C9', label: '#D4AF37' },
  mint: { wax: '#D4E9E8', label: '#8B9E9B' },
}

// Model loader with error handling
function CandleModel({ 
  shape, 
  color, 
  sticker, 
  charm, 
  message, 
  giftBox 
}: Candle3DProps) {
  const groupRef = useRef<THREE.Group>(null)
  const materialsRef = useRef<Record<string, THREE.Material>>({})
  const gltf = useGLTF('/models/candle.glb')

  // Clone scene and materials on load
  useEffect(() => {
    if (!gltf || !groupRef.current) return

    const clonedScene = gltf.scene.clone(true)
    groupRef.current.clear()
    groupRef.current.add(clonedScene)

    // Access and customize materials
    clonedScene.traverse((node: THREE.Object3D) => {
      if (node instanceof THREE.Mesh) {
        // Clone materials to avoid sharing
        if (Array.isArray(node.material)) {
          node.material = node.material.map((m: THREE.Material) => m.clone())
        } else {
          node.material = node.material.clone()
        }

        const meshName = node.name.toLowerCase()

        // Update candle wax color
        if (meshName.includes('candle_wax') || meshName.includes('wax')) {
          const material = Array.isArray(node.material) ? node.material[0] : node.material
          if (material instanceof THREE.MeshPhysicalMaterial) {
            material.color.set(colorMap[color]?.wax || '#F5E6D3')
            material.roughness = 0.15
            material.metalness = 0.02
            material.clearcoat = 0.4
            material.clearcoatRoughness = 0.2
          }
        }

        // Update label color
        if (meshName.includes('label')) {
          const material = Array.isArray(node.material) ? node.material[0] : node.material
          if (material instanceof THREE.MeshPhysicalMaterial) {
            material.color.set(colorMap[color]?.label || '#D4AF37')
            material.roughness = 0.1
            material.metalness = 0.1
          }
        }

        // Update glass material
        if (meshName.includes('glass')) {
          const material = Array.isArray(node.material) ? node.material[0] : node.material
          if (material instanceof THREE.MeshPhysicalMaterial) {
            material.transmission = 0.9
            material.thickness = 0.5
            material.roughness = 0.05
            material.ior = 1.5
            material.clearcoat = 1
          }
        }

        // Toggle accessories visibility
        if (meshName.includes('charm') || meshName.includes('accessory')) {
          node.visible = charm
        }

        if (meshName.includes('gift_box') || meshName.includes('box')) {
          node.visible = giftBox
        }

        if (meshName.includes('label')) {
          node.visible = sticker
        }
      }
    })
  }, [gltf, color, sticker, charm, giftBox])

  // Add text decal to label if message exists
  useEffect(() => {
    if (!message || !groupRef.current) return

    // Find label mesh
    let labelMesh: THREE.Mesh | null = null
    groupRef.current.traverse((node: THREE.Object3D) => {
      if (node instanceof THREE.Mesh && (node.name.toLowerCase().includes('label'))) {
        labelMesh = node
      }
    })

    if (!labelMesh || !labelMesh.geometry) return

    // Create canvas texture for text
    const canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 256
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.fillStyle = '#2a2a2a'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 48px Arial'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    // Split text into lines
    const words = message.split(' ')
    let lines: string[] = []
    let currentLine = ''

    words.forEach(word => {
      const testLine = currentLine + (currentLine ? ' ' : '') + word
      const metrics = ctx.measureText(testLine)
      if (metrics.width > 480) {
        if (currentLine) lines.push(currentLine)
        currentLine = word
      } else {
        currentLine = testLine
      }
    })
    if (currentLine) lines.push(currentLine)

    // Draw lines
    const lineHeight = 60
    const totalHeight = lines.length * lineHeight
    const startY = (canvas.height - totalHeight) / 2

    lines.forEach((line, i) => {
      ctx.fillText(line, canvas.width / 2, startY + i * lineHeight)
    })

    const texture = new THREE.CanvasTexture(canvas)
    const decalMaterial = new THREE.MeshPhysicalMaterial({
      map: texture,
      transparent: true,
      depthWrite: false,
      roughness: 0.2,
      metalness: 0,
    })

    // Apply decal
    const decalGeometry = new DecalGeometry(labelMesh, new THREE.Vector3(0, 0, 1), new THREE.Quaternion(), new THREE.Vector3(0.8, 0.4, 0.1))
    const decal = new THREE.Mesh(decalGeometry, decalMaterial)
    decal.renderOrder = 999
    labelMesh.add(decal)

    return () => {
      decalMaterial.dispose()
      texture.dispose()
      decalGeometry.dispose()
    }
  }, [message])

  return <group ref={groupRef} />
}

// Fallback procedural candle if model not found
function ProceduralsCandle({ shape, color, sticker, charm, message, giftBox }: Candle3DProps) {
  return (
    <group>
      {/* Main wax candle */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        {shape === 'square' ? (
          <boxGeometry args={[1.2, 1.8, 1.2, 32, 48, 32]} />
        ) : (
          <cylinderGeometry args={[0.6, 0.6, 1.8, 48, 48]} />
        )}
        <meshPhysicalMaterial
          color={colorMap[color]?.wax || '#F5E6D3'}
          roughness={0.15}
          metalness={0.02}
          clearcoat={0.4}
          clearcoatRoughness={0.2}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* Wick */}
      <mesh castShadow position={[0, 0.92, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.3, 12]} />
        <meshPhysicalMaterial
          color="#3a3a3a"
          roughness={0.6}
          metalness={0.1}
        />
      </mesh>

      {/* Flame glow */}
      <mesh position={[0, 1.15, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial
          color="#FFA500"
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Label sticker */}
      {sticker && (
        <mesh castShadow position={[0.65, 0.2, 0]}>
          <planeGeometry args={[0.4, 0.6]} />
          <meshPhysicalMaterial
            color={colorMap[color]?.label || '#D4AF37'}
            roughness={0.1}
            metalness={0.1}
          />
        </mesh>
      )}

      {/* Charm accent */}
      {charm && (
        <group position={[0.75, 0.9, 0]}>
          <mesh castShadow>
            <torusGeometry args={[0.12, 0.04, 8, 32]} />
            <meshPhysicalMaterial
              color="#D4AF37"
              roughness={0.3}
              metalness={0.8}
              clearcoat={0.5}
            />
          </mesh>
        </group>
      )}

      {/* Gift box */}
      {giftBox && (
        <group position={[0, -1.3, 0]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[2.2, 1.1, 2.2]} />
            <meshPhysicalMaterial
              color="#D4C5B9"
              roughness={0.2}
              metalness={0.05}
            />
          </mesh>
          <mesh position={[0, 0.56, 0]} castShadow>
            <boxGeometry args={[2.3, 0.1, 2.3]} />
            <meshPhysicalMaterial
              color="#E8DCD2"
              roughness={0.15}
              metalness={0.1}
            />
          </mesh>
        </group>
      )}
    </group>
  )
}

// Camera controller for optimal framing
function CameraController() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(3.5, 2.8, 3.5)
    camera.fov = 38
    camera.updateProjectionMatrix()
  }, [camera])

  return null
}

export function Candle3D(props: Candle3DProps) {
  return (
    <Canvas
      className="w-full h-full"
      dpr={[1, 2]}
      shadows
      gl={{
        antialias: true,
        toneMappingExposure: 1.0,
        toneMapping: THREE.ACESFilmicToneMapping,
      }}
      camera={{
        position: [3.5, 2.8, 3.5],
        fov: 38,
        near: 0.1,
        far: 100,
      }}
    >
      {/* Lighting setup */}
      <CameraController />

      {/* Key light - dramatic illumination */}
      <directionalLight
        position={[4, 5, 3]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
        shadow-camera-near={0.1}
        shadow-camera-far={20}
      />

      {/* Rim light for edge definition */}
      <directionalLight
        position={[-3, 2, 3]}
        intensity={0.6}
        color="#ffffff"
      />

      {/* Fill light - reduce harsh shadows */}
      <directionalLight
        position={[2, 1, -4]}
        intensity={0.4}
        color="#f0e6d2"
      />

      {/* Back light for depth */}
      <directionalLight
        position={[0, 3, -5]}
        intensity={0.3}
        color="#ffffff"
      />

      {/* Studio HDRI environment */}
      <Environment
        preset="studio"
        intensity={1.1}
        blur={0.5}
      />

      {/* Model or fallback */}
      {props.shape && props.color && props.sticker && props.charm && props.message && props.giftBox ? <CandleModel {...props} /> : <ProceduralsCandle {...props} />}

      {/* Contact shadows */}
      <ContactShadows
        position={[0, -1.5, 0]}
        scale={3}
        blur={2.5}
        far={4}
        opacity={0.4}
      />

      {/* Interaction controls */}
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        autoRotate
        autoRotateSpeed={1.5}
        minDistance={2}
        maxDistance={6}
        minPolarAngle={Math.PI * 0.3}
        maxPolarAngle={Math.PI * 0.7}
        enablePan={false}
      />
    </Canvas>
  )
}
