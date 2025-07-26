import React from 'react'

const FinanceCard = () => {
    return (
        <div className="rainbow-box bg-green-500 rounded-xl overflow-hidden relative"
            style={{
                backgroundImage: "url('images/gif/rainbow.gif')",
                backgroundSize: "cover",
                backgroundBlendMode: "luminosity"
            }}>
            <div className="p-6 text-white">
                {/* Header with icon */}
                <div className="mb-4">
                    <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.525 18.3762L15.0112 10.8625L18.461 7.41268L28.894 17.8457L26.6106 20.1291L30.1441 23.6626L35.961 17.8457L18.461 0.345703L11.4777 7.32896L7.94422 10.8624L11.4777 14.396L15.219 18.1372L21.9107 24.829L18.461 28.2787L8.02796 17.8457L10.3113 15.5623L6.77783 12.0288L0.960938 17.8457L18.461 35.3457L25.4442 28.3625L28.9777 24.829L22.525 18.3762Z" fill="white" />
                    </svg>
                </div>

                {/* Main content */}
                <div className="mb-6">
                    <h4 className="text-xl font-bold mb-3">Your Finances, safe and Secure</h4>
                    <p className="text-sm opacity-90">
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                    </p>
                </div>

                {/* Happy clients section */}
                <div className="flex items-center">
                    <div className="flex -space-x-2 mr-4">
                        {/* Avatar placeholders - replace with actual images */}
                        <div className="w-10 h-10 rounded-full bg-white/30 border-2 border-white"></div>
                        <div className="w-10 h-10 rounded-full bg-white/30 border-2 border-white"></div>
                        <div className="w-10 h-10 rounded-full bg-white/30 border-2 border-white"></div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold">15k+</h4>
                        <span className="text-sm opacity-90">Happy Clients</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinanceCard
