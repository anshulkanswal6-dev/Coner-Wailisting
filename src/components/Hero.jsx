import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { NoiseBackground } from './NoiseBackground';

const Hero = () => {
    const integrations = [
        {
            name: 'HubSpot',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg',
            status: 'Connected',
            description: 'Automate lead qualification and sync directly to your CRM pipeline.'
        },
        {
            name: 'Salesforce',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
            status: 'Live',
            description: 'Inject qualified opportunities into your sales funnel in real-time.'
        },
        {
            name: 'Zoho CRM',
            icon: 'https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zohologowhitebg.svg',
            status: 'Connected',
            description: 'Seamlessly transition leads from AI agents to your sales team.'
        },
        {
            name: 'Calendly',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Calendly_logo.svg',
            status: 'Active',
            description: 'Directly book meetings through natural language conversations.'
        },
    ];

    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#F9F9FB]">

            <div className="max-w-7xl mx-auto relative z-20">
                <div className="flex flex-col items-center text-center mb-16">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4 inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-slate-200 bg-[#F1F1F4]"
                    >
                        <div className="flex -space-x-1.5">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className={`w-5 h-5 rounded-full border-2 border-white bg-slate-200 overflow-hidden`}>
                                    <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="User" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <span className="text-[11px] font-bold text-primary tracking-tight">Coner.AI Is Live • Join 2,000+ active founders</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 max-w-4xl leading-[0.85] mb-6 font-display"
                    >
                        Automate Your <br />
                        <span className="text-primary italic">Growth Engine</span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-500 max-w-2xl font-bold leading-tight mb-8"
                    >
                        Deploy AI agents that actually convert. <br className="hidden md:block" />
                        Sync qualified leads to your CRM in real-time.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <NoiseBackground
                            containerClassName="w-fit p-1 rounded-2xl mx-auto shadow-2xl shadow-primary/30"
                            gradientColors={["rgb(108, 99, 255)", "rgb(150, 100, 255)", "rgb(100, 150, 255)"]}
                        >
                            <a href="#waitlist" className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[14px] bg-white px-12 py-5 text-xl font-black text-black transition-all duration-100 active:scale-95 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.5)_inset]">
                                JOIN THE WAITLIST <ChevronRight size={24} strokeWidth={3} className="ml-2" />
                            </a>
                        </NoiseBackground>
                    </motion.div>
                </div>

                {/* Showcase Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="bg-white rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden"
                >
                    <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
                        {/* Left Side Info */}
                        <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center items-start text-left">
                            <span className="px-5 py-2 rounded-full border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-8">
                                Integrations
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6 leading-[0.9]">
                                Real-time <br /> CRM Sync
                            </h2>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10 max-w-md">
                                Connect your sales stack in one click. Coner writes your leads and schedules directly across 50+ platforms.
                            </p>
                            <a href="#waitlist" className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 active:scale-95 transition-all">
                                Join the Waitlist
                            </a>
                        </div>

                        {/* Right Side List */}
                        <div className="flex-1 bg-slate-50/50 p-8 lg:p-16">
                            <div className="space-y-4">
                                {integrations.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.8 + i * 0.1 }}
                                        className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex items-start justify-between group hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-5">
                                            <div className="w-14 h-14 p-3 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                                                <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-black text-slate-900 tracking-tight">{item.name}</span>
                                                    <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                                                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-slate-500 font-medium leading-normal max-w-[240px]">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1 shrink-0">{item.status}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
