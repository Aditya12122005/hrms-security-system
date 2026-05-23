import { useEffect, useMemo, useRef, useState } from "react"

import { Canvas, useFrame } from "@react-three/fiber"

import * as THREE from "three"

import {

    ResponsiveContainer,

    PieChart,

    Pie,

    Cell,

    Tooltip,

    Legend

} from "recharts"

import { getDepartmentStats } from "../services/employeeService"

function DepartmentColumn({
    item,
    index,
    total,
    maxEmployees,
    color
}) {

    const groupRef = useRef()

    const angle = (index / total) * Math.PI * 2

    const radius = 2.45

    const employeeCount = Number(item.employees) || 0

    const height = 0.45 + (employeeCount / Math.max(maxEmployees, 1)) * 2.35

    const position = [

        Math.cos(angle) * radius,

        height / 2 - 1.2,

        Math.sin(angle) * radius
    ]

    useFrame((state) => {

        const time = state.clock.elapsedTime

        groupRef.current.position.y =
            position[1] + Math.sin(time * 1.4 + index) * 0.05
    })

    return (

        <group
            ref={groupRef}
            position={position}
            rotation={[0, -angle, 0]}
        >

            <mesh>

                <cylinderGeometry args={[0.2, 0.28, height, 32]} />

                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.25}
                    roughness={0.32}
                    metalness={0.18}
                />

            </mesh>

            <mesh position={[0, height / 2 + 0.13, 0]}>

                <sphereGeometry args={[0.24, 28, 28]} />

                <meshStandardMaterial
                    color="#ffffff"
                    emissive={color}
                    emissiveIntensity={0.45}
                    roughness={0.2}
                />

            </mesh>

        </group>
    )
}

function ConnectorRing({ chartData, colors }) {

    const points = useMemo(() => {

        if (chartData.length === 0) {

            return []
        }

        return chartData.map((_, index) => {

            const angle = (index / chartData.length) * Math.PI * 2

            return new THREE.Vector3(

                Math.cos(angle) * 2.45,

                -1.2,

                Math.sin(angle) * 2.45
            )
        })

    }, [chartData])

    const lineGeometry = useMemo(() => {

        const positions = []

        points.forEach((point, index) => {

            const next = points[(index + 1) % points.length]

            positions.push(point.x, point.y, point.z, next.x, next.y, next.z)

            positions.push(0, -1.2, 0, point.x, point.y, point.z)
        })

        const geometry = new THREE.BufferGeometry()

        geometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(positions, 3)
        )

        return geometry

    }, [points])

    return (

        <group>

            <lineSegments geometry={lineGeometry}>

                <lineBasicMaterial color="#94a3b8" transparent opacity={0.28} />

            </lineSegments>

            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>

                <torusGeometry args={[2.45, 0.015, 12, 128]} />

                <meshBasicMaterial color={colors[2]} transparent opacity={0.42} />

            </mesh>

        </group>
    )
}

function DepartmentScene({ chartData, colors }) {

    const groupRef = useRef()

    const maxEmployees = useMemo(() => {

        return Math.max(
            ...chartData.map((item) => Number(item.employees) || 0),
            1
        )

    }, [chartData])

    useFrame((state) => {

        const time = state.clock.elapsedTime

        groupRef.current.rotation.y = time * 0.18

        groupRef.current.rotation.x = Math.sin(time * 0.45) * 0.06
    })

    return (

        <group ref={groupRef} position={[0, 0.15, 0]}>

            <ConnectorRing chartData={chartData} colors={colors} />

            <mesh position={[0, -1.2, 0]}>

                <icosahedronGeometry args={[0.48, 1]} />

                <meshStandardMaterial
                    color="#f8fafc"
                    emissive="#f97316"
                    emissiveIntensity={0.3}
                    roughness={0.24}
                    metalness={0.25}
                />

            </mesh>

            {chartData.map((item, index) => (

                <DepartmentColumn
                    key={`${item.department}-${index}`}
                    item={item}
                    index={index}
                    total={chartData.length}
                    maxEmployees={maxEmployees}
                    color={colors[index % colors.length]}
                />

            ))}

        </group>
    )
}

