import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block sm:hidden">
      <div>
        {/* Mobile Menu Button with Smooth Transition */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X size={40} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={40} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-18 left-0 w-full text-white bg-black shadow-lg"
        >
          <ul className="flex flex-col items-start space-y-0 text-lg tracking-wider p-4">
            <li>
              <a href="/home" className="block w-full text-center py-1 ">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="block w-full text-center py-1 ">
                About
              </a>
            </li>
            <li>
              <a href="/works" className="block w-full text-center py-1 ">
                Works
              </a>
            </li>
            <li>
              <a href="/contact" className="block w-full text-left py-1 ">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default BurgerMenu;
