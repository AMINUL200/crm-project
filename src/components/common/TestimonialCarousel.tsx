import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    avatar: string;
}

const TestimonialCarousel: React.FC = () => {
const swiperRef = useRef<SwiperType | null>(null);

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "John Doe",
            role: "CEO, Company Inc.",
            content: "I was skeptical at first, but after using it for just one week, I'm a complete convert. The customer support is exceptional too!",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            id: 2,
            name: "Jane Smith",
            role: "Marketing Director",
            content: "I was skeptical at first, but after using it for just one week, I'm a complete convert. The customer support is exceptional too!",
            avatar: "https://randomuser.me/api/portraits/women/1.jpg"
        },
        {
            id: 3,
            name: "Robert Johnson",
            role: "Product Manager",
            content: "The value for money is unbeatable. We've tried several alternatives but none come close in terms of features and reliability.",
            avatar: "https://randomuser.me/api/portraits/men/2.jpg"
        },
        {
            id: 4,
            name: "Emily Davis",
            role: "UX Designer",
            content: "As a designer, I appreciate the attention to detail in the interface. It's both beautiful and functional.",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            id: 5,
            name: "Michael Wilson",
            role: "Developer",
            content: "The API documentation is superb and integration was a breeze. My team was up and running in no time.",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg"
        },
    ];



    return (
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Customers Say</h2>

            <div className="relative">
                {/* Navigation buttons */}
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors hidden md:block"
                    aria-label="Previous testimonial"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors hidden md:block"
                    aria-label="Next testimonial"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <Swiper
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            centeredSlides: true
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    loop={true}
                    className="py-4"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="relative group bg-white/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800/70 p-6 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl h-full flex flex-col justify-between overflow-hidden">
                                {/* Gradient accent border */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-2xl"></div>

                                {/* Quote icon */}
                                <svg
                                    className="absolute top-4 right-4 w-8 h-8 text-purple-300 opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.17 6.17A5.002 5.002 0 007 16h4v-6H9a1 1 0 01-.83-1.56zM17.17 6.17A5.002 5.002 0 0017 16h4v-6h-2a1 1 0 01-.83-1.56z" />
                                </svg>

                                {/* Content */}
                                <div className="flex-grow overflow-y-auto h-[120px] px-8 text-gray-700 dark:text-gray-200">
                                    <p className="text-lg font-medium italic leading-relaxed transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-white">
                                        “{testimonial.content}”
                                    </p>
                                </div>

                                {/* Footer */}
                                <div className="flex items-center mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-purple-500"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Mobile navigation dots */}
            <div className="flex justify-center mt-8 space-x-2 md:hidden">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => swiperRef.current?.slideTo(index)}
                        className={`w-3 h-3 rounded-full ${swiperRef.current?.activeIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel;