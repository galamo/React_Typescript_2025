import Routing from "../routing";
import ResponsiveAppBar from "../ui/header-navigation";

export default function Layout() {
  return (
    <div>
      <header>
        <ResponsiveAppBar />
      </header>
      <main>
        <Routing />
      </main>
      <footer>
        <span> Footer..</span>
      </footer>
    </div>
  );
}
