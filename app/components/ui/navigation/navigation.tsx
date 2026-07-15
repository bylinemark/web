import NavigationBar from "./navigation-bar";
import SpacesBar from "./spaces-bar";

export default function Navigation({ locale }: { locale: string }) {
  return (
    <nav
      className="fixed top-0 left-0 z-100 w-full text-white mix-blend-difference"
      style={{
        viewTransitionName: "site-navigation",
        transform: "translate3d(0, 0, 0)",
      }}
      id="navigation"
    >
      <div className="site-max flex items-center justify-between h-full py-8">
        <NavigationBar key={locale} />
        <SpacesBar />
      </div>
    </nav>
  );
}
