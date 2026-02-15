import { MetadataRoute } from 'next'
import { PRODUCTS } from '@/data/products'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aromal.al'

    // Static routes
    const routes = [
        '',
        '/menu',
        '/about',
        '/blog',
        '/loyalty',
        '/subscriptions',
        '/login',
        '/register',
        '/cart',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic products (if they had individual pages, but currently they are on menu)
    // For now, let's assume they might have pages later, or we can list blog posts

    // Blog posts (mock data for now, ideally from CMS)
    const blogPosts = [
        'perfitimet-e-yogurtit-Bio',
        'si-te-zgjidhni-bowlin-perfekt',
        'pse-mjalti-eshte-superushqim'
    ].map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [...routes, ...blogPosts]
}
