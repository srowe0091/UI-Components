import { motion } from 'motion/react'

export const Fade = ({ children, in: isVisible, disableMountAnimation, unmountAnimation, ...rest }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          animate={{ opacity: 1 }}
          initial={disableMountAnimation ? false : { opacity: 0 }}
          exit={unmountAnimation ? { opacity: 0 } : false}
          transition={{ duration: 0.3 }}
          {...rest}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
