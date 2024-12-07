'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, ArrowRight, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Email submitted:', email)
    // Show success message
    setIsSubmitted(true)
    // Reset the form after 3 seconds
    setTimeout(() => {
      setEmail('')
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row items-center gap-2">
        <div className="relative w-full">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Entrez votre email professionnel..."
            className="pl-10 pr-4 py-3 w-full rounded-full border-2 border-[#4CAF50]/20 focus:border-[#4CAF50] transition-all duration-300 ease-in-out"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitted}
          />
        </div>
        <AnimatePresence>
          {!isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full sm:w-auto"
            >
              <Button 
                type="submit" 
                className="
                w-full sm:w-auto
                bg-[#4CAF50] hover:bg-[#45a049]
                text-white font-medium py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
              >
                <span className="hidden sm:inline">Rejoindre la liste</span>
                <span className="sm:hidden">Rejoindre</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 rounded-full"
          >
            <div className="flex items-center text-[#4CAF50]">
              <CheckCircle className="mr-2 h-5 w-5" />
              <span className="font-medium">Merci de votre inscription !</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

