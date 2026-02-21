import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import WaitlistForm from './components/WaitlistForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
    useEffect(() => {
        document.title = 'Coner - The Future of Customer Acquisition';

        // EmergentPulse React Widget
        const s = document.createElement('script');
        s.src = 'https://emergent-pulse-ai.preview.emergentagent.com/api/widget.js';
        s.setAttribute('data-project-key', 'ep_ea30e50673834e3d92ef30e398fd1ee4');
        s.async = true;
        document.body.appendChild(s);

        return () => {
            if (document.body.contains(s)) {
                document.body.removeChild(s);
            }
        };
    }, []);

    return (
        <div className="min-h-screen relative selection:bg-primary/30 selection:text-primary-dark font-sans bg-white">
            <Navbar />

            <main>
                <Hero />
                <FeatureGrid />
                <WaitlistForm />
                <FAQ />
            </main>

            <Footer />
        </div>
    );
}

export default App;
