function FeatureSection() {
    const features = [
        {
            icon: 'wand-sparkles',
            title: 'Text-to-Music',
            desc: 'Turn simple text descriptions into complex musical compositions in seconds using our advanced transformer models.'
        },
        {
            icon: 'sliders-horizontal',
            title: 'Full Customization',
            desc: 'Adjust tempo, key, instruments, and mood. You have full control over the generation process.'
        },
        {
            icon: 'layers',
            title: 'Multi-Track Stems',
            desc: 'Download individual stems (drums, bass, melody) for professional mixing and mastering in your DAW.'
        },
        {
            icon: 'copyright',
            title: 'Royalty Free Ownership',
            desc: 'You own 100% of the rights to the music you generate. Use it for streaming, videos, or commercial projects.'
        },
        {
            icon: 'mic-vocal',
            title: 'AI Vocals',
            desc: 'Generate realistic vocals and lyrics to accompany your tracks in multiple languages and styles.'
        },
        {
            icon: 'zap',
            title: 'Lightning Fast',
            desc: 'Generate a full 3-minute track in under 30 seconds. Speed up your workflow and iterate quickly.'
        }
    ];

    return (
        <section id="features" className="section-padding bg-[#0b1120] relative" data-name="features" data-file="components/FeatureSection.js">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[var(--secondary-color)] font-bold tracking-wider text-sm uppercase mb-2 block">Powerful Engine</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose <span className="text-white">SonicAI</span>?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Our state-of-the-art audio engine is designed for creators, by creators. Unlock unlimited musical potential.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-[#1e293b]/50 p-8 rounded-2xl border border-gray-800 hover:border-violet-500/50 transition-colors group">
                            <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center mb-6 group-hover:bg-violet-500/20 transition-colors">
                                <div className={`icon-${feature.icon} text-2xl text-[var(--primary-color)]`}></div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}