import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: 'What is Coner?',
        answer: 'Coner is an AI-powered customer acquisition OS. It provides a simple code snippet to deploy intelligent AI agents on your website that can handle queries, capture leads, and schedule meetings automatically.',
    },
    {
        question: 'How does Coner work?',
        answer: 'Simply copy our snippet to your site. Coner integrates with your existing tools like HubSpot, Salesforce, and Zoho. It uses advanced LLMs to interact with visitors in both text and voice modes.',
    },
    {
        question: 'Who is Coner for?',
        answer: 'It is built for SaaS Founders, E-commerce owners, Agencies, and anyone looking to automate their customer interaction and lead generation processes without a dedicated 24/7 support team.',
    },
    {
        question: 'Is my data secure on Coner?',
        answer: 'Yes, security is our top priority. We use enterprise-grade encryption and comply with GDPR/CCPA standards. Your customer data is never used to train our base models.',
    },
    {
        question: 'How does pricing work?',
        answer: 'We offer a free Starter plan for small projects. Our paid plans scale with your usage, based on the number of interactions and advanced features like custom CRM mapping and voice agents.',
    },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-100 last:border-0 group">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-8 text-left focus:outline-none"
            >
                <span className={`text-lg transition-all duration-300 font-bold ${isOpen ? 'text-primary' : 'text-slate-800'}`}>
                    {question}
                </span>
                <div className={`w-8 h-8 rounded-full border-2 border-gray-100 flex items-center justify-center transition-all ${isOpen ? 'bg-primary border-primary text-white' : 'text-slate-400 group-hover:border-primary group-hover:text-primary'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 text-slate-600 leading-relaxed text-base">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-32 px-6 bg-[#F9F9FB]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[11px] font-black mb-6 uppercase tracking-[0.2em]">
                        Support & Guidance
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter font-display leading-[0.85]">
                        Common <br /> Questions
                    </h2>
                    <p className="text-lg md:text-xl text-slate-500 font-medium max-w-xl mx-auto leading-tight">
                        Everything you need to know about automating your growth with Coner.AI.
                    </p>
                </div>

                <div className="bg-white border border-slate-100 rounded-[40px] px-8 md:px-12 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
