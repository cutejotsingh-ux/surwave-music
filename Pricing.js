function Pricing() {
    return (
        <section id="pricing" className="section-padding bg-[#0f172a] relative overflow-hidden" data-name="pricing" data-file="components/Pricing.js">
            {/* Background blobs */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl translate-y-1/3 translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple <span className="text-gradient">Pricing</span></h2>
                    <p className="text-gray-400">Start for free, upgrade for professional features.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Free Plan */}
                    <div className="glass-card p-8 flex flex-col">
                        <div className="mb-4">
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Starter</span>
                            <h3 className="text-4xl font-bold mt-2">$0<span className="text-lg text-gray-500 font-normal">/mo</span></h3>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-gray-300">
                                <div className="icon-check text-green-500"></div>
                                5 generations/month
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <div className="icon-check text-green-500"></div>
                                Standard quality (MP3)
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <div className="icon-check text-green-500"></div>
                                Personal use license
                            </li>
                        </ul>
                        <button className="w-full py-3 rounded-full border border-gray-600 text-white font-medium hover:border-white transition-colors">
                            Get Started
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="glass-card p-8 flex flex-col relative border-violet-500/50 bg-[#1e293b]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-violet-600 to-cyan-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                            Most Popular
                        </div>
                        <div className="mb-4">
                            <span className="text-sm font-bold text-violet-400 uppercase tracking-wider">Creator</span>
                            <h3 className="text-4xl font-bold mt-2">$29<span className="text-lg text-gray-500 font-normal">/mo</span></h3>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-white">
                                <div className="icon-check text-violet-500"></div>
                                Unlimited generations
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <div className="icon-check text-violet-500"></div>
                                High fidelity (WAV)
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <div className="icon-check text-violet-500"></div>
                                Commercial license
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <div className="icon-check text-violet-500"></div>
                                Stem separation
                            </li>
                        </ul>
                        <button className="w-full py-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold hover:shadow-lg hover:shadow-violet-500/25 transition-all">
                            Upgrade to Pro
                        </button>
                    </div>

                    {/* Studio Plan */}
                    <div className="glass-card p-8 flex flex-col">
                        <div className="mb-4">
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Studio</span>
                            <h3 className="text-4xl font-bold mt-2">$99<span className="text-lg text-gray-500 font-normal">/mo</span></h3>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-gray-300">
                                <div className="icon-check text-green-500"></div>
                                Everything in Creator
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <div className="icon-check text-green-500"></div>
                                API Access
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <div className="icon-check text-green-500"></div>
                                Custom model training
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <div className="icon-check text-green-500"></div>
                                Priority support
                            </li>
                        </ul>
                        <button className="w-full py-3 rounded-full border border-gray-600 text-white font-medium hover:border-white transition-colors">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}