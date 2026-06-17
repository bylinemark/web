import NavigationBar from "./navigation-bar"
import SpacesBar from "./spaces-bar"

export default function Navigation({ locale }: { locale: string }) {
    return (
        <div className="fixed top-0 left-0 z-50 text-white mix-blend-difference">
            <NavigationBar key={locale} />
            <SpacesBar />
        </div>
    )
}