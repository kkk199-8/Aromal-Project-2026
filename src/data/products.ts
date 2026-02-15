export interface Product {
    id: number;
    category: string;
    name: string;
    description: string;
    price: number; // in Lek
    image: string;
}

export interface Category {
    id: string;
    name: string;
    subtitle: string;
}

export const CATEGORIES: Category[] = [
    { id: "bowls", name: "Bowls", subtitle: "Yogurt bowls me përbërës organikë, të freskëta çdo ditë." },
    { id: "smoothies", name: "Smoothies", subtitle: "Smoothies me fruta të stinës dhe proteina natyrore." },
    { id: "toasts", name: "Toasts", subtitle: "Toaste artizanale me bukë sourdough dhe toppings premium." },
    { id: "drinks", name: "Drinks", subtitle: "Lëngje të freskëta dhe pije energjizuese." },
    { id: "extras", name: "Extras", subtitle: "Shtesa dhe snacks për çdo moment." },
];

export const PRODUCTS: Product[] = [
    // Bowls
    {
        id: 1,
        category: "bowls",
        name: "Honey Bee",
        description: "Greek yogurt, pure honey, walnuts, and bee pollen.",
        price: 890,
        image: "/assets/honey-bee.png",
    },
    {
        id: 2,
        category: "bowls",
        name: "Triple Berry",
        description: "Acai base, strawberries, blueberries, raspberries, granola.",
        price: 990,
        image: "/assets/triple-berry.png",
    },
    {
        id: 3,
        category: "bowls",
        name: "Green Machine",
        description: "Matcha yogurt, kiwi, chia seeds, coconut flakes, honey.",
        price: 950,
        image: "/assets/honey-bee.png",
    },
    {
        id: 4,
        category: "bowls",
        name: "Tropical Sunrise",
        description: "Mango base, pineapple, passion fruit, toasted oats.",
        price: 920,
        image: "/assets/triple-berry.png",
    },
    // Smoothies
    {
        id: 5,
        category: "smoothies",
        name: "Berry Blast",
        description: "Mixed berries, banana, oat milk, vanilla protein.",
        price: 490,
        image: "/assets/triple-berry.png",
    },
    {
        id: 6,
        category: "smoothies",
        name: "Green Detox",
        description: "Spinach, cucumber, green apple, ginger, lemon.",
        price: 550,
        image: "/assets/honey-bee.png",
    },
    {
        id: 7,
        category: "smoothies",
        name: "Protein Power",
        description: "Banana, peanut butter, cocoa, oat milk, whey protein.",
        price: 450,
        image: "/assets/beet-it.png",
    },
    // Toasts
    {
        id: 8,
        category: "toasts",
        name: "Avo Toast",
        description: "Smashed avocado, chili flakes, sea salt, sourdough toast.",
        price: 650,
        image: "/assets/avotoast.png",
    },
    {
        id: 9,
        category: "toasts",
        name: "Beet It",
        description: "Beetroot hummus, avocado, sourdough, sesame seeds.",
        price: 750,
        image: "/assets/beet-it.png",
    },
    // Drinks
    {
        id: 10,
        category: "drinks",
        name: "Fresh Orange",
        description: "100% freshly squeezed orange juice.",
        price: 290,
        image: "/assets/honey-bee.png",
    },
    {
        id: 11,
        category: "drinks",
        name: "Iced Matcha Latte",
        description: "Ceremonial matcha, oat milk, ice, honey.",
        price: 350,
        image: "/assets/triple-berry.png",
    },
    // Extras
    {
        id: 12,
        category: "extras",
        name: "Granola Crunch",
        description: "House-made granola with oats, nuts, and seeds.",
        price: 250,
        image: "/assets/honey-bee.png",
    },
];

export function formatPrice(price: number): string {
    return `${price.toLocaleString()} Lekë`;
}
