import { Metadata } from 'next';
import MenuClient from './MenuClient';

export const metadata: Metadata = {
    title: 'Menu | Aromal',
    description: 'Explore our organic menu of yogurt bowls, smoothies, and toasts. Fresh ingredients, no preservatives.',
    openGraph: {
        title: 'Menu | Aromal – Organic Yogurt & Bowls',
        description: 'Explore our organic menu of yogurt bowls, smoothies, and toasts. Fresh ingredients, no preservatives.',
    },
};

export default function MenuPage() {
    return <MenuClient />;
}
