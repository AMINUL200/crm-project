import  { useState } from 'react';
import SignupContent from '../../components/auth/SignupContent';
import LoginContent from '../../components/auth/LoginContent';
import LoginForm from '../../components/auth/LoginForm';
import SignupFormm from '../../components/auth/SignupFormm';
import CompaniesMarquee from '../../components/Animation/MarqueeEffect/CompaniesMarquee';
import OurPartners from '../../components/common/OurPartners';
import CrmComparisonTable from '../../components/common/CrmComparisonTable ';
import TestimonialCarousel from '../../components/common/TestimonialCarousel';
import FAQSection from '../../components/common/FAQSection';
// import { ScrollVelocityDemo } from '../../components/auth/ScrollVelocityDemo ';

const AuthContainer = () => {
    const [isLogin, setIsLogin] = useState<boolean>(true);

    const handleSwitch = () => {
        setIsLogin((prev) => !prev);
    };

    return (
        <>

            <div className="min-h-screen flex items-center justify-center bg-gray-100 ">


                {/* Desktop Layout (side-by-side) */}
                <div className="hidden md:block relative w-[100%]  h-[100vh] bg-white  shadow-lg overflow-hidden">
                    {/* Forms Container */}
                    <div className={`absolute w-1/2 h-full top-0 left-0 z-20 transition-all duration-500 ease-in-out ${isLogin ? 'translate-x-0' : 'translate-x-full'}`}>
                        <div className={`flex justify-center items-center h-full p-8 transition-opacity duration-300 ${isLogin ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                            <LoginForm onSwitch={handleSwitch} />
                        </div>
                        <div className={`flex justify-center items-center absolute top-0 left-0 w-full h-full p-8 transition-opacity duration-300 ${!isLogin ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                            <SignupFormm onSwitch={handleSwitch} />
                        </div>
                    </div>

                    {/* Content Container */}
                    <div className={`absolute w-1/2 h-full top-0 right-0 z-10 transition-all duration-500 ease-in-out ${isLogin ? 'translate-x-0' : '-translate-x-full'}`}>
                        {/* Login Content */}
                        <div className={`flex justify-center items-center h-full p-8 z-22 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 text-white transition-opacity duration-300 ${isLogin ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                            <LoginContent />
                        </div>

                        {/* Signup Content */}
                        <div className={`flex justify-center items-center absolute top-0 left-0 w-full h-full p-8 bg-gradient-to-br from-purple-600 to-blue-500 text-white transition-opacity duration-300 ${!isLogin ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                            <SignupContent />
                        </div>
                    </div>
                </div>

                {/* Mobile Layout (stacked) */}
                <div className="md:hidden relative w-[100%]  h-[100vh] bg-white  shadow-lg overflow-y-scroll">
                    {/* Forms Container - Will swap positions with content */}
                    <div className={`relative  transition-all duration-500 ease-in-out ${isLogin ? 'translate-y-0 h-[83%] ' : 'translate-y-full h-1/2'}`}>
                        {/* Login Form */}
                        <div className={` absolute  inset-0 p-6 transition-opacity duration-300 ${isLogin ? 'opacity-100' : 'opacity-0 hidden'}`}>
                            <LoginForm onSwitch={handleSwitch} />
                        </div>
                        {/* Signup Form */}
                        <div className={` absolute inset-0 p-6 transition-opacity duration-300 ${!isLogin ? 'opacity-100' : 'opacity-0  hidden'}`}>
                            <SignupFormm onSwitch={handleSwitch} />
                        </div>
                    </div>

                    {/* Content Container - Will swap positions with form */}
                    <div className={`relative h-1/2 transition-all duration-500 ease-in-out ${isLogin ? 'translate-y-0' : '-translate-y-full'}`}>
                        {/* Login Content */}
                        <div className={`flex justify-center items-center absolute inset-0 p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white transition-opacity duration-300 ${isLogin ? 'opacity-100' : 'opacity-0'}`}>
                            <LoginContent />
                        </div>
                        {/* Signup Content */}
                        <div className={`flex justify-center items-center absolute inset-0 p-6 bg-gradient-to-br from-purple-600 to-blue-500 text-white transition-opacity duration-300 ${!isLogin ? 'opacity-100' : 'opacity-0'}`}>
                            <SignupContent />
                        </div>
                    </div>
                </div>


            </div>


            {/* <ScrollVelocityDemo/> */}
            <CompaniesMarquee />
            <div className='py-10'>
                {/* Our Partners */}
                <OurPartners />
            </div>
            {/* Comparison Table */}
            <CrmComparisonTable />

             <div className="bg-gray-200">
                <TestimonialCarousel />
            </div>

            <FAQSection/>

        </>
    );
};

export default AuthContainer;