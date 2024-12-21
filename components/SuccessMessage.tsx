import { contactData } from "@/config/constants";
import { Check } from "lucide-react";
import { motion } from "motion/react";
function SuccessMessage() {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-col items-center justify-center gap-3 py-6"
    >
      <div className="border-2 border-lightSky w-20 h-20 rounded-full flex items-center justify-center text-lightSky">
        <Check className="w-10 h-10" />
      </div>
      <h2 className="text-4xl leading-none font-extrabold text-transparent text-outline">
        {contactData.formData.thanksMessage.thankYou.en}
      </h2>
      <p>{contactData.formData.thanksMessage.getBack.en}</p>
    </motion.div>
  );
}

export default SuccessMessage;
