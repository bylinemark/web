import NavigationBar from "./navigation-bar"
import SpacesBar from "./spaces-bar"

export default function Navigation({ locale }: { locale: string }) {
    return (
        // view-transition-name: nav-bar isolates the nav into its own capture layer
        // so it stays visually static while the page content transitions beneath it.
        <div className="fixed top-0 left-0 z-50 text-white mix-blend-difference" style={{ viewTransitionName: "nav-bar" }}>
            <NavigationBar key={locale} />
            <SpacesBar />
        </div>
    )
}