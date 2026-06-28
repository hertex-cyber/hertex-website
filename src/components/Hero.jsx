import React from 'react'
import { Button } from './ui/button'
import { ChevronRight } from 'lucide-react'

export default function HeroSection() {
    return (
        <>
            <main className="relative h-screen w-full overflow-hidden bg-zinc-950 text-zinc-50">
                {/* Background Video */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="size-full -scale-x-100 object-cover opacity-50 mix-blend-screen"
                        src="https://videos.pexels.com/video-files/35968183/15249566_1920_1080_30fps.mp4"></video>
                </div>

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-end px-6 lg:px-12 pb-12 lg:pb-24 w-full mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <h1 className="text-balance text-3xl md:text-7xl xl:text-7xl tracking-tight">Empower Your Business with Hertex</h1>
                        <p className="mt-6 text-balance text-lg text-zinc-300">Innovative strategies and digital solutions designed to scale your enterprise and accelerate growth.</p>

                        <div className="mt-8 mb-8 md:mb-0 flex items-center gap-2">
                            <Button
                                asChild
                                size="lg"
                                className="h-12 rounded-none pl-5 pr-3 text-base bg-blue-500/20 text-blue-100 border border-blue-500/30 hover:bg-blue-500/30 hover:border-blue-500/50">
                                <a href="#link" className="flex items-center hover:no-underline">
                                    <span className="text-nowrap">Solutions</span>
                                    <ChevronRight className="ml-1 w-5 h-5" />
                                </a>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="h-12 rounded-none px-5 text-base border-zinc-800 bg-transparent text-zinc-100 hover:bg-zinc-900">
                                <a href="#link" className="hover:no-underline">
                                    <span className="text-nowrap">Contact Us</span>
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
