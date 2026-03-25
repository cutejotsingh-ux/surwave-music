function MusicPlayer() {
    const [tracks, setTracks] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [currentTrack, setCurrentTrack] = React.useState(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const fetchTracks = async () => {
            try {
                const data = await getGenerations();
                const formattedTracks = data.map(item => ({
                    id: item.id,
                    title: item.prompt.length > 25 ? item.prompt.substring(0, 25) + "..." : item.prompt,
                    fullPrompt: item.prompt,
                    artist: item.artist || "AI Creator",
                    cover: item.cover || "https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=200",
                    duration: item.duration || "2:30",
                    likes: item.likes || 0
                }));
                
                setTracks(formattedTracks);
                if (formattedTracks.length > 0) {
                    setCurrentTrack(formattedTracks[0]);
                }
            } catch (error) {
                console.error("Error loading tracks:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTracks();
        
        // Set up interval to refresh list every 30 seconds to show new generations
        const interval = setInterval(fetchTracks, 30000);
        return () => clearInterval(interval);
    }, []);

    // Simulate playback progress
    React.useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        setIsPlaying(false);
                        return 0;
                    }
                    return prev + 1;
                });
            }, 100); // Fast simulation
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    const togglePlay = () => setIsPlaying(!isPlaying);

    if (loading) {
        return (
            <div id="explore" className="section-padding bg-[#0f172a] min-h-[500px] flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="icon-loader animate-spin text-4xl text-[var(--primary-color)]"></div>
                    <p className="text-gray-400">Loading community tracks...</p>
                </div>
            </div>
        );
    }

    if (!currentTrack) {
        return (
            <div id="explore" className="section-padding bg-[#0f172a]">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">No Tracks Yet</h2>
                    <p className="text-gray-400">Be the first to generate some music!</p>
                </div>
            </div>
        );
    }

    return (
        <div id="explore" className="section-padding bg-[#0f172a]" data-name="music-player" data-file="components/MusicPlayer.js">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Trending <span className="text-gradient">Generations</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Explore what our community is creating. Real-time generations from users like you.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Player UI */}
                    <div className="glass-card p-8 relative overflow-hidden group">
                        {/* Background Blur Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-8">
                                <img 
                                    src={currentTrack.cover} 
                                    alt={currentTrack.title} 
                                    className="w-40 h-40 rounded-xl object-cover shadow-2xl shadow-violet-500/20"
                                />
                                <div className="text-center md:text-left flex-1 min-w-0">
                                    <div className="inline-block px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-bold mb-3 border border-violet-500/30">
                                        NOW PLAYING
                                    </div>
                                    <h3 className="text-2xl font-bold mb-1 truncate" title={currentTrack.fullPrompt}>{currentTrack.title}</h3>
                                    <p className="text-gray-400 mb-6">{currentTrack.artist}</p>
                                    
                                    <div className="flex items-center justify-center md:justify-start gap-4">
                                        <button className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group/like">
                                            <div className="icon-heart group-hover/like:text-red-500 transition-colors"></div>
                                            <span className="text-sm">{currentTrack.likes}</span>
                                        </button>
                                        <button className="text-gray-400 hover:text-white transition-colors">
                                            <div className="icon-share-2"></div>
                                        </button>
                                        <button className="text-gray-400 hover:text-white transition-colors">
                                            <div className="icon-download"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="mb-6">
                                <div className="h-1.5 bg-gray-700 rounded-full w-full mb-2 cursor-pointer relative group/progress" onClick={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const pos = (e.clientX - rect.left) / rect.width;
                                    setProgress(pos * 100);
                                }}>
                                    <div 
                                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full transition-all duration-100" 
                                        style={{width: `${progress}%`}}
                                    ></div>
                                    <div 
                                        className="absolute top-1/2 -translate-y-1/2 bg-white w-3 h-3 rounded-full shadow opacity-0 group-hover/progress:opacity-100 transition-opacity"
                                        style={{left: `${progress}%`}}
                                    ></div>
                                </div>
                                <div className="flex justify-between text-xs text-gray-400 font-mono">
                                    <span>{Math.floor(progress * 2.5 / 100)}:{String(Math.floor((progress * 2.5 * 60 / 100) % 60)).padStart(2, '0')}</span>
                                    <span>{currentTrack.duration}</span>
                                </div>
                            </div>

                            {/* Controls */}
                            <div className="flex items-center justify-center gap-8">
                                <button className="text-gray-400 hover:text-white transition-colors">
                                    <div className="icon-shuffle text-xl"></div>
                                </button>
                                <button className="text-gray-300 hover:text-white transition-colors">
                                    <div className="icon-skip-back text-2xl"></div>
                                </button>
                                <button 
                                    onClick={togglePlay}
                                    className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-white/20"
                                >
                                    <div className={`${isPlaying ? 'icon-pause' : 'icon-play'} text-3xl ml-1`}></div>
                                </button>
                                <button className="text-gray-300 hover:text-white transition-colors">
                                    <div className="icon-skip-forward text-2xl"></div>
                                </button>
                                <button className="text-gray-400 hover:text-white transition-colors">
                                    <div className="icon-repeat text-xl"></div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Playlist */}
                    <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                        {tracks.map((track) => (
                            <div 
                                key={track.id}
                                onClick={() => {
                                    setCurrentTrack(track);
                                    setIsPlaying(true);
                                    setProgress(0);
                                }}
                                className={`p-4 rounded-xl flex items-center gap-4 cursor-pointer transition-all duration-300 border ${
                                    currentTrack.id === track.id 
                                    ? 'bg-white/10 border-violet-500/50' 
                                    : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/10'
                                }`}
                            >
                                <div className="relative group flex-shrink-0">
                                    <img src={track.cover} alt={track.title} className="w-16 h-16 rounded-lg object-cover" />
                                    <div className={`absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center ${currentTrack.id === track.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                        <div className="icon-chart-bar text-white animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className={`font-bold truncate ${currentTrack.id === track.id ? 'text-[var(--primary-color)]' : 'text-white'}`}>{track.title}</h4>
                                    <p className="text-sm text-gray-400 truncate">{track.artist}</p>
                                </div>
                                <div className="text-sm text-gray-500 font-mono">{track.duration}</div>
                            </div>
                        ))}

                        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-center">
                            <h4 className="text-xl font-bold mb-2">Want to create your own?</h4>
                            <p className="text-violet-200 mb-4 text-sm">Join thousands of creators making music with AI.</p>
                            <button 
                                onClick={() => document.getElementById('root').scrollIntoView({ behavior: 'smooth' })}
                                className="bg-white text-violet-600 px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors"
                            >
                                Generate Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}