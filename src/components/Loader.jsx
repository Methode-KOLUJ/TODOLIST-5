import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "auto"; 
    }, 6000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5 }}
        >
          <motion.div
            className="text-white font-bold text-center"
            style={{
              fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
              fontSize: "min(10vw, 40px)", 
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 2 }}
            transition={{ duration: 7 }}
          >
            TASK
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
