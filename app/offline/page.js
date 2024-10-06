// "use client";
// // import './search.css';
// import Image from 'next/image';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import JivoChat from '@/app/Jivochat';

// export default function Home() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredModels, setFilteredModels] = useState([]);
//   const router = useRouter();

//   const printerModels = [
//     'HP ENVY 120 e-All-in-One Printer series',
//     'HP ENVY 4500 e-All-in-One Printer series',
//     'HP ENVY 4510 All-in-One Printer series',
//     'HP ENVY 4520 e-All-in-One Printer series',
//     'HP ENVY 5000 All-in-One Printer series',
//     'HP ENVY 5500 e-All-in-One Printer series',
//     'HP ENVY 5540 All-in-One Printer series',
//     'HP ENVY 5600 e-All-in-One Printer series',
//     'HP ENVY 7600 e-All-in-One Printer series',
//     'HP ENVY Photo 6200 All-in-One Printer series',
//     'HP Deskjet D1360 Printer series',
//     'HP Deskjet Ink Advantage Ultra 4800 series',
//     'HP DeskJet Ink Advantage 2800 All-in One Printer series',
//     'HP DeskJet Ink Advantage 5200 All-in-One Printer series',
//     'HP Deskjet D1330 Printer series',
//     'HP DeskJet 2700 All-in-One Printer series',
//     'HP Laser NS MFP 1005 Printer series',
//     'HP Neverstop Laser MFP 1200 Printer series',
//     'HP LaserJet  Pro M1212nf Multifunction Printer series',
//     'HP Officejet Pro 8100 ePrinter Series',
//     'HP Officejet Pro 8600 e-All-in-One Printer series-N911',
//     'HP Color Laser MFP 170 Printer series',
//     'HP Color LaserJet Pro M281 Multifunction Printer series',



//   ];

//   const handleSearchChange = (event) => {
//     const value = event.target.value;
//     setSearchTerm(value);
//     if (value) {
//       const filtered = printerModels.filter((model) =>
//         model.toLowerCase().includes(value.toLowerCase())
//       );
//       setFilteredModels(filtered);
//     } else {
//       setFilteredModels([]);
//     }
//   };

//   const handleModelClick = (model) => {
//     setSearchTerm(model);  // Set the input value to the selected model
//     setFilteredModels([]); // Clear the dropdown
//   };

//   const handleSearchClick = () => {
//     if (searchTerm) {
//       const searchPath = searchTerm.replace(/\s+/g, '-').replace(/\//g, '-');
//       router.push(`./Pages/install?model=${encodeURIComponent(searchPath)}`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#ececec]">
//       {/* Navbar */}
//       <nav className="bg-white shadow-md h-[70px] mt-[10px]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <a href="#" className="text-xl font-bold text-gray-800">
//                 <img src="https://www.qwebcare.com/help/images/hp-logo.gif" alt="HP Logo" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="flex items-center justify-center py-20 mt-[-10px]">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
//           {/* Left Side: Text Content */}
//           <div className="text-left md:w-1/2">
//             <h1 className="text-3xl md:text-4xl text-[45px] mb-4 w-[1100px] h-[52px]">Set up your printer at 123.hp.com</h1>
//             <p className="text-lg md:text-xl mb-4 h-[40px] w-[730px] text-[30px]  text-[#1c7a17] mt-[-10px]">Welcome to HP Software and Drivers</p>
//             <p className="text-lg md:text-xl mb-4 h-[40px] w-[730px] text-[30px] mt-[-10px]">Download and install your printer software</p>
//             <p className="mb-6 h-[63px] w-[730px] text-[20px] mt-[-10px]">Enter your HP ENVY, OfficeJet, LaserJet or DeskJet model number.</p>

//             <div className="relative mb-8 mt-[-30px]">
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 placeholder='Enter exact model number or name. Ex: ENVY 4520'
//                 className="border border-gray-300 p-3 rounded-l-lg w-[394px] max-w-md"
//               />
//               <button
//                 onClick={handleSearchClick}
//                 className="bg-[#0096D6] text-white px-4 py-3 rounded-r-lg w-[130px] ml-[20px]"
//               >
//                 Search
//               </button>
              
//               {filteredModels.length > 0 && (
//                 <ul className="absolute left-0 mt-1 w-full max-w-md bg-white border border-gray-300 rounded-lg shadow-lg z-10">
//                   {filteredModels.map((model) => (
//                     <li
//                       key={model}
//                       onClick={() => handleModelClick(model)}
//                       className="cursor-pointer p-2 hover:bg-gray-100"
//                     >
//                       {model}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>

//             <div className="text-sm text-[#007DBA] mb-8">
//               <a href="#" className="block mb-2">Where's the model number?</a>
//               <a href="#">My device is not listed</a>
//             </div>

//             <div className="text-sm text-[#007DBA] mt-[200px]">
//               <a href="#">United Kingdom - English</a>
//             </div>
//           </div>

//           {/* Right Side: Image */}
//           <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
//             <Image 
//               src="/picture.png" 
//               alt="Printers" 
//               height={430}
//               width={430}
//               className="max-w-lg  mr-[-405px] object-cover"
//             />
            
