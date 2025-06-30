
const OurPartners = () => {
    return (
        <div className="bg-gradient-to-b from-white to-blue-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                        Sales Challenges
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Selling <span className="text-blue-600">Can Be Tough!</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Navigating through a maze of leads and staying on top of performance everyday can be challenging for your sales team. To truly ace the target they need more than just motivation; they need the right tool!
                    </p>
                </div>

                {/* Stats Section */}
                <div className="relative">
                    {/* Background elements */}
                    <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-xl"></div>
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
                    
                    <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-2xl overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-10">
                            <div className="absolute top-10 left-20 w-16 h-16 bg-white rounded-full"></div>
                            <div className="absolute bottom-20 right-32 w-24 h-24 bg-white rounded-full"></div>
                        </div>
                        
                        <div className="relative z-10 py-12 px-6 sm:px-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                                How a <span className="text-yellow-300">Sales CRM</span> Improves Your Revenue Engine
                            </h2>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                                {/* Stat 1 */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
                                    <span className="block text-5xl font-bold text-yellow-300 text-center mb-2">29%</span>
                                    <p className="text-white/90 text-center text-sm font-medium">
                                        Increase in monthly sales
                                    </p>
                                    <div className="mt-4 flex justify-center">
                                        <div className="w-8 h-1 bg-yellow-300 rounded-full"></div>
                                    </div>
                                </div>
                                
                                {/* Stat 2 */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
                                    <span className="block text-5xl font-bold text-yellow-300 text-center mb-2">34%</span>
                                    <p className="text-white/90 text-center text-sm font-medium">
                                        Improvement in sales productivity
                                    </p>
                                    <div className="mt-4 flex justify-center">
                                        <div className="w-8 h-1 bg-yellow-300 rounded-full"></div>
                                    </div>
                                </div>
                                
                                {/* Stat 3 */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
                                    <span className="block text-5xl font-bold text-yellow-300 text-center mb-2">42%</span>
                                    <p className="text-white/90 text-center text-sm font-medium">
                                        More accuracy in sales forecasting
                                    </p>
                                    <div className="mt-4 flex justify-center">
                                        <div className="w-8 h-1 bg-yellow-300 rounded-full"></div>
                                    </div>
                                </div>
                                
                                {/* Stat 4 */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
                                    <span className="block text-5xl font-bold text-yellow-300 text-center mb-2">14%</span>
                                    <p className="text-white/90 text-center text-sm font-medium">
                                        Reduction in sales cycle
                                    </p>
                                    <div className="mt-4 flex justify-center">
                                        <div className="w-8 h-1 bg-yellow-300 rounded-full"></div>
                                    </div>
                                </div>
                                
                                {/* Stat 5 */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
                                    <span className="block text-5xl font-bold text-yellow-300 text-center mb-2">38%</span>
                                    <p className="text-white/90 text-center text-sm font-medium">
                                        Increase in customer retention
                                    </p>
                                    <div className="mt-4 flex justify-center">
                                        <div className="w-8 h-1 bg-yellow-300 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* CTA Button */}
                            <div className="mt-12 text-center">
                                <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                                    See How It Works
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Testimonial or additional content can go here */}
                <div className="mt-16 text-center">
                    <p className="text-gray-500 italic">
                        "Companies using sales CRMs report seeing measurable improvements within the first 90 days of implementation."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurPartners;