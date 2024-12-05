// this is a splash screen of page
import { ShoppingBasket, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function GrocerySplashScreen() {
  return (
    <div className="fixed inset-0 bg-green-50 flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="text-green-600 mb-4"
      >
        <ShoppingBasket size={64} />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-3xl font-bold text-green-800 mb-4"
      >
        Dailyy
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-green-600 mb-4"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          <Loader2 size={38} />
        </motion.div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-green-700 text-lg"
      >
        Refreshing your grocery experience...
      </motion.p>
    </div>
  )
}

