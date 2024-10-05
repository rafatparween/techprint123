const Home = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between p-10 bg-white h-[1000px] bg-[#37718e] mt-[100px]">
            <div className="lg:w-1/2 flex items-center justify-center">
                <img src="https://copyvision.co.uk/wp-content/uploads/2017/04/print-management1.jpg" alt="printer" className="w-full max-w-md" />
            </div>
            <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    About <span className="text-blue-600">Us</span>?
                </h2>
                <p className="text-gray-700 mb-6">
                    Empowering Small Businesses, One Print at a Time

                    At 123techprint, we believe that small businesses are the backbone of our communities and economies. That's why we're dedicated to providing the tools and resources they need to thrive. Since our inception, we've been on a mission to empower small business owners to confidently market themselves with affordable, high-quality, and customizable print and digital solutions.
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why <span className="text-blue-600">123techprint</span>?
                </h2>
                <p className="text-gray-700 mb-6">
                    Unmatched Quality: Our products are crafted with care, using only the best materials and cutting-edge printing technology.
                    Affordable Solutions: We believe that marketing should be accessible to everyone. That’s why we offer competitive pricing without compromising on quality.
                    Customization Made Easy: With a wide range of templates and easy-to-use design tools, we make it simple for you to create custom products that reflect your brand's unique identity.
                    Global Reach, Local Impact: While we serve customers all over the world, we understand the importance of local connections. Our goal is to help you make a lasting impression in your community and beyond.
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Our <span className="text-blue-600">Story</span>?
                </h2>
                <p className="text-gray-700 mb-6">
                    What started as a simple idea to provide easy-to-use, online printing services has grown into a global company trusted by millions of businesses worldwide. Over the years, 123techprint has evolved to meet the changing needs of our customers, offering a wide range of products, from business cards and signage to websites and digital marketing services.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-start">
                        <div className="text-blue-600 text-4xl mr-4">💼</div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Empowering Small Businesses</h3>
                            <p className="text-gray-700">
                                We’re dedicated to helping small businesses thrive with affordable, high-quality, customizable print and digital solutions.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="text-blue-600 text-4xl mr-4">🌍</div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Global Reach, Local Impact</h3>
                            <p className="text-gray-700">
                                Serving millions of customers worldwide while making a local impact in every community we touch.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="text-blue-600 text-4xl mr-4">🔧</div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Easy Customization</h3>
                            <p className="text-gray-700">
                                Our user-friendly tools allow you to create custom products that perfectly represent your brand.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="text-blue-600 text-4xl mr-4">🏆</div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Unmatched Quality</h3>
                            <p className="text-gray-700">
                                We deliver premium products using the best materials and cutting-edge printing technology to ensure your business shines.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
