import Navbar from "./conponenets/Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="flex min-h-screen">
      <Navbar />

      {/* Main Content */}
     <main className="ml-20 md:ml-64 flex-1 p-4 md:p-8">
  <Outlet />
</main>
    </div>
  );
}

export default App;