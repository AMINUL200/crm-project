import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const FAQSection: React.FC = () => {
    const [activeId, setActiveId] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            id: 1,
            question: "How do I get started with your service?",
            answer: "Getting started is easy! Simply sign up for an account on our website, choose a plan that fits your needs, and follow our onboarding guide. We'll have you up and running in no time."
        },
        {
            id: 2,
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. All payments are processed securely through our payment partners."
        },
        {
            id: 3,
            question: "Can I cancel my subscription anytime?",
            answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. You'll continue to have access until the end of your current billing period."
        },
        {
            id: 4,
            question: "Do you offer discounts for non-profits?",
            answer: "Absolutely! We offer special pricing for registered non-profit organizations. Please contact our sales team with proof of your non-profit status to learn more about our discounted plans."
        },
        {
            id: 5,
            question: "How is my data protected?",
            answer: "We take security seriously. All data is encrypted both in transit and at rest. We regularly undergo third-party security audits and are compliant with major data protection regulations including GDPR."
        },
        {
            id: 6,
            question: "What kind of customer support do you offer?",
            answer: "We provide 24/5 email support with response times under 4 hours during business days. Premium plans include live chat and phone support. Our extensive knowledge base is always available."
        }
    ];

    const toggleFAQ = (id: number) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
                <span className="text-sm font-semibold tracking-wider text-indigo-600 uppercase">FAQs</span>
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent">
                    Frequently Asked Questions
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Everything you need to know about our service. Can't find the answer you're looking for?
                </p>
            </div>

            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div
                        key={faq.id}
                        className={`relative overflow-hidden rounded-xl p-0.5 ${activeId === faq.id ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-gray-100'}`}
                    >
                        <div className="bg-white rounded-xl overflow-hidden">
                            <button
                                onClick={() => toggleFAQ(faq.id)}
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
                                aria-expanded={activeId === faq.id}
                                aria-controls={`faq-content-${faq.id}`}
                            >
                                <div className="flex items-start">
                                    <span className="text-indigo-600 font-bold mr-4 text-lg">{String(index + 1).padStart(2, '0')}</span>
                                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                                        {faq.question}
                                    </h3>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${activeId === faq.id ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-600 group-hover:bg-indigo-100 group-hover:text-indigo-600'}`}>
                                        <FontAwesomeIcon
                                            icon={activeId === faq.id ? faMinus : faPlus}
                                            className={`w-5 h-5 text-gray-500 transform transition-transform duration-400 ease-in-out ${activeId === faq.id ? '-rotate-360' : 'rotate-0'}`}
                                        />
                                    </div>
                                </div>
                            </button>

                            <div
                                id={`faq-content-${faq.id}`}
                                className={`transition-all duration-500 ease-in-out ${activeId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-6 pb-6 pt-0 ml-14">
                                    <div className="border-l-2 border-indigo-200 pl-4">
                                        <p className="text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
                <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                    Can't find the answer you're looking for? Our support team is happy to help.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                        Contact Support
                    </button>
                    <button className="border-2 border-gray-300 hover:border-indigo-400 text-gray-700 hover:text-indigo-600 font-medium py-3 px-8 rounded-lg transition-all duration-300">
                        Live Chat
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;