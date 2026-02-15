import { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
    title: 'Blog | Aromal',
    description: 'Read the latest news, healthy tips, and recipes from Aromal. Stay updated on our journey.',
    openGraph: {
        title: 'Blog | Aromal – Organic Yogurt & Bowls',
        description: 'Read the latest news, healthy tips, and recipes from Aromal. Stay updated on our journey.',
    },
};

export default function BlogPage() {
    return <BlogClient />;
}
