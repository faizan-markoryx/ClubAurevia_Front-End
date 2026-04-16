import { motion } from "framer-motion";

const AnimateSection = ({ children, duration = 0.9, delay = 0, className = "" }: any) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: duration, delay: delay, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
        >
            {children}
        </motion.div>
    );
};

export default AnimateSection;