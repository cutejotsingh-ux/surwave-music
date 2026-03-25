function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'Explore', href: '#explore' },
        { name: 'Pricing', href: '#pricing' },
    ];

    return (
        <header 
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-[#0f172a]/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
            }`}
            data-name="header"
            data-file="components/Header.js"
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center text-white">
                        <div className="icon-audio-waveform text-xl"></div>
                    </div>
                    <span className="text-xl font-bold tracking-tight">Sonic<span className="text-[var(--primary-color)]">AI</span></span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href}
                            className="text-gray-300 hover:text-white font-medium transition-colors text-sm uppercase tracking-wider"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <button className="text-gray-300 hover:text-white font-medium">Log In</button>
                    <button className="btn btn-primary py-2 px-5 text-sm">
                        Start Creating
                        <div className="icon-sparkles text-sm"></div>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className={isMenuOpen ? "icon-x text-2xl" : "icon-menu text-2xl"}></div>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#0f172a] border-b border-gray-800 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href}
                            className="text-lg font-medium text-gray-300 hover:text-white"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="h-px bg-gray-800 my-2"></div>
                    <button className="text-gray-300 hover:text-white font-medium text-left">Log In</button>
                    <button className="btn btn-primary w-full justify-center">Start Creating</button>
                </div>
            )}
        </header>
    );
}