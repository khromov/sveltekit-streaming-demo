import type { PageServerLoad } from "./$types";
import { menuItems } from "$lib/menu";
import { error } from "@sveltejs/kit";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const load: PageServerLoad = async ({ setHeaders }) => {
  const getQuote = () => {
    return "The only way to do great work is to love what you do. - Steve Jobs";
  };

  const getMenuItems = () => {
    return menuItems;
  };

  const getIsOpen = () => {
    const now = new Date();
    const hours = now.getHours();
    return hours >= 9 && hours < 17; // Open between 9 AM and 5 PM
  };

  setHeaders({
    "Access-Control-Allow-Origin": "*",
  });

  return {
    quote: getQuote(),
    menuItems: getMenuItems(),
    isOpen: getIsOpen(),
  };
};
