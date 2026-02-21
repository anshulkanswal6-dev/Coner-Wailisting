import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2, ChevronDown, Rocket, ShoppingBag, Layout, Code, GraduationCap, User, Hand, Users, Bot, CircleSlash } from 'lucide-react';
import CustomSelect from './CustomSelect';
import { supabase } from '../lib/supabase';

const WaitlistForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        current_method: '',
        used_chatbot: false,
        dislikes: [],
        website: '',
        willing_to_pay: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const roles = [
        { label: 'SaaS Founder', value: 'SaaS Founder', icon: Rocket },
        { label: 'E-commerce Owner', value: 'E-commerce Owner', icon: ShoppingBag },
        { label: 'Agency', value: 'Agency', icon: Layout },
        { label: 'Developer', value: 'Developer', icon: Code },
        { label: 'Student', value: 'Student', icon: GraduationCap },
        { label: 'Other', value: 'Other', icon: User },
    ];

    const methods = [
        { label: 'Manually', value: 'Manually', icon: Hand },
        { label: 'Human support team', value: 'Human support team', icon: Users },
        { label: 'Chatbot', value: 'Chatbot', icon: Bot },
        { label: 'No system', value: 'No system', icon: CircleSlash },
    ];
    const dislikeOptions = [
        'Too dumb / scripted',
        'Hard to train',
        'Doesn’t convert',
        'Expensive',
        'Bad UI',
    ];

    const handleCheckboxChange = (option) => {
        setFormData((prev) => ({
            ...prev,
            dislikes: prev.dislikes.includes(option)
                ? prev.dislikes.filter((o) => o !== option)
                : [...prev.dislikes, option],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const { data, error: submitError } = await supabase
                .from('waitlist_responses')
                .insert([formData]);

            if (submitError) throw submitError;

            setIsSubmitted(true);
        } catch (err) {
            console.error('Submission error:', err);
            // Even if supabase fails, we might want to simulate success or show message
            // for the sake of the demo, but I'll show error if it's not configured.
            if (err.message.includes('Fetch')) {
                setError('Supabase credentials not configured. Please check src/lib/supabase.js');
            } else {
                setError(err.message);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <section id="waitlist" className="section-padding flex justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-12 rounded-[40px] shadow-2xl shadow-primary/10 border border-primary/10 text-center max-w-xl w-full"
                >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">You're on the list!</h2>
                    <p className="text-slate-600">
                        Thank you for joining the Coner waitlist. We'll be in touch soon with exclusive early access.
                    </p>
                </motion.div>
            </section>
        );
    }

    return (
        <section id="waitlist" className="py-32 px-6 bg-[#F9F9FB] relative overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[11px] font-black mb-6 uppercase tracking-[0.2em]">
                        Early Access
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter font-display leading-[0.85]">
                        Coner Waitlist — <br /> <span className="text-primary italic">Launching Soon</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-500 font-medium max-w-xl mx-auto leading-tight">
                        Welcome to the future of customer acquisition. Secure your spot in the engine.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-50 p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm"
                >
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700 ml-1">Name *</label>
                            <input
                                required
                                type="text"
                                placeholder="John Doe"
                                className="input-premium"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700 ml-1">Email *</label>
                            <input
                                required
                                type="email"
                                placeholder="john@example.com"
                                className="input-premium"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        {/* Role Dropdown */}
                        <CustomSelect
                            label="What best describes you?"
                            required
                            options={roles}
                            value={formData.role}
                            onChange={(val) => setFormData({ ...formData, role: val })}
                        />

                        {/* Handling Queries */}
                        <CustomSelect
                            label="How do you currently handle queries?"
                            options={methods}
                            value={formData.current_method}
                            onChange={(val) => setFormData({ ...formData, current_method: val })}
                        />

                        {/* Used Chatbot before */}
                        <div className="md:col-span-2">
                            <CustomSelect
                                label="Have you used a chatbot before?"
                                options={[
                                    { label: 'No, never used one', value: 'No', icon: CircleSlash },
                                    { label: 'Yes, I use them regularly', value: 'Yes', icon: Bot }
                                ]}
                                value={formData.used_chatbot ? "Yes" : "No"}
                                onChange={(val) => setFormData({ ...formData, used_chatbot: val === "Yes" })}
                            />
                        </div>

                        {/* Checkboxes (Conditional) */}
                        {formData.used_chatbot && (
                            <div className="md:col-span-2 space-y-4 bg-white p-8 rounded-2xl border border-gray-200 animate-in fade-in slide-in-from-top-2 duration-300">
                                <label className="text-sm font-semibold text-slate-700">If yes, what do you dislike about it?</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                                    {dislikeOptions.map((option) => (
                                        <label key={option} className="flex items-center gap-3 group cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="hidden"
                                                checked={formData.dislikes.includes(option)}
                                                onChange={() => handleCheckboxChange(option)}
                                            />
                                            <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${formData.dislikes.includes(option) ? 'bg-primary border-primary' : 'border-gray-200'
                                                }`}>
                                                {formData.dislikes.includes(option) && <CheckCircle2 size={16} className="text-white" />}
                                            </div>
                                            <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Website */}
                        <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-semibold text-slate-700 ml-1">Company / Personal Website</label>
                            <input
                                type="url"
                                placeholder="https://example.com"
                                className="input-premium"
                                value={formData.website}
                                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                            />
                        </div>

                        {/* Willing to pay */}
                        <div className="space-y-4 md:col-span-2">
                            <label className="text-sm font-semibold text-slate-700 ml-1">
                                If this saves you time and brings qualified leads, how much would you pay monthly? *
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {['$10-30', '$30-100', '$100-300', '$300+'].map((price) => (
                                    <button
                                        key={price}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, willing_to_pay: price })}
                                        className={`px-4 py-4 rounded-2xl border-2 font-medium transition-all ${formData.willing_to_pay === price
                                            ? 'border-primary bg-primary/5 text-primary'
                                            : 'border-gray-100 bg-white text-slate-500 hover:border-gray-200'
                                            }`}
                                    >
                                        {price}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="md:col-span-2 p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100">
                                {error}
                            </div>
                        )}

                        {/* Submit */}
                        <div className="md:col-span-2 mt-4">
                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full btn-primary py-5 text-xl flex items-center justify-center gap-3 disabled:opacity-50"
                            >
                                {isSubmitting ? <Loader2 className="animate-spin" /> : 'Get Early Access'}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default WaitlistForm;
