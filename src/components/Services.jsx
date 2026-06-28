import { cn } from "../lib/utils";
import {
    Globe,
    Settings2,
    Smartphone,
    Zap,
    Users,
} from "lucide-react";

export const itemsSample = [
    {
        title: "Business Suite",
        meta: "Manage",
        description: "Complete business management systems to organize and grow your operations",
        icon: <Users className="w-4 h-4 text-pink-500" />,
        status: "Essential",
        tags: ["Leads", "Sales", "Customers"],
        colSpan: 2,
        hasPersistentHover: true,
    },
    {
        title: "Custom Solutions",
        meta: "Tailored",
        description: "Bespoke software solutions designed to meet your unique business requirements",
        icon: <Settings2 className="w-4 h-4 text-emerald-500" />,
        status: "Premium",
        tags: ["Custom", "Enterprise"],
        hasPersistentHover: true,
    },
    {
        title: "Web Development",
        meta: "Responsive",
        description:
            "Modern, responsive websites built with cutting-edge technologies for optimal performance",
        icon: <Globe className="w-4 h-4 text-blue-500" />,
        status: "Popular",
        tags: ["Fast", "Secure", "Scalable"],
        hasPersistentHover: true,
    },
    {
        title: "App Development",
        meta: "Cross-Platform",
        description: "Native and cross-platform mobile applications for iOS and Android",
        icon: <Smartphone className="w-4 h-4 text-purple-500" />,
        tags: ["iOS", "Android", "Mobile"],
        hasPersistentHover: true,
    },
    {
        title: "Automations",
        meta: "Smart",
        description: "Streamline your workflows with intelligent automation and process optimization",
        icon: <Zap className="w-4 h-4 text-yellow-500" />,
        status: "New",
        tags: ["Time-Saving", "Efficient", "Smart"],
        hasPersistentHover: true,
    },
];

function BentoGrid({ items = itemsSample }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "group relative p-4 overflow-hidden transition-all duration-300",
                        "border border-zinc-800 bg-black",
                        "hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)]",
                        "hover:-translate-y-0.5 will-change-transform",
                        item.colSpan || "col-span-1",
                        item.colSpan === 2 ? "md:col-span-2" : "",
                        {
                            "shadow-[0_2px_12px_rgba(255,255,255,0.03)] -translate-y-0.5":
                                item.hasPersistentHover,
                        }
                    )}
                >
                    <div
                        className={`absolute inset-0 ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:4px_4px]" />
                    </div>

                    <div className="relative flex flex-col space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/10 group-hover:bg-gradient-to-br transition-all duration-300">
                                {item.icon}
                            </div>
                            <span
                                className={cn(
                                    "text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-sm",
                                    "bg-white/10 text-zinc-300",
                                    "transition-colors duration-300 group-hover:bg-white/20"
                                )}
                            >
                                {item.status || "Active"}
                            </span>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-medium text-zinc-100 tracking-tight text-[15px]">
                                {item.title}
                                <span className="ml-2 text-xs text-zinc-400 font-normal">
                                    {item.meta}
                                </span>
                            </h3>
                            <p className="text-sm text-zinc-400 leading-snug font-[425]">
                                {item.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center space-x-2 text-xs text-zinc-400">
                                {item.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 rounded-md bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <span className="text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                {item.cta || "Explore →"}
                            </span>
                        </div>
                    </div>

                    <div
                        className={`absolute inset-0 -z-10 p-px bg-gradient-to-br from-transparent via-white/10 to-transparent ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    />
                </div>
            ))}
        </div>
    );
}

export default function Services() {
    return (
        <section className="bg-zinc-950 py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-left mb-8 md:mb-16">
                    <h2 className="text-balance text-2xl font-semibold lg:text-5xl text-zinc-50">Our Services</h2>
                    <p className="mt-4 text-zinc-400">Powerful tools and features to help your business grow.</p>
                </div>
                <BentoGrid />
            </div>
        </section>
    );
}
