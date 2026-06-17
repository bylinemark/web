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
                    </div>
                </div>
            </div>
        </div>
    )
}