//           </div>
//         </div>
//       </div>
//       <JivoChat/>
//     </div>
//   );
// }



// "use client";
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import React, { useState } from 'react';

// function Home() {
//   const router = useRouter();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredModels, setFilteredModels] = useState([]);

//   const printerModels = [
//     'HP OfficeJet Pro 9010 All-in-One Printer',
//     'HP OfficeJet Pro 9000 Series',
//     'HP OfficeJet Pro 9010e All-in-One Printer',
//     'HP OfficeJet Pro 9015 All-in-One Printer',
//     'HP OfficeJet Pro 9014 All-in-One Printer',
//     'HP OfficeJet Pro 9018 All-in-One Printer',
//     'HP ENVY 120 e-All-in-One Printer series',
//     'HP ENVY 4500 e-All-in-One Printer series',
//     'HP ENVY 4510 All-in-One Printer series',
//     'HP ENVY 4520 e-All-in-One Printer series',
//     'HP ENVY 5000 All-in-One Printer series',
//     'HP ENVY 5500 e-All-in-One Printer series',
//     'HP ENVY 5540 All-in-One Printer series',
//     'HP ENVY 5600 e-All-in-One Printer series',
//     'HP ENVY 7600 e-All-in-One Printer series',
//     'HP ENVY Photo 6200 All-in-One Printer series',
//     'HP Deskjet D1360 Printer series',
//     'HP Deskjet Ink Advantage Ultra 4800 series',
//     'HP DeskJet Ink Advantage 2800 All-in-One Printer series',
//     'HP DeskJet Ink Advantage 5200 All-in-One Printer series',
//     'HP Deskjet D1330 Printer series',

//   ];

//   const handleSearchChange = (event) => {
//     const value = event.target.value;
//     setSearchTerm(value);
//     if (value) {
//       const filtered = printerModels.filter((model) =>
//         model.toLowerCase().includes(value.toLowerCase())
//       );
//       setFilteredModels(filtered);
//     } else {
//       setFilteredModels([]);
//     }
//   };

//   const handleModelClick = (model) => {
//     setSearchTerm(model);  // Set the input value to the selected model
//     setFilteredModels([]); // Clear the dropdown
//     const searchPath = model.replace(/\s+/g, '-').replace(/\//g, '-');
//     router.push(`./Pages/install?model=${encodeURIComponent(searchPath)}`);
//   };

//   return (
//     <div className="h-[409px] mt-[80px]">
//       <section 
//         className="flex flex-col justify-center items-center text-center py-12 relative bg-cover bg-center  h-[409px]"
//         style={{
//           backgroundImage: "url('https://wingscarepro.com/setup/resources/assets/css/page/resources/assets/img/top_background_image.png')"
//         }}
//       >
//         <div className="absolute inset-0 opacity-80"></div>
//         <div className="relative z-10 text-white 2xl:mt-[142px] xl:mt-[116px] 2xl:ml-[-584px] xl:ml-[-338px]">
//           <h1 className="text-4xl font-hp-simplified text-[44px] 2xl:ml-[-267px] xl:ml-[-236px]">Set up your Printer</h1>
//           <p className="mt-[35px] text-lg text-[24px] xl:ml-[74px] 2xl:ml-[46px]">Enter your printer name and model number to get the right drivers for your printer.</p>

//           {/* Input Section */}
//           <div className="mt-8 flex space-x-4 justify-center">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleSearchChange}
//               placeholder="Enter your product name here. For example: 'OfficeJet 9010'"
//               className="px-4 py-2 w-full max-w-lg rounded-md text-gray-700 2xl:ml-[-19px] xl:ml-[-19px]"
//             />
//             <button 
//               onClick={() => handleModelClick(searchTerm)} // Use the search term
//               className="bg-gray-300 text-gray-900 px-6 py-2 rounded-md w-[100px] h-[48px]"
//             >
//               Search
//             </button>
//           </div>

//           {/* Dropdown for filtered models */}
//           {filteredModels.length > 0 && (
//             <ul className="absolute left-0 mt-1 w-full max-w-lg bg-white border border-gray-300 rounded-lg shadow-lg z-10 2xl:ml-[24px] xl:ml-[36px] text-[#007DBA]">
//               {filteredModels.map((model) => (
//                 <li
//                   key={model}
//                   onClick={() => handleModelClick(model)}
//                   className="cursor-pointer p-2 hover:bg-gray-100"
//                 >
//                   {model}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         <div className="z-10 mt-12">
//           <img
//             src="https://wingscarepro.com/setup/resources/assets/img/defaultPrinterSetup.png"  
//             alt="Printer setup devices"
//             width={350}
//             height={196}
//             className="object-contain 2xl:ml-[751px] xl:ml-[674px]"
//           />
//         </div>
//       </section>
//       <h1 className="text-[18px] w-[832px] h-[51px] ml-[369px] mt-[100px]">Install Smart driver and drivers on each mobile device or computer that you want to print from. Add the printer on the new device.</h1>
//       <h1 className="mt-[30px] ml-[369px]">Need additional help with set-up? Visit <span className="text-[#007DBA]">Support</span></h1>
//     </div>
//   );
// }

