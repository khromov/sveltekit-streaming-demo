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

    const getMainContent = async () => {
        await new Promise(resolve => setTimeout(resolve, 4000)); // Simulate delay
        return [
            "At StreamCo, we're revolutionizing the way businesses handle their data streams. Our cutting-edge technology allows for real-time processing and analysis of massive data flows, providing invaluable insights to our clients.",
            "Founded in 2020, our team of expert engineers and data scientists have been pushing the boundaries of what's possible in the world of big data and stream processing.",
            "Whether you're a small startup or a large enterprise, our scalable solutions can be tailored to meet your specific needs. From IoT data processing to real-time analytics, we've got you covered.",
            "Join us in shaping the future of data processing. Explore our services and see how StreamCo can transform your business today!"
        ];
    };

    return {
        quote: getQuote(),
        menuItems: getMenuItems(),
        isOpen: getIsOpen(),
        mainContent: getMainContent(),
    };
};