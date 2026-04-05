import { animate, scroll, inView } from "motion";
import { 
  createIcons, 
  Menu, 
  X, 
  Coffee, 
  Utensils, 
  MapPin, 
  Clock, 
  Phone, 
  Wifi, 
  Sparkles, 
  Heart 
} from "lucide";
import "./index.css";

// --- Data ---
const MENU_DATA = [
  {
    title: "Coffee",
    items: [
      { name: "Velour House Blend", description: "Smooth, medium roast with notes of caramel and toasted hazelnut.", price: "$4.50" },
      { name: "Single Origin Pour Over", description: "Rotating selection of seasonal beans, hand-poured for clarity.", price: "$6.00" },
      { name: "Flat White", description: "Double shot of espresso with silky micro-foam.", price: "$5.25" },
      { name: "Cold Brew", description: "Steeped for 18 hours for a clean, low-acid finish.", price: "$5.50" },
    ]
  },
  {
    title: "Signature Drinks",
    items: [
      { name: "Gold Dust Latte", description: "Espresso, oat milk, honey, and a touch of edible gold leaf.", price: "$8.50", isSignature: true },
      { name: "Lavender Fog", description: "Earl Grey tea, vanilla bean, and organic lavender-infused milk.", price: "$7.25", isSignature: true },
      { name: "Velour Iced Mocha", description: "70% dark chocolate, espresso, and a hint of sea salt.", price: "$7.75", isSignature: true },
    ]
  },
  {
    title: "Desserts",
    items: [
      { name: "Almond Croissant", description: "Twice-baked with house-made frangipane.", price: "$5.50" },
      { name: "Sea Salt Brownie", description: "Rich Valrhona chocolate with Maldon sea salt flakes.", price: "$4.75" },
      { name: "Matcha Cheesecake", description: "Ceremonial grade matcha with a black sesame crust.", price: "$8.00" },
    ]
  }
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
];

