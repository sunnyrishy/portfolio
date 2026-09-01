import { motion } from 'framer-motion';

/**
 * Scroll triggered entrance. Fades and rises once, when 20% of the element
 * has entered the viewport, and never replays.
 */
export default function Reveal({ children, delay = 0, y = 26, className = '', as = 'div' }) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.7, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/** Staggers its direct Reveal children by a fixed step. */
export function RevealGroup({ children, step = 0.09, className = '', ...rest }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, shown: { transition: { staggerChildren: step } } }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** A child of RevealGroup. Inherits the parent's stagger timing. */
export function RevealItem({ children, className = '', y = 26 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        shown: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.2, 0.7, 0.3, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}
