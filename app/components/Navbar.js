import Link from 'next/link';
import PrintIcon from '@mui/icons-material/Print';
import React, { useState } from 'react';

const Chatlink = () => {
  const [hover, setHover] = useState(false);

  return (
    <header className="bg-white p-4 text-right h-18 mt-5 mx-auto mr-[80px]">
      <div
        className="chat-now text-2xl text-[#1c85c1] cursor-pointer relative inline-block"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="line-before"></div> {/* Horizontal line */}
        <i className="fas fa-phone-square-alt mr-2" aria-hidden="true"></i>
        <span className='text-[24px]'>Chat Now</span>
        <div className={`absolute bottom-[-5px] right-0 h-[4px] bg-[#1c85c1] transition-all duration-300 ease-in-out ${hover ? 'w-[700%]' : 'w-0'}`}></div>
      </div>
    </header>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="flex gap-5 items-center py-3 justify-between">
        <ul className="ml-[80px] flex gap-8 text-[#1C8DCE] text-[24px]">
          <Link legacyBehavior href="/" passHref>
            <a className="hover:text-[#3730a3] p-2 rounded">Home</a>
          </Link>
          <Link legacyBehavior href="/offline" passHref>
            <a className="hover:text-[#3730a3] p-2 rounded">Printer Offline</a>
          </Link>
          <Link legacyBehavior href="/printer" passHref>
            <a className="hover:text-[#3730a3] p-2 rounded">Printer Setup</a>
          </Link>
          <Link legacyBehavior href="/scanner" passHref>
            <a className="hover:text-[#3730a3] p-2 rounded">Scanner Setup</a>
          </Link>
          {/* <Link legacyBehavior href="/privacypolicy" passHref>
            <a className="hover:text-[#3730a3] p-2 rounded">Privacy Policy</a>
          </Link> */}
        </ul>
        
        {/* Chatlink on the right */}
        <div className="ml-auto">
          <Chatlink />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
