


import Navbar from "./conponenets/Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-16 md:pt-20 ml-24 md:ml-0">
        <Outlet />
      </main>
    </>
  );
}

export default App;