// // 

// "use client"
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function InstallingDriversPage() {
//     const router = useRouter();

//     useEffect(() => {
//         // Set a timeout to navigate after 15 seconds
//         const timer = setTimeout(() => {
//             router.push('./process/error'); // Replace '/next-page' with the route you want to navigate to
//         }, 1500000); // 15 seconds in milliseconds

//         // Cleanup the timer if the component is unmounted before the timer completes
//         return () => clearTimeout(timer);
//     }, [router]);

//     return (
//         <>
//             <div className="flex items-center justify-center min-h-screen bg-white">
//                 {/* HP Logo */}
//                 <div className="mr-8">
//                     <img
//                         src="https://www.qwebcare.com/help/images/hp.jpg"
//                         alt="HP Logo"
//                         className="w-24 w-[225px] h-[225px]"
//                     />
//                 </div>


//                 {/* Printer Image */}
//                 <div>
//                     <img
//                         src="https://www.qwebcare.com/help/images/hel.gif"
//                         alt="Printer Image"
//                         className="w-[450px] h-[300px]"
//                     />
//                 </div>
//                 <img
//                     src="https://get4lessghana.com/wp-content/uploads/2022/05/HP-INK-ADVANTAGE-3787.jpg"
//                     alt="Printer Error"
//                     width={550}
//                     height={550}
//                     className='mb-[-103px]'
//                 />
//             </div>
//             <div className='w-[1835px] h-[58px] text-[39px] mt-[-230px] ml-[412px]'>Installing HP Software and Drivers...</div>
//         </>
//     );
// }




"use client";
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function InstallingDriversPage() {
    const router = useRouter();

    useEffect(() => {
        // Set a timeout to navigate after 15 seconds
        const timer = setTimeout(() => {
            router.push('./process/error'); // Replace '/next-page' with the route you want to navigate to
        }, 15000); // 15 seconds in milliseconds

        // Cleanup the timer if the component is unmounted before the timer completes
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-4">
                {/* HP Logo */}
                <div className="mb-4 md:mb-0 md:mr-8 flex-shrink-0">
                    <Image
                        src="/hplogo.png"
                        alt="HP Logo"
                        width={550}
                        height={550}
                        className="w-24 w-[225px] h-[225px]"
                    />
                </div>

                {/* Printer Image */}
                <div className="mb-4 md:mb-0">
                    <Image
                        src="/hel.gif"
                        alt="Printer Image"
                        width={550}
                        height={550}
                        className="2xl:ml-[81px] "
                    />
                </div>

                {/* Error Image */}
                <div className="flex-shrink-0">
                    <Image
                        src="/loadin.jpg"
                        alt="Printer Error"
                        width={550}
                        height={550}
                        className="mb-[-103px]"
                    />
                </div>
            </div>
            {/* <div className="w-[1835px] h-[58px] text-center text-lg md:text-xl lg:text-4xl font-semibold mt-[-297px] ml-[-113px] ">
                Installing HP Software and Drivers...
            </div> */}
            <div className="flex 2xl:justify-center 2xl:ml-[357px] 2xl:mt-[-283px] xl:ml-[310px] xl:mt-[-190px] w-full max-w-4xl h-auto text-lg md:text-xl lg:text-2xl xl:text-4xl font-semibold mt-8 mx-4 md:mx-8 lg:mx-12 mt-[-197px] text-[#007DBA] sm:mt-[-360px]">
                Installing HP Software and Drivers...
            </div>


           
        </>
    );
}

