import { useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"

const nodeColors = ["#0ea5e9", "#f97316", "#22c55e", "#ec4899", "#6366f1"]

function AccessNode({ position, color, index }) {
    const nodeRef = useRef()

    useFrame((state) => {
        const time = state.clock.elapsedTime
        const pulse = 1 + Math.sin(time * 1.8 + index) * 0.08
        nodeRef.current.scale.setScalar(pulse)
    })

    return (
        <group position={position}>
            <mesh ref={nodeRef}>
                <sphereGeometry args={[0.16, 24, 24]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.55}
                    roughness={0.35}
                />
            </mesh>
            <mesh>
                <sphereGeometry args={[0.27, 24, 24]} />
                <meshBasicMaterial color={color} transparent opacity={0.12} />
            </mesh>
        </group>
    )
}

function NetworkLines({ nodes }) {
    const positions = useMemo(() => {
        const segments = []

        nodes.forEach((node) => {
            segments.push(0, 0, 0, node[0], node[1], node[2])
        })

        for (let i = 0; i < nodes.length; i += 1) {
            const next = nodes[(i + 1) % nodes.length]
            segments.push(nodes[i][0], nodes[i][1], nodes[i][2], next[0], next[1], next[2])
        }

        return new Float32Array(segments)
    }, [nodes])

    return (
        <lineSegments>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <lineBasicMaterial color="#38bdf8" transparent opacity={0.34} />
        </lineSegments>
    )
}

function SecurityCore() {
    const groupRef = useRef()
    const innerRef = useRef()

    useFrame((state) => {
        const time = state.clock.elapsedTime
        groupRef.current.rotation.y = time * 0.18
        groupRef.current.rotation.x = Math.sin(time * 0.35) * 0.08
        innerRef.current.rotation.y = -time * 0.45
    })

    return (
        <group ref={groupRef}>
            <mesh>
                <icosahedronGeometry args={[1.15, 2]} />
                <meshStandardMaterial
                    color="#ffffff"
                    emissive="#f97316"
                    emissiveIntensity={0.14}
                    roughness={0.2}
                    metalness={0.28}
                    transparent
                    opacity={0.86}
                />
            </mesh>
            <mesh ref={innerRef}>
                <octahedronGeometry args={[0.55, 0]} />
                <meshStandardMaterial
                    color="#fb923c"
                    emissive="#fb923c"
                    emissiveIntensity={0.75}
                    roughness={0.25}
                    metalness={0.18}
                />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.7, 0.018, 12, 96]} />
                <meshBasicMaterial color="#0ea5e9" transparent opacity={0.58} />
            </mesh>
            <mesh rotation={[Math.PI / 2.7, 0.35, 0]}>
                <torusGeometry args={[2.25, 0.016, 12, 128]} />
                <meshBasicMaterial color="#f97316" transparent opacity={0.48} />
            </mesh>
            <mesh rotation={[Math.PI / 2.2, -0.55, 0.4]}>
                <torusGeometry args={[2.85, 0.014, 12, 128]} />
                <meshBasicMaterial color="#22c55e" transparent opacity={0.38} />
            </mesh>
        </group>
    )
}

function SecureWorkforceGraph() {
    const graphRef = useRef()

    const nodes = useMemo(() => {
        return Array.from({ length: 14 }, (_, index) => {
            const angle = (index / 14) * Math.PI * 2
            const radius = index % 2 === 0 ? 2.15 : 2.85
            const height = Math.sin(angle * 2.4) * 0.65
            return [
                Math.cos(angle) * radius,
                height,
                Math.sin(angle) * radius * 0.6,
            ]
        })
    }, [])

    useFrame((state) => {
        const time = state.clock.elapsedTime
        graphRef.current.rotation.y = time * 0.07
        graphRef.current.position.y = Math.sin(time * 0.45) * 0.08
    })

    return (
        <group ref={graphRef} position={[1.7, 0.95, 0]} rotation={[0.02, -0.35, -0.08]} scale={0.86}>
            <SecurityCore />
            <NetworkLines nodes={nodes} />
            {nodes.map((node, index) => (
                <AccessNode
                    key={`${node[0]}-${node[1]}-${node[2]}`}
                    position={node}
                    color={nodeColors[index % nodeColors.length]}
                    index={index}
                />
            ))}
        </group>
    )
}

export default function ThreeBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-95">
            <Canvas
                camera={{ position: [0, 0.4, 10], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 1.75]}
            >
                <ambientLight intensity={1.35} />
                <directionalLight position={[4, 5, 6]} intensity={1.3} />
                <pointLight position={[1.5, 0.5, 2.5]} color="#f97316" intensity={18} distance={8} />
                <pointLight position={[5, 2, -3]} color="#0ea5e9" intensity={14} distance={9} />
                <SecureWorkforceGraph />
            </Canvas>
        </div>
    )
}