// export default Home;



"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import JivoChat from '../Jivochat';

function Home() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredModels, setFilteredModels] = useState([]);

  const printerModels = [
    'HP OfficeJet Pro 9010 All-in-One Printer',
    'HP OfficeJet Pro 9000 Series',
    'HP OfficeJet Pro 9010e All-in-One Printer',
    'HP OfficeJet Pro 9015 All-in-One Printer',
    'HP OfficeJet Pro 9014 All-in-One Printer',
    'HP OfficeJet Pro 9018 All-in-One Printer',
    'HP ENVY 120 e-All-in-One Printer series',
    'HP ENVY 4500 e-All-in-One Printer series',
    'HP ENVY 4510 All-in-One Printer series',
    'HP ENVY 4520 e-All-in-One Printer series',
    'HP ENVY 5000 All-in-One Printer series',
    'HP ENVY 5500 All-in-One Printer series',
    'HP ENVY 5540 All-in-One Printer series',
    'HP ENVY 5600 e-All-in-One Printer series',
    'HP ENVY 7600 e-All-in-One Printer series',
    'HP ENVY Photo 6200 All-in-One Printer series',
    'HP Deskjet D1360 Printer series',
    'HP Deskjet Ink Advantage Ultra 4800 series',
    'HP DeskJet Ink Advantage 2800 All-in-One Printer series',
    'HP DeskJet Ink Advantage 5200 All-in-One Printer series',
    'HP Deskjet D1330 Printer series',
  ];

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value) {
      const filtered = printerModels.filter((model) =>
        model.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredModels(filtered);
    } else {
      setFilteredModels([]);
    }
  };

  const handleModelClick = (model) => {
    setSearchTerm(model); // Set the input value to the selected model
    setFilteredModels([]); // Clear the dropdown after selection
  };

  const handleSearchClick = () => {
    if (searchTerm) {
      const searchPath = searchTerm.replace(/\s+/g, '-').replace(/\//g, '-');
      router.push(`./offline/install?model=${encodeURIComponent(searchPath)}`); // Navigate to the install page
    } else {
      alert("Please select or enter a model before searching."); // Alert if the input is empty
    }
  };

  return (
    <>
    <div className="h-[409px] mt-[80px]">
      <section 
        className="flex flex-col justify-center items-center text-center py-12 relative bg-cover bg-center h-[409px]"
        style={{
          backgroundImage: "url('https://wingscarepro.com/setup/resources/assets/css/page/resources/assets/img/top_background_image.png')"
        }}
      >
        <div className="absolute inset-0 opacity-80"></div>
        <div className="relative z-10 text-white 2xl:mt-[142px] xl:mt-[116px] 2xl:ml-[-825px] xl:ml-[-567px] ">
          <h1 className="text-4xl font-hp-simplified text-[44px] 2xl:ml-[-290px] xl:ml-[-309px]">Set up HP Printer</h1>
          <p className="mt-[35px] text-[27px] text-[24px] xl:ml-[377px] 2xl:ml-[406px]">Enter your printer name and model number to get the right drivers for your printer.</p>

          {/* Input Section */}
          <div className="mt-8 flex space-x-4 justify-center">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Enter your product name here. For example: 'OfficeJet 9010'"
              className="px-4 py-2 w-full max-w-lg rounded-md text-gray-700 2xl:ml-[22px] xl:ml-[-19px]"
            />
            <button 
              onClick={handleSearchClick} // Use the search click function  
              className="bg-gray-300 text-gray-900 rounded-md w-[100px] h-[48px] 2xl:ml-[40px] "
              style={{ marginLeft: '41px' }}
            >
              Search
            </button>
          </div>

          {/* Dropdown for filtered models */}
          {filteredModels.length > 0 && (
            <ul className="absolute left-0 mt-1 w-full max-w-lg bg-white border border-gray-300 rounded-lg shadow-lg z-10 2xl:ml-[409px] xl:ml-[223px] text-black">
              {filteredModels.map((model) => (
                <li
                  key={model}
                  onClick={() => handleModelClick(model)} // Set model on click
                  className="cursor-pointer p-2 hover:bg-gray-100"
                >
                  {model}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative z-10 mt-12 ml-auto">
          <img
            src="https://wingscarepro.com/setup/resources/assets/img/defaultPrinterSetup.png"  
            alt="Printer setup devices"
            width={350}
            height={196}
            className="object-contain 2xl:mr-[436px] xl:mr-[202px] 2xl:mr-[232px]"
          />
        </div>
      </section>
      <h1 className="text-[18px] w-[832px] h-[51px] ml-[369px] mt-[100px]">Install Smart driver and drivers on each mobile device or computer that you want to print from. Add the printer on the new device.</h1>
      <h1 className="mt-[30px] ml-[369px]">Need additional help with set-up? Visit <span className="text-[#007DBA]">Support</span></h1>
    </div>
    <JivoChat/>
    </>
  );
}

export default Home;
