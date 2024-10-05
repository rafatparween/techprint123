// import Head from 'next/head';
// import Header from './components/Header';
// import PrinterGuide from './components/PrinterGuide';
// import PrinterSetup from './components/PrinterSetup';
// import Solutions from './components/Solutions';
// import Support from './components/Support';
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
// import './globals.css'

import Head from "next/head";
import PrinterGuide from "./content/PrinterGuide";
import PrinterSetup from "./content/PrinterSetup";
import Solutions from "./content/Solutions";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import Support from "./content/Support";
import Chatlink from "./content/Chatlink";
import Avoid from "../components/Avoid";
import Digonode from "../components/Digonode";
import Technicians from "../components/Technicians";
import Assistance from "../components/Assistance";
import Helppage from "../components/Helppage";
import ChatSection from "../components/ChatSection";

// import './globals.css'
function Home() {
  return (
    <>
      <Head>
        <title>My Page</title>
      </Head>
      <Chatlink/>
      <PrinterSetup />
      <Digonode/>
      {/* <ChatSection/> */}
      <Technicians/>
      <Assistance/>
      <Avoid/>
      <Helppage/>
      <Support />
      <Solutions />
      <PrinterGuide />
     
    </>
  );
}

export default Home;