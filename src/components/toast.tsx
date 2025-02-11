import { BadgeCheck } from "lucide-react";
import { motion } from "motion/react";

export const Toast = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-grey-darker fixed top-10 max-w-[80%] rounded-2xl p-6"
    >
      <p className="mb-4 flex items-center gap-x-2 text-white">
        <BadgeCheck color="#fff" size={18} /> Message Sent!
      </p>
      <p className="text-grey-medium">
        Thanks for completing the form. We'll be in touch soon!
      </p>
    </motion.div>
  );
};
