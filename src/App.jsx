import { Outlet } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <Navbar />

      {/* Main Content */}
      <div className="ml-64 flex-1 flex flex-col">

        <main className="flex-1 p-8">
          <Outlet />
        </main>

        <Footer />

      </div>

    </div>
  );
}

export default App;