const FEATURES = [
  { icon: "coffee", title: "Premium Beans", desc: "Ethically sourced, small-batch roasted specialty coffee." },
  { icon: "heart", title: "Calm Atmosphere", desc: "Minimalist design focused on comfort and tranquility." },
  { icon: "wifi", title: "Fast Wi-Fi", desc: "Seamless connectivity for your creative work sessions." },
  { icon: "utensils", title: "Handcrafted Desserts", desc: "Freshly baked daily using organic ingredients." },
];

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Icons
  createIcons({
    icons: {
      Menu,
      X,
      Coffee,
      Utensils,
      MapPin,
      Clock,
      Phone,
      Wifi,
      Sparkles,
      Heart
    }
  });

  // Set Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

  // --- Render Dynamic Content ---
  
  // Menu
  const menuContainer = document.getElementById("menu-container");
  if (menuContainer) {
    MENU_DATA.forEach((category, idx) => {
      const catEl = document.createElement("div");
      catEl.className = "menu-category opacity-0 translate-y-8";
      catEl.innerHTML = `
        <h3 class="text-2xl font-serif mb-10 flex items-center">
          <span class="mr-4">${category.title}</span>
          <div class="flex-grow h-[1px] bg-velour-brown/10"></div>
        </h3>
        <div class="grid md:grid-cols-2 gap-x-16 gap-y-10">
          ${category.items.map(item => `
            <div class="group cursor-default">
              <div class="flex justify-between items-baseline mb-2">
                <h4 class="text-lg font-medium ${item.isSignature ? 'text-velour-gold' : ''}">
                  ${item.name}
                  ${item.isSignature ? '<i data-lucide="sparkles" class="inline-block ml-2 w-4 h-4"></i>' : ''}
                </h4>
                <span class="text-velour-brown/60 font-medium">${item.price}</span>
              </div>
              <p class="text-sm text-velour-brown/50 leading-relaxed group-hover:text-velour-brown/70 transition-colors">
                ${item.description}
              </p>
            </div>
          `).join('')}
        </div>
      `;
      menuContainer.appendChild(catEl);
      
      inView(catEl, () => {
        animate(catEl, { opacity: 1, y: 0 }, { duration: 0.6, delay: idx * 0.1 });
      });
    });
    // Re-initialize icons for injected content
    createIcons({ icons: { Sparkles } });
  }

  // Gallery
  const galleryGrid = document.getElementById("gallery-grid");
  if (galleryGrid) {
    GALLERY_IMAGES.forEach((src, idx) => {
      const itemEl = document.createElement("div");
      itemEl.className = "relative aspect-square overflow-hidden group rounded-sm opacity-0 scale-95";
      itemEl.innerHTML = `
        <img 
          src="${src}" 
          alt="Gallery ${idx}" 
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div class="absolute inset-0 bg-velour-brown/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <i data-lucide="instagram" class="text-white w-8 h-8 transform scale-50 group-hover:scale-100 transition-transform duration-500"></i>
        </div>
      `;
      galleryGrid.appendChild(itemEl);
      
      inView(itemEl, () => {
        animate(itemEl, { opacity: 1, scale: 1 }, { duration: 0.6, delay: idx * 0.1 });
      });
    });
  }

  // Experience
  const experienceGrid = document.getElementById("experience-grid");
  if (experienceGrid) {
    FEATURES.forEach((f, idx) => {
      const itemEl = document.createElement("div");
      itemEl.className = "text-center opacity-0 translate-y-8";
      itemEl.innerHTML = `
        <div class="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-velour-cream/20 rounded-full text-velour-gold">
          <i data-lucide="${f.icon}"></i>
        </div>
        <h3 class="text-xl font-serif mb-4">${f.title}</h3>
        <p class="text-velour-cream/50 text-sm leading-relaxed">${f.desc}</p>
      `;
      experienceGrid.appendChild(itemEl);
      
      inView(itemEl, () => {
        animate(itemEl, { opacity: 1, y: 0 }, { duration: 0.6, delay: idx * 0.1 });
      });
    });
    createIcons({ icons: { Coffee, Heart, Wifi, Utensils } });
  }

  // --- Logic ---

  // Navbar Scroll
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar?.classList.add("glass-nav", "py-4");
      navbar?.classList.remove("bg-transparent", "py-6");
    } else {
      navbar?.classList.remove("glass-nav", "py-4");
      navbar?.classList.add("bg-transparent", "py-6");
    }
  });

  // Mobile Menu
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const closeMenuBtn = document.getElementById("close-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  const openMenu = () => {
    mobileMenu?.classList.remove("hidden");
    setTimeout(() => {
      mobileMenu?.classList.remove("opacity-0", "translate-x-full");
      mobileMenu?.classList.add("opacity-1", "translate-x-0");
    }, 10);
  };

  const closeMenu = () => {
    mobileMenu?.classList.add("opacity-0", "translate-x-full");
    mobileMenu?.classList.remove("opacity-1", "translate-x-0");
    setTimeout(() => {
      mobileMenu?.classList.add("hidden");
    }, 500);
  };

  mobileMenuBtn?.addEventListener("click", openMenu);
  closeMenuBtn?.addEventListener("click", closeMenu);
  mobileLinks.forEach(link => link.addEventListener("click", closeMenu));

  // --- Animations ---

  // Hero
  animate("#hero-title", { opacity: 1, y: 0 }, { duration: 1, delay: 0.2 });
  animate("#hero-subtext", { opacity: 1, y: 0 }, { duration: 1, delay: 0.4 });
  animate("#hero-btn", { opacity: 1, scale: 1 }, { duration: 0.8, delay: 0.6 });
  animate("#fab", { opacity: 1, scale: 1 }, { duration: 0.5, delay: 2 });

  // Scroll Indicator
  animate("#scroll-line", { y: [0, 48] }, { duration: 2, repeat: Infinity, ease: "linear" });

  // About
  inView(".about-image", () => {
    animate(".about-image", { opacity: 1, x: 0 }, { duration: 0.8 });
  });
  inView(".about-content", () => {
    animate(".about-content", { opacity: 1, x: 0 }, { duration: 0.8, delay: 0.2 });
  });

  // Contact
  inView(".contact-info", () => {
    animate(".contact-info", { opacity: 1, x: 0 }, { duration: 0.8 });
  });
  inView(".contact-form", () => {
    animate(".contact-form", { opacity: 1, x: 0 }, { duration: 0.8 });
  });
});
