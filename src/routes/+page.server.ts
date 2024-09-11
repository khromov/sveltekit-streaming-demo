import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const getQuote = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
        return "The only way to do great work is to love what you do. - Steve Jobs";
    };

    const getMenuItems = async () => {
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate delay
        return [
            { url: '/about', text: 'About Us' },
            { url: '/services', text: 'Our Services' },
            { url: '/contact', text: 'Contact' },
            { url: '/careers', text: 'Careers' },
        ];
    };

    const getIsOpen = async () => {
        await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate delay
        const now = new Date();
        const hours = now.getHours();
        return hours >= 9 && hours < 17; // Open between 9 AM and 5 PM
    };

    return {
        quote: getQuote(),
        menuItems: getMenuItems(),
        isOpen: getIsOpen(),
    };
};