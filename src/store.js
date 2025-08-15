import { create } from "zustand";

const store = (set)=> ({
theme: localStorage.getItem("theme") || "light",
setTheme: (newTheme) => set( () => ({theme: newTheme})),
isNavbar: false,
setIsNavbar: (newIsNavbar) => set(() =>({isNavbar: newIsNavbar})),
isMobile: false,
setIsMobile: (newIsMobile) => set(() =>({isMobile: newIsMobile})),
})

export const useStore = create(store)