import { motion, AnimatePresence } from "framer-motion";
import { ThemeModeToggle } from "./theme-mode-toggle";
import { MenuItem } from "./menu-item";

const MENU_ITEMS = [
  { href: "/blogs", label: "Blogs" },
  { href: "/dictionary", label: "Dictionary" },
];

export const MobileMenu = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
      >
        <motion.nav
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute left-0 top-0 h-full w-full max-w-sm bg-white dark:bg-black shadow-lg"
        >
          <div className="p-4">
            <button
              onClick={onClose}
              className="text-2xl focus:outline-none absolute top-4 right-4"
              aria-label="Close menu"
            >
              ✕
            </button>
            <div className="mt-8 space-y-4">
              {MENU_ITEMS.map((item) => (
                <MenuItem key={item.href} {...item} isMobile />
              ))}
              <ThemeModeToggle />
            </div>
          </div>
        </motion.nav>
      </motion.div>
    )}
  </AnimatePresence>
);
