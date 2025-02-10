import { BadgeCheck } from "lucide-react";
import { motion } from "motion/react";

export const Toast = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute top-10 max-w-[80%] rounded-2xl bg-[#2b4246] p-6"
    >
      <p className="mb-4 flex items-center gap-x-2 text-white">
        <BadgeCheck color="#fff" size={18} /> Message Sent!
      </p>
      <p className="text-[#87a3a6]">
        Thanks for completing the form. We'll be in touch soon!
      </p>
    </motion.div>
  );
};
