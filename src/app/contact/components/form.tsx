"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState, FormEvent } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        yourName: "",
        workEmail: "",
        companyName: "",
        jobRole: "",
        sitesManaged: "",
        techStack: "",
        interest: "",
        migrationTimeline: "",
        message: "",
        foundingCustomer: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prev) => ({
                ...prev,
                [name]: checked,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log("Form submitted:", formData);

            setSubmitStatus({
                type: "success",
                message: "Thank you! We'll get back to you soon.",
            });

            setFormData({
                yourName: "",
                workEmail: "",
                companyName: "",
                jobRole: "",
                sitesManaged: "",
                techStack: "",
                interest: "",
                migrationTimeline: "",
                message: "",
                foundingCustomer: false,
            });
        } catch (error) {
            setSubmitStatus({
                type: "error",
                message: "Something went wrong. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className="border border-white/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8"
            style={{
                background:
                    "radial-gradient(80% 60% at 20% 0%, rgba(153, 41, 83, 0.50) 0%, rgba(153, 41, 83, 0.00) 100%)",
            }}
        >
            <div className="mb-5 sm:mb-6 md:mb-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    <h2 className="text-base lg:text-xl font-light text-white">Tell us about your affiliate business</h2>
                </div>
            </div>

            <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                        <label className="block text-xs sm:text-sm font-light text-white mb-1.5 sm:mb-2">
                            Your Name*
                        </label>
                        <input
                            type="text"
                            name="yourName"
                            value={formData.yourName}
                            onChange={handleChange}
                            placeholder="John Smith"
                            required
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/10 rounded-lg text-sm sm:text-base text-white placeholder-white/30 focus:outline-none focus:border-pink-500 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-xs sm:text-sm font-light text-white mb-1.5 sm:mb-2">
                            Work Email*
                        </label>
                        <input
                            type="email"
                            name="workEmail"
                            value={formData.workEmail}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            required
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/10 rounded-lg text-sm sm:text-base text-white placeholder-white/30 focus:outline-none focus:border-pink-500 transition-colors"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                        <label className="block text-xs sm:text-sm font-light text-white mb-1.5 sm:mb-2">
                            Company name
                        </label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="Your agency or brand"
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/10 rounded-lg text-sm sm:text-base text-white placeholder-white/30 focus:outline-none focus:border-pink-500 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-xs sm:text-sm font-light text-white mb-1.5 sm:mb-2">
                            Job role
                        </label>
                        <select
                            name="jobRole"
                            value={formData.jobRole}
                            onChange={handleChange}
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/10 rounded-lg text-sm sm:text-base text-white/30 focus:outline-none focus:border-pink-500 transition-colors appearance-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23999' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right 1rem center',
                            }}
                        >
                            <option value="">Select...</option>
                            <option value="owner">Owner</option>
                            <option value="ceo">CEO</option>
                            <option value="cto">CTO</option>
                            <option value="developer">Developer</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-light text-white mb-2">
                        How many sites do you currently manage? *
                    </label>
                    <select
                        name="sitesManaged"
                        value={formData.sitesManaged}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/10 rounded-lg text-sm sm:text-base text-white/30 focus:outline-none focus:border-pink-500 transition-colors appearance-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23999' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1rem center',
                        }}
                    >
                        <option value="">Select...</option>
                        <option value="1-5">1-5 sites</option>
                        <option value="6-20">6-20 sites</option>
                        <option value="21-50">21-50 sites</option>
                        <option value="51-100">51-100 sites</option>
                        <option value="100+">100+ sites</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-light text-white mb-2">
                        Current tech stack *
                    </label>
                    <select
                        name="techStack"
                        value={formData.techStack}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/10 rounded-lg text-sm sm:text-base text-white/30 focus:outline-none focus:border-pink-500 transition-colors appearance-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23999' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1rem center',
                        }}
                    >
                        <option value="">Select...</option>
                        <option value="wordpress">WordPress</option>
                        <option value="wix">Wix</option>
                        <option value="custom">Custom CMS</option>
                        <option value="nextjs">Next.js</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-light text-white mb-2">
                        What interests you most about Phantom?
                    </label>
                    <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/10 rounded-lg text-sm sm:text-base text-white/30 focus:outline-none focus:border-pink-500 transition-colors appearance-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23999' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1rem center',
                        }}
                    >
                        <option value="">Select...</option>
                        <option value="fingerprint">Unique fingerprints</option>
                        <option value="hosting">Offshore hosting</option>
                        <option value="migration">Fast migration</option>
                        <option value="templates">Casino templates</option>
                        <option value="all">All of the above</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-light text-white mb-2">
                        When are you looking to migrate?
                    </label>
                    <select
                        name="migrationTimeline"
                        value={formData.migrationTimeline}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/10 rounded-lg text-sm sm:text-base text-white/30 focus:outline-none focus:border-pink-500 transition-colors appearance-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23999' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1rem center',
                        }}
                    >
                        <option value="">Select...</option>
                        <option value="asap">ASAP</option>
                        <option value="1-3months">1-3 months</option>
                        <option value="3-6months">3-6 months</option>
                        <option value="exploring">Just exploring</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-light text-white mb-2">
                        Anything else you'd like us to know?
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your specific situation, concern, or questions..."
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/10 rounded-lg text-sm sm:text-base text-white placeholder-white/30 focus:outline-none focus:border-pink-500 transition-colors resize-none"
                    />
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                    <input
                        type="checkbox"
                        name="foundingCustomer"
                        checked={formData.foundingCustomer}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 bg-white/10 border border-white/10 rounded focus:ring-pink-500"
                    />
                    <label className="text-xs sm:text-sm text-white/80">
                        I'm interested in the Founding Customer program (30% off + extras)
                    </label>
                </div>

                {submitStatus.type && (
                    <div
                        className={`p-4 rounded-lg ${submitStatus.type === "success"
                            ? "bg-green-500/10 border border-green-500/50 text-green-400"
                            : "bg-red-500/10 border border-red-500/50 text-red-400"
                            }`}
                    >
                        {submitStatus.message}
                    </div>
                )}

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 sm:py-4 bg-white text-black hover:bg-gray-100 rounded-full font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-center text-xs text-gray-500 mt-2">
                    We respond within 24 hours. No spam, ever.
                </p>
            </form>
        </div>
    );
}
