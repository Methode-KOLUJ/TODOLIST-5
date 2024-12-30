import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import Trophée from "../assets/Trophée.png";
import Heure from "./Heure";


export const Congratulations = ({
  allCompleted,
  showConfetti,
  width,
  height,
  handleContinue,
}) => {
  return (
    <>
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          colors={["#FFD700", "#FF4500", "#32CD32", "#1E90FF"]}
        />
      )}
      <AnimatePresence>
        {allCompleted && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-8 md:p-5 sm:p-3 text-center shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <img
                src={Trophée}
                alt="Victoire"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              💃 Félicitations 💃
              </h2>
              <p className="text-gray-700 mb-4 justify-between">
               Vous avez atteint vos objectifs du jour à <Heure/>
              </p>
              <button
                onClick={handleContinue}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:text-blue-600"
              >
                Reprendre
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
