import { Cpu, Zap } from 'lucide-react'

export default function Profit() {
    return (
        <section className="bg-zinc-950 py-16 md:py-24">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-2xl font-medium lg:text-5xl text-zinc-50">Maximize your profit with intelligent agents.</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24 items-start">
                    <div className="relative space-y-4">
                        <p className="text-zinc-400">
                            Our platform <span className="text-zinc-100 font-bold">drives measurable revenue growth</span> — from streamlining operations to unlocking new income streams across your business.
                        </p>

                        <div className="hidden md:grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4 text-white" />
                                    <h3 className="text-sm font-medium text-zinc-100">Revenue</h3>
                                </div>
                                <p className="text-zinc-400 text-sm">Track and grow your top-line revenue with real-time analytics.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4 text-white" />
                                    <h3 className="text-sm font-medium text-zinc-100">Profit</h3>
                                </div>
                                <p className="text-zinc-400 text-sm">Boost your bottom line automating profit-critical workflows.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-6 sm:mt-0">
                        <div className="aspect-[67/34] relative rounded-2xl bg-gradient-to-b from-zinc-700 to-transparent p-px">
                            <div className="rounded-[15px] w-full h-full bg-black overflow-hidden p-5 flex flex-col relative">
                                {/* Card Header */}
                                <div className="mb-3">
                                    <p className="text-zinc-100 text-sm font-semibold">Revenue Growth</p>
                                    <p className="text-zinc-500 text-xs mt-0.5">Your profit is ahead of where you normally are.</p>
                                </div>
                                {/* SVG Graph */}
                                <svg viewBox="0 0 500 180" className="w-full flex-1" preserveAspectRatio="xMidYMid meet">
                                    <defs>
                                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#e5e7eb" stopOpacity="0.6" />
                                            <stop offset="50%" stopColor="#f3f4f6" stopOpacity="0.9" />
                                            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                                        </linearGradient>
                                        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#f3f4f6" stopOpacity="0.15" />
                                            <stop offset="50%" stopColor="#e5e7eb" stopOpacity="0.08" />
                                            <stop offset="100%" stopColor="#e5e7eb" stopOpacity="0" />
                                        </linearGradient>
                                        <filter id="glow">
                                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                            <feMerge>
                                                <feMergeNode in="coloredBlur" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                    </defs>

                                    {/* Subtle grid lines */}
                                    {[30, 70, 110, 150].map((y) => (
                                        <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                                    ))}

                                    {/* Area fill under main line with glow */}
                                    <path
                                        d="M0,140 C40,130 70,80 110,55 C140,35 160,25 200,40 C240,55 260,100 300,110 C340,120 370,90 410,75 C440,65 470,70 500,68 L500,180 L0,180 Z"
                                        fill="url(#areaGradient)"
                                    />

                                    {/* Main profit line with glow */}
                                    <path
                                        d="M0,140 C40,130 70,80 110,55 C140,35 160,25 200,40 C240,55 260,100 300,110 C340,120 370,90 410,75 C440,65 470,70 500,68"
                                        fill="none"
                                        stroke="url(#lineGradient)"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        filter="url(#glow)"
                                    />

                                    {/* Subtle secondary line */}
                                    <path
                                        d="M0,155 C40,150 70,140 110,125 C150,110 180,120 220,130 C260,140 290,145 330,138 C370,130 400,120 440,115 C460,112 480,118 500,120"
                                        fill="none"
                                        stroke="rgba(243, 244, 246, 0.3)"
                                        strokeWidth="1.5"
                                        strokeDasharray="3 3"
                                    />

                                    {/* Data points on main line */}
                                    {[
                                        [0, 140], [110, 55], [200, 40], [300, 110], [410, 75], [500, 68]
                                    ].map(([x, y], i) => (
                                        <g key={i}>
                                            <circle cx={x} cy={y} r="6" fill="#0f0f0f" stroke="#f3f4f6" strokeWidth="2" />
                                            <circle cx={x} cy={y} r="2.5" fill="#ffffff" />
                                        </g>
                                    ))}

                                    {/* Data points on secondary line */}
                                    {[
                                        [0, 155], [110, 125], [220, 130], [330, 138], [440, 115], [500, 120]
                                    ].map(([x, y], i) => (
                                        <circle key={i} cx={x} cy={y} r="3" fill="#0f0f0f" stroke="rgba(243, 244, 246, 0.5)" strokeWidth="1.5" />
                                    ))}

                                    {/* Enhanced tooltip indicator on peak */}
                                    <line x1="200" y1="40" x2="200" y2="170" stroke="rgba(243, 244, 246, 0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
                                    <rect x="155" y="5" width="90" height="28" rx="6" fill="rgba(243, 244, 246, 0.12)" stroke="rgba(243, 244, 246, 0.25)" strokeWidth="1.5" />
                                    <text x="200" y="24" textAnchor="middle" fill="#f3f4f6" fontSize="11" fontFamily="system-ui" fontWeight="600">Peak Revenue</text>
                                </svg>
                                {/* Bottom fade overlay */}
                                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none rounded-b-[15px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
