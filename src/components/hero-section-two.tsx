"use client"
import React from 'react'
import { motion } from 'framer-motion'
import WaitlistForm from './input-with-button'

export default function HeroSectionTwo() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with brand colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A237E] to-[#3949AB] z-0" />
      
      {/* Hexagon Pattern Background */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0L30 8.66L45 0L60 8.66V25.98L45 34.64L60 43.3V60L45 51.34L30 60L15 51.34L0 60V43.3L15 34.64L0 25.98V8.66L15 0Z' fill='%234CAF50' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 z-20">
        <motion.div
          className="w-full h-full border-4 border-[#4CAF50] opacity-20 transform rotate-45"
          style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
          animate={{ rotate: 405 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 z-20">
        <motion.div
          className="w-full h-full border-4 border-[#4CAF50] opacity-20 transform -rotate-45"
          style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
          animate={{ rotate: -405 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-30">
        <div className="mx-auto max-w-2xl text-center text-white">
          
          <motion.h2 
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ne Manquez Pas le Lancement !
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            L&apos;immobilier du futur, dès aujourd&apos;hui. Inscrivez-vous et soyez parmi les premiers à découvrir notre plateforme révolutionnaire.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8"
          >
            <WaitlistForm />
          </motion.div>
          
          <motion.p 
            className="text-sm text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Soyez tranquille, nous respectons votre vie privée et ne partagerons jamais vos informations.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

