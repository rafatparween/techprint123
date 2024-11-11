"use client";
import NavbarSection from '@/app/components/NavbarSection';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';
import FooterSection from '@/app/components/FooterSection';
import Popup from '@/app/components/Popup';
import JivoChat from '@/app/Jivochat';

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
      router.push(`./Pages/install?model=${encodeURIComponent(searchPath)}`); // Navigate to the install page
    } else {
      alert("Please select or enter a model before searching."); // Alert if the input is empty
    }
  };

  return (
    <>
      <NavbarSection />
      <div className="h-[409px] ">
      <section
  className="relative flex flex-col justify-center items-center text-center py-12 h-[409px] bg-cover bg-center"
  style={{
    backgroundImage: "url('https://as1.ftcdn.net/v2/jpg/05/21/66/12/1000_F_521661218_MNYc5lCrIQUKKwBfIGzxJYHYxZzwNof9.jpg')"
  }}
>
  {/* Overlay div for background color */}
  <div className="absolute inset-0 bg-[#007DBA] opacity-60"></div>

  {/* Content of the section */}
  <div className="relative z-10">
    <h1 className="text-white">Your Content Here</h1>
  </div>

          <div className=" inset-0 opacity-80"></div>
          <div className="relative z-10 text-white 2xl:mt-[117px] xl:mt-[165px] 2xl:ml-[-825px] xl:ml-[-567px]  ">
            <h1 className="text-4xl font-hp-simplified text-[44px] 2xl:ml-[12px] xl:ml-[-11px]">Get started with your HP printer</h1>
            <p className="mt-[35px] text-[24px] xl:ml-[281px] 2xl:ml-[314px]">Enter your printer name and model number to get the right HP software and drivers.</p>

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
                Next
              </button>
            </div>



            {/* Dropdown for filtered models */}
            {filteredModels.length > 0 && (
              <ul className="absolute left-0 mt-1 w-full max-w-lg bg-white border border-gray-300 rounded-lg shadow-lg z-10 2xl:ml-[314px] xl:ml-[277px] text-black">
                {filteredModels.map((model) => (
                  <li
                    key={model}
                    onClick={() => handleModelClick(model)} // Set model on click
                    className="cursor-pointer p-2 hover:bg-[#007DBA] hover:text-white"
                  >
                    {model}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className='2xl:ml-[-826px] xl:ml-[-617px] text-white '>
            <Popup/>
            <h1 className='underline 2xl:ml-[-455px] 2xl:mt-[25px] xl:ml-[-455px] xl:mt-[25px]'>My device is not listed</h1>
          </div>



          <div className="flex justify-end  ">
            <img
              src="https://wingscarepro.com/setup/resources/assets/img/defaultPrinterSetup.png"
              alt="Printer setup devices"
              width={350}
              height={196}
              className="object-contain 2xl:ml-[893px] 2xl:mt-[-74px] xl:ml-[631px]"
            />
          </div>

        </section>
        <h1 className="text-[18px] w-[832px] h-[51px] ml-[369px] mt-[100px] text-[#737373] 2xl:ml-[197px] xl:ml-[135px]">Install software and drivers on each computer or mobile device you want to print from.</h1>
        <div className='2xl:ml-[189px] xl:ml-[130px]' style={{ display: 'flex', alignItems: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.00034 9C8.00034 6.79086 9.7912 5 12.0003 5C14.2095 5 16.0003 6.79086 16.0003 9C16.0003 9.6395 15.8506 10.2426 15.5848 10.7775C15.4619 11.0248 15.5628 11.3249 15.8101 11.4478C16.0574 11.5707 16.3574 11.4698 16.4803 11.2225C16.8133 10.5524 17.0003 9.79734 17.0003 9C17.0003 6.23858 14.7618 4 12.0003 4C9.23892 4 7.00034 6.23858 7.00034 9C7.00034 11.3802 8.66297 13.3708 10.8897 13.8761C11.159 13.9372 11.4268 13.7684 11.4879 13.4991C11.5491 13.2298 11.3803 12.962 11.111 12.9009C9.32974 12.4967 8.00034 10.903 8.00034 9ZM5.1405 21.5995C5.78903 18.4045 8.6145 16 12.0005 16C15.3864 16 18.2119 18.4045 18.8604 21.5995C18.9154 21.8701 19.1793 22.0449 19.4499 21.99C19.7205 21.9351 19.8954 21.6712 19.8404 21.4005C19.0992 17.7487 15.8714 15 12.0005 15C8.12955 15 4.90176 17.7487 4.16048 21.4005C4.10555 21.6712 4.2804 21.9351 4.55102 21.99C4.82165 22.0449 5.08556 21.8701 5.1405 21.5995Z" fill="#212121" />
            <path fillRule="evenodd" clipRule="evenodd" d="M12.0002 3C9.02492 3 6.55542 5.16567 6.08209 8.00667C6.31929 8.04573 6.50024 8.25173 6.50024 8.5V11.5C6.50024 11.7761 6.27639 12 6.00024 12H5.00024C4.7241 12 4.50024 11.7761 4.50024 11.5V8.5C4.50024 8.22386 4.7241 8 5.00024 8H5.07113C5.55636 4.60771 8.47377 2 12.0002 2C15.5267 2 18.4441 4.60771 18.9294 8H19.0002C19.2764 8 19.5002 8.22386 19.5002 8.5V11.5C19.5002 11.7761 19.2764 12 19.0002 12C19.0002 13.1046 18.1048 14 17.0002 14H14.5002C14.5002 14.2761 14.2764 14.5 14.0002 14.5H13.0002C12.7241 14.5 12.5002 14.2761 12.5002 14V13C12.5002 12.7239 12.7241 12.5 13.0002 12.5H14.0002C14.2764 12.5 14.5002 12.7239 14.5002 13H17.0002C17.5525 13 18.0002 12.5523 18.0002 12C17.7241 12 17.5002 11.7761 17.5002 11.5V8.5C17.5002 8.25173 17.6812 8.04573 17.9184 8.00667C17.4451 5.16567 14.9756 3 12.0002 3Z" fill="#212121" />
          </svg>
          <h1 className='text-[#737373] ml-[10px]'>
            Need additional help with setup? Visit <span className='underline' style={{ color: '#007DBA' }}>HP Support</span>
          </h1>
        </div>
        <div className="flex items-center 2xl:ml-[193px] 2xl:mt-[59px] xl:ml-[130px] xl:mt-[63px]">
          <Image src="/unitedlogo.png" alt="United States"
            height={50}
            width={50}
            className="w-6 h-6 mr-2" />
          <h1 className="text-lg text-[#007DBA] underline">United States</h1>
        </div>


      </div>
      <div className='mt-[350px]'>
        <FooterSection />

      </div>
      <JivoChat/>

    </>
  );
}

export default Home;