function EmployeeChart() {

    const [chartData, setChartData] = useState([])

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState("")

    const COLORS = [

        "#6366F1",

        "#8B5CF6",

        "#06B6D4",

        "#10B981",

        "#F59E0B",

        "#EF4444"
    ]

    useEffect(() => {

        let isMounted = true

        async function loadDepartmentStats() {

            try {

                const data = await getDepartmentStats()

                if (isMounted) {

                    setChartData(Array.isArray(data) ? data : [])
                }

            } catch (err) {

                console.error(err)

                if (isMounted) {

                    setError("Failed to load chart data")
                }

            } finally {

                if (isMounted) {

                    setLoading(false)
                }
            }
        }

        loadDepartmentStats()

        return () => {

            isMounted = false
        }

    }, [])

    const totalEmployees = useMemo(() => {

        return chartData.reduce(
            (sum, item) => sum + (Number(item.employees) || 0),
            0
        )

    }, [chartData])

    const topDepartment = useMemo(() => {

        return chartData.reduce((top, item) => {

            const currentCount = Number(item.employees) || 0

            const topCount = Number(top?.employees) || 0

            return currentCount > topCount ? item : top

        }, chartData[0])

    }, [chartData])

    if (loading) {

        return (

            <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 h-[450px] flex items-center justify-center">

                <p className="text-gray-400 text-sm animate-pulse">

                    Loading analytics...

                </p>

            </div>
        )
    }

    if (error) {

        return (

            <div className="bg-[#111827] border border-red-500/20 rounded-3xl p-6 h-[450px] flex items-center justify-center">

                <p className="text-red-400 text-sm">

                    {error}

                </p>

            </div>
        )
    }

    return (

        <div className="bg-[#111827]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl overflow-hidden">

            {/* HEADER */}

            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between mb-8">

                <div>

                    <h2 className="text-2xl font-bold text-white">

                        Department Analytics

                    </h2>

                    <p className="text-sm text-gray-400 mt-1">

                        Employee distribution across departments

                    </p>

                </div>

                <div className="grid grid-cols-2 gap-3 min-w-full sm:min-w-[320px] lg:min-w-[360px]">

                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">

                        <p className="text-xs font-bold uppercase tracking-wide text-slate-400">

                            Workforce

                        </p>

                        <p className="mt-1 text-2xl font-extrabold text-white">

                            {totalEmployees}

                        </p>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">

                        <p className="text-xs font-bold uppercase tracking-wide text-slate-400">

                            Largest Team

                        </p>

                        <p className="mt-1 truncate text-2xl font-extrabold text-white">

                            {topDepartment?.department || "N/A"}

                        </p>

                    </div>

                </div>

            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-6">

                <div className="relative min-h-[380px] rounded-2xl border border-white/10 bg-slate-950/60 overflow-hidden">

                    <div className="absolute left-5 top-5 z-10">

                        <p className="text-xs font-bold uppercase tracking-wide text-cyan-300">

                            3D Department Load

                        </p>

                        <p className="mt-1 text-sm font-medium text-slate-400">

                            Taller columns indicate larger teams.

                        </p>

                    </div>

                    <Canvas
                        camera={{ position: [0, 2.5, 7], fov: 48 }}
                        gl={{ antialias: true, alpha: true }}
                        dpr={[1, 1.6]}
                    >

                        <ambientLight intensity={1.1} />

                        <directionalLight position={[3, 5, 4]} intensity={1.5} />

                        <pointLight
                            position={[-3, 2, 3]}
                            color="#06b6d4"
                            intensity={12}
                            distance={8}
                        />

                        <pointLight
                            position={[4, 1, -2]}
                            color="#f97316"
                            intensity={10}
                            distance={8}
                        />

                        <DepartmentScene
                            chartData={chartData}
                            colors={COLORS}
                        />

                    </Canvas>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] xl:grid-cols-1 gap-6">

                    <div className="h-[380px] rounded-2xl border border-white/10 bg-white/[0.03] p-4">

                        <ResponsiveContainer width="100%" height="100%">

                            <PieChart>

                                <Pie

                                    data={chartData}

                                    dataKey="employees"

                                    nameKey="department"

                                    cx="50%"

                                    cy="50%"

                                    outerRadius={118}

                                    innerRadius={64}

                                    paddingAngle={3}

                                >

                                    {chartData.map((entry, index) => (

                                        <Cell

                                            key={`cell-${index}`}

                                            fill={

                                                COLORS[
                                                index % COLORS.length
                                                ]
                                            }
                                        />

                                    ))}

                                </Pie>

                                <Tooltip

                                    contentStyle={{

                                        backgroundColor: "#0F172A",

                                        border: "1px solid rgba(255,255,255,0.1)",

                                        borderRadius: "16px",

                                        color: "#fff"
                                    }}
                                />

                                <Legend />

                            </PieChart>

                        </ResponsiveContainer>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">

                        <div className="space-y-3">

                            {chartData.map((item, index) => {

                                const employeeCount = Number(item.employees) || 0

                                const percent = totalEmployees
                                    ? Math.round((employeeCount / totalEmployees) * 100)
                                    : 0

                                return (

                                    <div
                                        key={`${item.department}-row-${index}`}
                                        className="flex items-center justify-between gap-4 rounded-xl bg-slate-950/40 px-3 py-2"
                                    >

                                        <div className="flex min-w-0 items-center gap-3">

                                            <span
                                                className="h-3 w-3 shrink-0 rounded-full"
                                                style={{
                                                    backgroundColor:
                                                        COLORS[index % COLORS.length]
                                                }}
                                            />

                                            <p className="truncate text-sm font-bold text-slate-200">

                                                {item.department}

                                            </p>

                                        </div>

                                        <div className="flex shrink-0 items-center gap-3">

                                            <p className="text-xs font-bold text-slate-400">

                                                {employeeCount}

                                            </p>

                                            <span className="w-11 rounded-lg border border-white/10 bg-white/5 py-1 text-center text-xs font-bold text-cyan-200">

                                                {percent}%

                                            </span>

                                        </div>

                                    </div>
                                )
                            })}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default EmployeeChart
