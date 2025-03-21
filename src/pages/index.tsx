import type { NextPage } from 'next';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';

const Home: NextPage = () => {
    return (
        <div className="min-h-screen bg-background text-text">
            {/* Navigation */}
            <Navbar />
            
            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                {/* Hero Section with Dashboard-like Stats */}
                <div className="mb-12">
                    <Hero />
                </div>

                {/* Skills Section with Analytics-style Visualization */}
                <div className="mb-12 bg-primary/30 rounded-lg p-6 backdrop-blur-sm">
                    <Skills />
                </div>

                {/* Experience Timeline with SCADA-inspired Design */}
                <div className="mb-12 bg-primary/20 rounded-lg p-6 backdrop-blur-sm">
                    <Experience />
                </div>
            </main>

            {/* Floating Analytics Indicator */}
            <div className="fixed bottom-4 right-4 flex items-center gap-2 bg-primary px-4 py-2 rounded-full text-accent text-sm">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse-slow"></div>
                <span className="font-mono">System Active</span>
            </div>
        </div>
    );
};

export default Home; 