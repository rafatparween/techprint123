import React from 'react';

const Help = () => {
  return (
    <div className="bg-gradient-to-br from-[#003366] to-[#006699] flex items-center justify-center min-h-screen">
      <div className="flex max-w-6xl w-full">
        {/* Text Section */}
        <div className="flex flex-col justify-center w-1/2 p-8 mt-[35px]">
          <h1 className="text-4xl font-bold mb-4 h-[30px] text-gray-500">You're Not Alone,</h1>
          <h1 className='text-[50px] text-[#1C8DCE] w-[509px]'>We're Here To Help</h1>
          <p className="text-lg mb-4 text-white font-semibold">
            Feeling Lonely With A Problem? You Don’t Have To Deal With It All By Yourself.
          </p>
          <p className="text-lg mb-4 text-white font-semibold">
            We Get That Problems Can Be Tough, But We’re Here For You. Just Give Us A Call, And We’ll Be Like A Helpful Friend,
            Ready To Sort Out Your Issues. We’ll Make Sure To Put Your Problems At The Top Of Our List.
          </p>

          {/* Live Chat Support Box */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-6 w-[443px] h-[337px]">
          <img
            src="data:image/jpeg;base64,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" 
            alt="Support Agents"
            width={100}
            height={100}
            objectFit="cover"
            className="ml-[139px]"
          />
            <div className="flex items-center mb-4">
              <span className="ml-4 text-gray-700">Live chat support provides you with the opportunity to engage in real-time, interactive conversations with dedicated support agents.</span>
            </div>
            <button className="bg-[#1C8DCE] text-white px-4 py-2 rounded-lg w-[353px] h-[49px]">
              Live Chat Support
            </button>
          </div>
        </div>

        {/* Image Section */}
        {/* <div className="relative "> */}
          <img
            src="https://img.freepik.com/premium-photo/business-woman-blue-suit-white-background_564692-63140.jpg" 
            alt="Support Agents"
            width={770}
            height={600}
            objectFit="cover"
            className="mt-[53px] ml-[135px]"
          />
        {/* </div> */}

        {/* Side Call Button */}
        {/* <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-6 rounded-l-lg">
          <p className="rotate-90">
            Call for Assistance At +1 (866) 200-9902
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Help;
