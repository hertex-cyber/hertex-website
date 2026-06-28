import { Settings2, Sparkles, Zap } from 'lucide-react'

// --- Inline Card Components ---
const Card = ({ className, children }) => (
    <div className={`group relative bg-black shadow-[0_2px_12px_rgba(255,255,255,0.03)] overflow-hidden border border-zinc-800 p-4 py-4 -translate-y-0.5 rounded-xl ${className}`}>
        <div className="absolute inset-0 opacity-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:4px_4px]" />
        </div>
        <div className="relative z-10">
            {children}
        </div>
        <div className="absolute inset-0 -z-10 opacity-100 p-px bg-gradient-to-br from-transparent via-white/10 to-transparent" />
    </div>
)

const CardHeader = ({ className, children }) => (
    <div className={`flex flex-col space-y-1.5 pb-3 ${className}`}>
        {children}
    </div>
)

const CardContent = ({ className, children }) => (
    <div className={`pb-6 ${className}`}>
        {children}
    </div>
)

const CardDecorator = ({ children }) => (
    <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,rgba(255,255,255,0.35),transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:20px_20px] opacity-100"
        />

        <div className="absolute inset-0 m-auto flex size-12 items-center justify-center">
            {children}
        </div>
    </div>
)

export default function Features() {
    return (
        <section className="bg-zinc-950 py-16 md:py-24">
            <div className="@container mx-auto max-w-6xl px-6">
                <div className="text-left">
                    <h2 className="text-balance text-2xl font-semibold lg:text-5xl text-zinc-50">Why Choose Hertex</h2>
                    <p className="mt-4 text-zinc-400">Discover the advantages that set us apart and drive real results for your business.</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                    <Card className="group">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Zap
                                    className="size-8 text-white"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium text-zinc-100">Lightning Fast</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-zinc-400">Blazing-fast performance that delivers exceptional results in minutes, not days.</p>
                        </CardContent>
                    </Card>

                    <Card className="group">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Settings2
                                    className="size-8 text-white"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium text-zinc-100">Enterprise Security</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-zinc-400">Bank-grade encryption and compliance with industry standards to keep your data safe.</p>
                        </CardContent>
                    </Card>

                    <Card className="group">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Sparkles
                                    className="size-8 text-white"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium text-zinc-100">Continuous Learning</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-zinc-400">Our AI adapts and improves over time, getting better with every interaction and transaction.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
