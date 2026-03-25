function Footer() {
    return (
        <footer className="bg-[#0b1120] border-t border-gray-800 pt-16 pb-8" data-name="footer" data-file="components/Footer.js">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center text-white">
                                <div className="icon-audio-waveform text-sm"></div>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">Sonic<span className="text-[var(--primary-color)]">AI</span></span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Revolutionizing music creation with advanced artificial intelligence. Empowering creators worldwide.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><div className="icon-twitter"></div></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><div className="icon-instagram"></div></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><div className="icon-github"></div></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Product</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-[var(--primary-color)] transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-[var(--primary-color)] transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-[var(--primary-color)] transition-colors">Showcase</a></li>
                            <li><a href="#" className="hover:text-[var(--primary-color)] transition-colors">API</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-[var(--primary-color)] transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-[var(--primary-color)] transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-[var(--primary-color)] transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-[var(--primary-color)] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-[var(--primary-color)] transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-[var(--primary-color)] transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-[var(--primary-color)] transition-colors">Copyright</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2026 SonicAI Inc. All rights reserved.</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>Made with</span>
                        <div className="icon-heart text-red-500 text-xs"></div>
                        <span>by Trickle</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}