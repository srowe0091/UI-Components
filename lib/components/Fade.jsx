import { motion } from 'motion/react'

export const Fade = ({ children, in: isVisible, disableFade, ...rest }) => {
  if (!isVisible) return null

  return (
    <motion.div
      initial={disableFade ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
