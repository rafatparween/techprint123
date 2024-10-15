"use client"
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Customer from "./components/Customer";
import Technicians from "./components/Technicians";
import Assistance from "./components/Assistance";
import Avoid from "./components/Avoid";
import Helppage from "./components/Helppage";

import PrinterSetup from "./services/content/PrinterSetup";
import { Help } from "@mui/icons-material";

function Home() {
  return (
    <>

      <NavBar />

      <PrinterSetup/>
      <Technicians/>
      <Assistance/>
      <Avoid/>
      <Helppage/>
      {/* <Customer/> */}
      <Footer />


    </>

  )
}
export default Home;