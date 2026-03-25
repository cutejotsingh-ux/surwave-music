function Hero() {
    const [prompt, setPrompt] = React.useState("A cyberpunk synthwave track with heavy bass and neon vibes");
    const [isGenerating, setIsGenerating] = React.useState(false);
    const [generatedId, setGeneratedId] = React.useState(null);

    const handleGenerate = async () => {
        if (!prompt.trim()) return;
        
        setIsGenerating(true);
        setGeneratedId(null);
        
        try {
            // Artificial delay for UX
            await new Promise(resolve => setTimeout(resolve, 3000));

            // Randomly select one of our asset covers
            const covers = [
                "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=500&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=500&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=500&auto=format&fit=crop"
            ];
            const randomCover = covers[Math.floor(Math.random() * covers.length)];
            
            // Generate random duration between 2:00 and 4:30
            const minutes = Math.floor(Math.random() * 3) + 2;
            const seconds = Math.floor(Math.random() * 60).toString().padStart(2, '0');

            const newTrack = {
                prompt: prompt,
                mode: "High Fidelity",
                duration: `${minutes}:${seconds}`,
                cover: randomCover,
                artist: "Guest User",
                likes: 0
            };

            await createGeneration(newTrack);
            setGeneratedId("success");
            
            // Scroll to explore section to see the new track
            setTimeout(() => {
                const exploreSection = document.getElementById('explore');
                if (exploreSection) {
                    exploreSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 1000);

        } catch (error) {
            console.error("Generation failed:", error);
        } finally {
            setIsGenerating(false);
            setPrompt(""); 
        }
    };

    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex items-center" data-name="hero" data-file="components/Hero.js">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=2574&auto=format&fit=crop" 
                    alt="Background" 
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#0f172a]/90 to-[#0f172a]"></div>
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                
                <div className="text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                        </span>
                        V2.0 Model Now Live
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Turn Text into <br/>
                        <span className="text-gradient">Studio Quality</span> Music
                    </h1>
                    
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                        Create original songs, soundtracks, and beats in seconds. No musical experience required. Just describe what you want to hear.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button 
                            className="btn btn-primary text-lg px-8"
                            onClick={() => document.querySelector('textarea').focus()}
                        >
                            Start Generating
                            <div className="icon-wand-sparkles"></div>
                        </button>
                        <button 
                            className="btn btn-secondary text-lg px-8"
                            onClick={() => document.getElementById('explore').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Listen to Demos
                            <div className="icon-headphones"></div>
                        </button>
                    </div>

                    <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-500">
                        <div className="flex items-center gap-2">
                            <div className="icon-circle-check text-[var(--secondary-color)]"></div>
                            <span>Royalty Free</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="icon-circle-check text-[var(--secondary-color)]"></div>
                            <span>Studio Quality</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="icon-circle-check text-[var(--secondary-color)]"></div>
                            <span>Instant Export</span>
                        </div>
                    </div>
                </div>

                {/* Interactive Demo Card */}
                <div className="relative animate-float hidden lg:block">
                    {/* Glow effect behind */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-2xl blur-2xl opacity-30"></div>
                    
                    <div className="glass-card p-6 border-t border-white/20">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                                <div className="icon-cpu text-[var(--secondary-color)]"></div>
                                AI Generator
                            </h3>
                            <div className="flex gap-2">
                                <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></span>
                                <span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></span>
                                <span className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-[#0f172a]/50 rounded-xl p-4 border border-gray-700">
                                <label className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-2 block">Prompt</label>
                                <textarea 
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    className="w-full bg-transparent border-none focus:ring-0 text-gray-200 resize-none h-20 placeholder-gray-600"
                                    placeholder="Describe the music you want to create..."
                                ></textarea>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[#0f172a]/50 rounded-xl p-3 border border-gray-700 flex justify-between items-center">
                                    <span className="text-sm text-gray-400">Duration</span>
                                    <span className="text-sm font-mono text-white">0:30</span>
                                </div>
                                <div className="bg-[#0f172a]/50 rounded-xl p-3 border border-gray-700 flex justify-between items-center">
                                    <span className="text-sm text-gray-400">Mode</span>
                                    <span className="text-sm text-[var(--secondary-color)]">High Fidelity</span>
                                </div>
                            </div>

                            <button 
                                onClick={handleGenerate}
                                className={`w-full btn justify-center mt-4 group ${generatedId === 'success' ? 'bg-green-600 hover:bg-green-700' : 'btn-primary'}`}
                                disabled={isGenerating}
                            >
                                {isGenerating ? (
                                    <>
                                        <div className="icon-loader animate-spin"></div>
                                        Generating Audio...
                                    </>
                                ) : generatedId === 'success' ? (
                                    <>
                                        Generated Successfully!
                                        <div className="icon-check"></div>
                                    </>
                                ) : (
                                    <>
                                        Generate Track
                                        <div className="icon-arrow-right group-hover:translate-x-1 transition-transform"></div>
                                    </>
                                )}
                            </button>

                            {/* Waveform Visualization Placeholder */}
                            <div className="h-24 bg-[#0f172a]/80 rounded-xl border border-gray-800 flex items-center justify-center relative overflow-hidden">
                                {isGenerating ? (
                                    <div className="flex items-center gap-1 h-full w-full justify-center px-4">
                                        {[...Array(30)].map((_, i) => (
                                            <div 
                                                key={i} 
                                                className="w-1 bg-violet-500 rounded-full animate-pulse"
                                                style={{
                                                    height: `${Math.random() * 80 + 20}%`,
                                                    animationDelay: `${i * 0.05}s`,
                                                    opacity: Math.random() * 0.5 + 0.5
                                                }}
                                            ></div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-gray-600 text-sm flex flex-col items-center gap-2">
                                        <div className="icon-music-2 text-2xl opacity-50"></div>
                                        <span>Ready to generate</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}