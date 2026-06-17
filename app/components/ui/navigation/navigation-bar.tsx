import Link from "next/link";
import { Logo } from "../logo";

export default function NavigationBar() {
    return (
        <div>
            <div className="fixed top-4 left-4 z-40">
                <div className="h-14 w-auto rounded-sm">
                    <div className="flex items-center justify-center h-full w-full gap-4">
                        <div className="flex items-center justify-center gap-x-2 px-2 w-auto">
                            <Link href="/" className="h-full w-full cursor-pointer">
                                <Logo size="md" />
                            </Link>
                        </div>
                        <div className="group/links flex items-center justify-center gap-x-2 px-2 w-auto">
                            <Link href="/work" className="h-full w-full cursor-pointer group-hover/links:opacity-50 hover:group-hover/links:opacity-100 transition-all duration-150 ease-linear">
                                <span className="flex items-center justify-center gap-x-2 px-2 py-2 w-auto">
                                    <span className="pl-2 block">
                                        <span className="font-mono text-base leading-4 tracking-normal uppercase relative" >
                                            Work
                                        </span>
                                    </span>
                                </span>
                            </Link>
                            <Link href="/about" className="h-full w-full cursor-pointer group-hover/links:opacity-50 hover:group-hover/links:opacity-100 transition-all duration-150 ease-linear">
                                <span className="flex items-center justify-center gap-x-2 px-2 py-2 w-auto">
                                    <span className="pl-2 block">
                                        <span className="font-mono text-base leading-4 tracking-normal uppercase relative" >
                                            About
                                        </span>
                                    </span>
                                </span>
                            </Link>
                            <Link href="/contact" className="h-full w-full cursor-pointer group-hover/links:opacity-50 hover:group-hover/links:opacity-100 transition-all duration-150 ease-linear">
                                <span className="flex items-center justify-center gap-x-2 px-2 py-2 w-auto">
                                    <span className="pl-2 block">
                                        <span className="font-mono text-base leading-4 tracking-normal uppercase relative" >
                                            Contact
                                        </span>
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}