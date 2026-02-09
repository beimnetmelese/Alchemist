import { useState, useEffect } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useRef } from "react";

interface FormData {
  name: string;
  phone: string;
  date: string;
  message: string;
}

interface Review {
  id: number;
  name: string;
  rating: number;
  time: string;
  review: string;
  tags: string[];
}

interface MenuCategory {
  id: number;
  title: string;
  items: MenuItem[];
}

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface GalleryItem {
  id: number;
  category: string;
  image: string;
  title: string;
}

const App = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    date: "",
    message: "",
  });

  const [activeReview, setActiveReview] = useState(0);
  const [activeMenuCategory, setActiveMenuCategory] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Thank you for your reservation request! Our team will contact you shortly.",
    );
    setFormData({ name: "", phone: "", date: "", message: "" });
  };

  const reviews: Review[] = [
    {
      id: 1,
      name: "Sophia R.",
      rating: 5,
      time: "1 week ago",
      review:
        "Amazing dining experience, warmly greeted by the owner and chef, incredible cheese appetizer. The attention to detail was exceptional.",
      tags: ["Chef", "Appetizer", "Atmosphere"],
    },
    {
      id: 2,
      name: "Marcus T.",
      rating: 5,
      time: "2 weeks ago",
      review:
        "Unbelievably good food and amazing bread and butter selection, great service. The wine pairing was perfect.",
      tags: ["Main Dish", "Service", "Wine"],
    },
    {
      id: 3,
      name: "Isabella K.",
      rating: 5,
      time: "3 days ago",
      review:
        "7-course dinner was amazing, big portions and incredible service. Highly recommended for a nice night out.",
      tags: ["Dinner", "Fine Dining", "Portions"],
    },
    {
      id: 4,
      name: "Alexander L.",
      rating: 4,
      time: "1 month ago",
      review:
        "A culinary masterpiece. Each dish was a work of art, and the wine selection was impeccable. Perfect for anniversaries.",
      tags: ["Romantic", "Wine", "Presentation"],
    },
    {
      id: 5,
      name: "Elena M.",
      rating: 5,
      time: "2 weeks ago",
      review:
        "Exceptional from start to finish. The chef's tasting menu with wine pairing was worth every penny. Will definitely return.",
      tags: ["Tasting Menu", "Chef", "Special Occasion"],
    },
    {
      id: 6,
      name: "Thomas G.",
      rating: 5,
      time: "1 week ago",
      review:
        "The ambiance, service, and food were all Michelin-star level. A truly memorable evening that exceeded all expectations.",
      tags: ["Ambiance", "Service", "Fine Dining"],
    },
  ];

  const menuCategories: MenuCategory[] = [
    {
      id: 1,
      title: "Starters & Appetizers",
      items: [
        {
          id: 1,
          name: "Truffle Burrata",
          description:
            "Fresh burrata with black truffle, heirloom tomatoes, basil oil",
          price: "ETB 850",
          image:
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=900&auto=format&fit=crop&q=80",
        },
        {
          id: 2,
          name: "Foie Gras Terrine",
          description: "Duck liver terrine with fig compote and brioche toast",
          price: "ETB 1,250",
          image:
            "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=900&auto=format&fit=crop&q=80",
        },
        {
          id: 3,
          name: "Scallop Ceviche",
          description: "Fresh scallops with yuzu, avocado, and crispy shallots",
          price: "ETB 950",
          image:
            "https://images.unsplash.com/photo-1559847844-5315695dadae?w=900&auto=format&fit=crop&q=80",
        },
        {
          id: 4,
          name: "Wagyu Beef Tartare",
          description:
            "Hand-cut wagyu with quail egg, capers, and truffle aioli",
          price: "ETB 1,150",
          image:
            "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&auto=format&fit=crop&q=80",
        },
      ],
    },
    {
      id: 2,
      title: "Main Dishes",
      items: [
        {
          id: 1,
          name: "Dry-Aged Ribeye",
          description:
            "300g dry-aged beef with bone marrow butter and truffle mashed potatoes",
          price: "ETB 2,850",
          image:
            "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=900&auto=format&fit=crop&q=80",
        },
        {
          id: 2,
          name: "Lobster Thermidor",
          description:
            "Whole lobster with cognac cream sauce and gruyère gratin",
          price: "ETB 3,200",
          image:
            "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=900&auto=format&fit=crop&q=80",
        },
        {
          id: 3,
          name: "Duck Breast",
          description:
            "Pan-seared duck with cherry reduction and roasted root vegetables",
          price: "ETB 1,950",
          image:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&auto=format&fit=crop&q=80",
        },
        {
          id: 4,
          name: "Vegetarian Symphony",
          description:
            "Seasonal vegetables with truffle risotto and herb emulsion",
          price: "ETB 1,650",
          image:
            "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=900&auto=format&fit=crop&q=80",
        },
      ],
    },
    {
      id: 3,
      title: "Wine & Drinks",
      items: [
        {
          id: 1,
          name: "Old World Wine Flight",
          description: "Selection of 3 premium European wines (75ml each)",
          price: "ETB 1,850",
          image:
            "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=900&auto=format&fit=crop&q=80",
        },
        {
          id: 2,
          name: "New World Reds",
          description:
            "Australian Shiraz, California Cabernet, Argentinian Malbec",
          price: "ETB 950",
          image:
            "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=900&auto=format&fit=crop&q=80",
        },
        {
          id: 3,
          name: "Signature Cocktails",
          description: "Alchemist's Elixir, Molecular Martini, Smoke & Mirrors",
          price: "ETB 650",
          image:
            "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=900&auto=format&fit=crop&q=80",
        },
        {
          id: 4,
          name: "Non-Alcoholic Pairing",
          description: "Artisanal crafted beverages to complement each course",
          price: "ETB 1,250",
          image:
            "https://images.unsplash.com/photo-1464306076886-da185f7dca7e?w=900&auto=format&fit=crop&q=80",
        },
      ],
    },
    {
      id: 4,
      title: "Desserts",
      items: [
        {
          id: 1,
          name: "Chocolate Sphere",
          description:
            "Dark chocolate sphere with passion fruit cream and gold leaf",
          price: "ETB 750",
          image:
            "https://images.unsplash.com/photo-1519869325930-281384150729?w=900&auto=format&fit=crop&q=80",
        },
        {
          id: 2,
          name: "Cheese Selection",
          description:
            "Curated artisan cheeses with honeycomb and walnut bread",
          price: "ETB 950",
          image:
            "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=900&auto=format&fit=crop&q=80",
        },
        {
          id: 3,
          name: "Deconstructed Tiramisu",
          description:
            "Modern interpretation with coffee soil and mascarpone foam",
          price: "ETB 650",
          image:
            "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=900&auto=format&fit=crop&q=80",
        },
        {
          id: 4,
          name: "Wine & Dessert Pairing",
          description: "Selected desserts with complementary dessert wines",
          price: "ETB 1,450",
          image:
            "https://images.unsplash.com/photo-1451026556832-243a10921291?w=900&auto=format&fit=crop&q=80",
        },
      ],
    },
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop&q=80",
      title: "Artistic Plating",
    },
    {
      id: 2,
      category: "Wine",
      image:
        "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&auto=format&fit=crop&q=80",
      title: "Wine Selection",
    },
    {
      id: 3,
      category: "Vibe",
      image:
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop&q=80",
      title: "Elegant Dining",
    },
    {
      id: 4,
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&auto=format&fit=crop&q=80",
      title: "Signature Dishes",
    },
    {
      id: 5,
      category: "Wine",
      image:
        "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&auto=format&fit=crop&q=80",
      title: "Wine Cellar",
    },
    {
      id: 6,
      category: "Vibe",
      image:
        "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=600&auto=format&fit=crop&q=80",
      title: "Ambiance",
    },
    {
      id: 7,
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&auto=format&fit=crop&q=80",
      title: "Dessert Art",
    },
    {
      id: 8,
      category: "Vibe",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&auto=format&fit=crop&q=80",
      title: "Evening Glow",
    },
  ];

  const services = ["Dine-in", "Kerbside pickup", "Delivery"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#1A0A0A] to-[#0A0A0A] text-[#F5F5F5] overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl shadow-2xl border-b border-[#8B0000]/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="flex items-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B0000] to-[#D4AF37] rounded-full flex items-center justify-center shadow-2xl">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <motion.div
                  className="absolute -inset-2 border border-[#8B0000]/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
              <div className="ml-4">
                <h1 className="text-xl font-light tracking-wider text-white">
                  The Alchemist
                </h1>
                <p className="text-xs text-[#D4AF37] tracking-widest">
                  DINE & WINE
                </p>
              </div>
            </motion.div>

            <div className="hidden lg:flex space-x-10">
              {["Home", "Experience", "Menu", "Wine", "Gallery", "Contact"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="relative text-[#F5F5F5] hover:text-[#D4AF37] font-light text-sm tracking-wider group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#8B0000] to-[#D4AF37] group-hover:w-full transition-all duration-500"></span>
                  </motion.a>
                ),
              )}
            </div>

            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hidden md:block px-6 py-2 bg-gradient-to-r from-[#8B0000] to-[#D4AF37] text-white text-sm font-light rounded-full shadow-xl hover:shadow-2xl transition-all"
              >
                Reserve Table
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-[#D4AF37]"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  ></path>
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 overflow-hidden border-t border-[#8B0000]/20"
              >
                <div className="flex flex-col space-y-4 py-4">
                  {[
                    "Home",
                    "Experience",
                    "Menu",
                    "Wine",
                    "Gallery",
                    "Contact",
                  ].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-[#F5F5F5] hover:text-[#D4AF37] py-2 text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                  <button className="py-2 bg-gradient-to-r from-[#8B0000] to-[#D4AF37] text-white font-light rounded-full">
                    Reserve Table
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A0A0A] to-[#2A0A0A] z-0"></div>

        {/* Cinematic background with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80')",
          }}
        ></div>

        {/* Animated particles */}
        <div className="absolute inset-0 z-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#D4AF37]/30 rounded-full"
              initial={{ y: -100, x: Math.random() * 100 }}
              animate={{
                y: [0, 1000],
                x: [Math.random() * 100, Math.random() * 100 + 50],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-6xl mx-auto"
          >
            {/* Premium Rating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="inline-flex items-center space-x-4 bg-black/40 backdrop-blur-md px-8 py-4 rounded-full mb-12 border border-[#8B0000]/20"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
                    className="w-7 h-7 text-[#D4AF37]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              <span className="text-white text-lg font-light">
                <span className="font-medium">4.7</span> • 117 Reviews
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.5 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight">
                <span className="block text-white">The Alchemist</span>
                <span className="block text-3xl md:text-4xl lg:text-5xl text-[#D4AF37] font-light mt-8 tracking-[0.3em]">
                  DINE & WINE
                </span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1.5 }}
              className="text-xl md:text-2xl text-[#F5F5F5]/70 max-w-3xl mx-auto mb-16 font-light leading-relaxed tracking-wide"
            >
              Where culinary art meets oenology. An alchemy of flavors in the
              heart of Addis Ababa.
            </motion.p>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              {services.map((service, index) => (
                <motion.span
                  key={service}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                  className="px-6 py-3 bg-black/40 backdrop-blur-sm rounded-full text-[#F5F5F5] text-sm font-light border border-[#8B0000]/20"
                >
                  {service}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-14 py-5 bg-gradient-to-r from-[#8B0000] to-[#D4AF37] text-white rounded-full font-light text-lg tracking-wider overflow-hidden shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  View Menu
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#8B0000] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-14 py-5 bg-transparent border border-[#D4AF37] text-[#D4AF37] rounded-full font-light text-lg tracking-wider overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Reserve a Table
                </span>
                <div className="absolute inset-0 bg-[#D4AF37]/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-14 py-5 bg-transparent border border-[#F5F5F5]/30 text-[#F5F5F5] rounded-full font-light text-lg tracking-wider overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  Get Directions
                </span>
                <div className="absolute inset-0 bg-white/5 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-30"
          >
            <div className="w-8 h-14 border border-[#8B0000]/30 rounded-full flex justify-center backdrop-blur-sm">
              <div className="w-1 h-3 bg-gradient-to-b from-[#8B0000] to-[#D4AF37] rounded-full mt-3 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About / Experience Section */}
      <section
        id="experience"
        className="py-28 relative overflow-hidden bg-black"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black opacity-80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-light text-white mb-8">
              The <span className="text-[#D4AF37]">Alchemy</span> Experience
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#8B0000] to-transparent mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&auto=format&fit=crop&q=80"
                  alt="Fine Dining Experience"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-black/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-[#8B0000]/20"
              >
                <div className="text-center">
                  <div className="text-4xl font-light text-[#D4AF37] mb-2">
                    117+
                  </div>
                  <div className="text-sm text-[#F5F5F5]/60">
                    Verified Reviews
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-light text-white mb-8 leading-tight">
                Chef-Driven <span className="text-[#D4AF37]">Excellence</span>
              </h3>
              <p className="text-lg text-[#F5F5F5]/70 mb-8 leading-relaxed tracking-wide">
                At The Alchemist, we transform dining into an art form. Our
                chef-curated menu combines international culinary techniques
                with locally sourced ingredients, creating dishes that are both
                innovative and deeply satisfying.
              </p>

              <div className="space-y-8 mb-10">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-[#8B0000]/20 to-[#D4AF37]/10 p-4 rounded-full mr-6">
                    <svg
                      className="w-6 h-6 text-[#D4AF37]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-light text-white mb-2">
                      Curated Wine Selection
                    </h4>
                    <p className="text-[#F5F5F5]/60">
                      Premium international wines expertly paired with each dish
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-[#8B0000]/20 to-[#D4AF37]/10 p-4 rounded-full mr-6">
                    <svg
                      className="w-6 h-6 text-[#D4AF37]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-light text-white mb-2">
                      Warm Atmosphere
                    </h4>
                    <p className="text-[#F5F5F5]/60">
                      Elegant setting perfect for romantic dinners and special
                      occasions
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-[#8B0000]/20 to-[#D4AF37]/10 p-4 rounded-full mr-6">
                    <svg
                      className="w-6 h-6 text-[#D4AF37]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-light text-white mb-2">
                      Fine Dining Experience
                    </h4>
                    <p className="text-[#F5F5F5]/60">
                      Impeccable service and attention to every detail
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-[#8B0000]/10">
                <p className="text-[#D4AF37] text-lg font-light tracking-wide">
                  A destination for those who appreciate the finer things in
                  life.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section
        id="menu"
        className="py-28 bg-gradient-to-b from-black to-[#0A0A0A]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
              Our <span className="text-[#D4AF37]">Menu</span>
            </h2>
            <p className="text-lg text-[#F5F5F5]/60 max-w-2xl mx-auto tracking-wide">
              Discover our chef-curated selection of fine dining cuisine
            </p>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#8B0000] to-transparent mx-auto mt-8"></div>
          </motion.div>

          {/* Menu Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {menuCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveMenuCategory(index)}
                className={`px-8 py-4 rounded-full font-light tracking-wider transition-all duration-300 ${
                  activeMenuCategory === index
                    ? "bg-gradient-to-r from-[#8B0000] to-[#D4AF37] text-white shadow-2xl"
                    : "bg-black/40 text-[#F5F5F5] border border-[#8B0000]/20 hover:border-[#8B0000]"
                }`}
              >
                {category.title}
              </motion.button>
            ))}
          </div>

          {/* Menu Items */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMenuCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuCategories[activeMenuCategory].items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ y: -6 }}
                    className="group relative overflow-hidden rounded-3xl border border-[#D4AF37]/15 bg-gradient-to-b from-black/70 via-black/50 to-black/30 shadow-[0_20px_60px_rgba(0,0,0,0.45)] hover:shadow-[0_30px_80px_rgba(212,175,55,0.18)] transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-7">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="text-xl font-light text-white">
                            {item.name}
                          </h3>
                          <span className="text-2xl font-light text-[#D4AF37] whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                        <div className="h-px w-16 bg-gradient-to-r from-[#8B0000] to-transparent mb-4" />
                        <p className="text-[#F5F5F5]/65 text-sm tracking-wide leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-5 bg-gradient-to-r from-[#8B0000] to-[#D4AF37] text-white text-lg font-light rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(139,0,0,0.3)] transition-all"
            >
              Download Full Menu
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Wine Section */}
      <section id="wine" className="py-28 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1800&auto=format&fit=crop&q=80')",
            }}
          ></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
              Wine <span className="text-[#D4AF37]">Collection</span>
            </h2>
            <p className="text-lg text-[#F5F5F5]/60 max-w-2xl mx-auto tracking-wide">
              Curated selection of premium international wines
            </p>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#8B0000] to-transparent mx-auto mt-8"></div>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-[#8B0000]/20 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#8B0000]/20 to-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-[#D4AF37]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.2 6.5 10.266a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">
                  Old World
                </h3>
                <p className="text-[#F5F5F5]/60 mb-6">
                  Classic European wines from France, Italy, and Spain
                </p>
                <p className="text-[#D4AF37]">Starting from ETB 1,200</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#8B0000]/10 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-[#D4AF37]/20 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#8B0000] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.831z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">
                  New World
                </h3>
                <p className="text-[#F5F5F5]/60 mb-6">
                  Bold selections from California, Australia, and South Africa
                </p>
                <p className="text-[#D4AF37]">Starting from ETB 950</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-[#8B0000]/20 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#8B0000]/20 to-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-[#D4AF37]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">
                  Pairing Menu
                </h3>
                <p className="text-[#F5F5F5]/60 mb-6">
                  Expertly curated wine pairings for our tasting menus
                </p>
                <p className="text-[#D4AF37]">From ETB 2,500</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section
        id="reviews"
        className="py-28 bg-gradient-to-b from-[#0A0A0A] to-black"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center space-x-4 bg-black/50 backdrop-blur-md px-8 py-4 rounded-full border border-[#8B0000]/20 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-7 h-7 text-[#D4AF37]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-left">
                <div className="text-3xl font-light text-white">4.7</div>
                <div className="text-sm text-[#F5F5F5]/60">
                  117 verified reviews
                </div>
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl font-light text-white mb-8">
              Guest <span className="text-[#D4AF37]">Testimonials</span>
            </h2>
            <p className="text-lg text-[#F5F5F5]/60 max-w-2xl mx-auto tracking-wide">
              Discover why our guests keep returning for exceptional experiences
            </p>
          </motion.div>

          {/* Featured Review Slider */}
          <div className="max-w-5xl mx-auto mb-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-black/50 to-[#0A0A0A]/50 backdrop-blur-md rounded-3xl p-12 border border-[#8B0000]/20"
              >
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8B0000] to-[#D4AF37] rounded-full flex items-center justify-center text-white text-xl font-light shadow-lg mr-6">
                    {reviews[activeReview].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xl font-light text-white mb-1">
                      {reviews[activeReview].name}
                    </h4>
                    <div className="flex items-center">
                      {[...Array(reviews[activeReview].rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-[#D4AF37] mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-[#F5F5F5]/60 text-sm ml-3">
                        {reviews[activeReview].time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {reviews[activeReview].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-light bg-[#8B0000]/20 text-[#D4AF37] border border-[#8B0000]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xl text-[#F5F5F5]/80 italic leading-relaxed tracking-wide">
                    "{reviews[activeReview].review}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Review Navigation */}
          <div className="flex justify-center items-center space-x-4">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeReview === index
                    ? "bg-gradient-to-r from-[#8B0000] to-[#D4AF37] w-6"
                    : "bg-[#F5F5F5]/30 hover:bg-[#F5F5F5]/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-28 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
              Gallery
            </h2>
            <p className="text-lg text-[#F5F5F5]/60 max-w-2xl mx-auto tracking-wide">
              A visual journey through The Alchemist experience
            </p>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#8B0000] to-transparent mx-auto mt-8"></div>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-xl shadow-2xl cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <div>
                    <p className="font-light text-white text-sm">
                      {item.title}
                    </p>
                    <p className="text-xs text-[#F5F5F5]/60">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-28 bg-gradient-to-b from-[#0A0A0A] to-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Location */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-light text-white mb-8"
              >
                Find <span className="text-[#D4AF37]">Us</span>
              </motion.h2>

              <div className="bg-black/50 backdrop-blur-sm rounded-3xl p-8 border border-[#8B0000]/20 mb-8">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-[#8B0000]/20 to-[#D4AF37]/10 p-4 rounded-full mr-6">
                      <svg
                        className="w-6 h-6 text-[#D4AF37]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-light text-white mb-2">
                        Address
                      </h4>
                      <p className="text-[#F5F5F5]/60">
                        African Avenue, Japan Street, Addis Ababa
                      </p>
                      <p className="text-[#D4AF37] text-sm mt-2">
                        Plus Code: XQRH+QM, Addis Ababa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-[#8B0000]/20 to-[#D4AF37]/10 p-4 rounded-full mr-6">
                      <svg
                        className="w-6 h-6 text-[#D4AF37]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-light text-white mb-2">
                        Opening Hours
                      </h4>
                      <p className="text-2xl font-light text-[#D4AF37]">
                        Open · Closes at 10:30 PM
                      </p>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-8 py-4 bg-gradient-to-r from-[#8B0000] to-[#D4AF37] text-white text-lg font-light rounded-xl shadow-xl hover:shadow-2xl transition-all"
                >
                  Get Directions
                </motion.button>
              </div>

              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#8B0000]/20">
                <div className="aspect-[4/3] relative bg-gradient-to-br from-[#0A0A0A] to-[#1A0A0A]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63052.10682906398!2d38.71409754863281!3d8.9945234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859260a58859%3A0x23a68e8a414781b3!2sThe%20Alchemist%20Dine%20%26%20Wine%20Restaurant!5e0!3m2!1sen!2set!4v1770648405633!5m2!1sen!2set"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                    title="The Alchemist Dine & Wine Restaurant"
                  />
                </div>
              </div>
            </div>

            {/* Contact & Reservation */}
            <div>
              <div className="sticky top-24">
                <h3 className="text-4xl font-light text-white mb-2">
                  Contact & Reservations
                </h3>
                <p className="text-[#F5F5F5]/60 mb-8">
                  For inquiries and table reservations
                </p>

                <div className="bg-black/50 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-[#8B0000]/20">
                  <div className="space-y-6">
                    <div>
                      <p className="text-[#F5F5F5]/60 mb-2">Phone Number</p>
                      <p className="text-3xl font-light text-white">
                        098 989 0102
                      </p>
                    </div>
                    <div>
                      <p className="text-[#F5F5F5]/60 mb-2">Website</p>
                      <p className="text-xl font-light text-[#D4AF37]">
                        thealchemistaddis.com
                      </p>
                    </div>
                    <div>
                      <p className="text-[#F5F5F5]/60 mb-2">Email</p>
                      <p className="text-xl font-light text-white">
                        reservations@thealchemistaddis.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-black/50 to-[#0A0A0A]/50 backdrop-blur-sm rounded-3xl p-8 border border-[#8B0000]/20">
                  <h4 className="text-2xl font-light text-white mb-6">
                    Reservation Request
                  </h4>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-black/40 border border-[#F5F5F5]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent text-white placeholder-[#F5F5F5]/40 transition-all"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-black/40 border border-[#F5F5F5]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent text-white placeholder-[#F5F5F5]/40 transition-all"
                        placeholder="Your phone number"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="datetime-local"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-black/40 border border-[#F5F5F5]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent text-white placeholder-[#F5F5F5]/40 transition-all"
                        required
                      />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-6 py-4 bg-black/40 border border-[#F5F5F5]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent text-white placeholder-[#F5F5F5]/40 transition-all resize-none"
                        placeholder="Special requests or occasion details"
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-4 bg-gradient-to-r from-[#8B0000] to-[#D4AF37] text-white text-lg font-light rounded-xl shadow-xl hover:shadow-2xl transition-all"
                    >
                      Request Reservation
                    </motion.button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#8B0000]/10 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#8B0000] to-[#D4AF37] rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-light text-white">
                    The Alchemist
                  </h2>
                  <p className="text-xs text-[#D4AF37]">DINE & WINE</p>
                </div>
              </div>
              <p className="text-[#F5F5F5]/60 text-sm leading-relaxed tracking-wide">
                Where culinary art transforms into unforgettable experiences.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-light text-white mb-6">Contact</h3>
              <div className="space-y-4">
                <p className="text-[#F5F5F5]/60 text-sm">098 989 0102</p>
                <p className="text-[#F5F5F5]/60 text-sm">
                  reservations@thealchemistaddis.com
                </p>
                <p className="text-[#D4AF37] text-sm">thealchemistaddis.com</p>
              </div>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-lg font-light text-white mb-6">Location</h3>
              <div className="space-y-4">
                <p className="text-[#F5F5F5]/60 text-sm">
                  African Avenue, Japan Street
                </p>
                <p className="text-[#F5F5F5]/60 text-sm">
                  Addis Ababa, Ethiopia
                </p>
                <p className="text-[#F5F5F5]/60 text-sm">Plus Code: XQRH+QM</p>
              </div>
            </div>

            {/* Social & Hours */}
            <div>
              <h3 className="text-lg font-light text-white mb-6">Connect</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[#F5F5F5]/60 text-sm mb-3">
                    Open · Closes 10:30 PM
                  </p>
                  <div className="flex space-x-4">
                    {["Instagram", "Facebook", "TripAdvisor"].map((social) => (
                      <div
                        key={social}
                        className="w-9 h-9 rounded-full bg-[#1A0A0A] border border-[#8B0000]/10 flex items-center justify-center hover:bg-[#8B0000]/10 transition-colors cursor-pointer"
                      >
                        <span className="text-[#F5F5F5]/60 text-xs">
                          {social.charAt(0)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[#F5F5F5]/60 text-sm">
                    Rated <span className="text-[#D4AF37]">4.7★</span> from 117
                    reviews
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#8B0000]/10 pt-8 text-center">
            <p className="text-[#F5F5F5]/40 text-sm tracking-wide">
              © {new Date().getFullYear()} The Alchemist Dine & Wine Restaurant.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
