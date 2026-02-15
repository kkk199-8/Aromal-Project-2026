import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: 'About Us | Aromal',
    description: 'Learn about our story, values, and commitment to organic ingredients. We bring nature’s freshness to Tirana.',
    openGraph: {
        title: 'About Us | Aromal – Organic Yogurt & Bowls',
        description: 'Learn about our story, values, and commitment to organic ingredients. We bring nature’s freshness to Tirana.',
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
