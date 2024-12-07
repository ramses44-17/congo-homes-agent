"use client"
import { Building2, Users, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image"
import WaitlistForm from "./input-with-button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export function HeroSection() {


  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background" id="cta">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="w-full h-full bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl"
          />
        </div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full">
          <motion.div
            initial={{ rotate: 360 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="w-full h-full bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-2xl text-center"
          >
            <motion.div variants={itemVariants}
            className="flex justify-center"
            >
              <Image 
                src="/logo.jpg" 
                alt="Congo Homes Logo" 
                width={64}
                height={64}
                className="border-none rounded-full"
              />
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-3xl font-bold tracking-tight text-primary sm:text-5xl"
            >
             Gérez, connectez, et maximisez vos opportunités immobilières.
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-lg leading-8 text-muted-foreground"
            >
              Soyez parmi les premiers agents immobiliers à rejoindre notre plateforme innovante. 
              Inscrivez-vous à la liste d'attente pour un accès prioritaire dès le lancement.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="mt-10 flex justify-center"
            >
               <WaitlistForm/>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              className="mt-10 flex justify-center gap-8"
            >
              {[
                { icon: Building2, text: "Lancement Imminent" },
                { icon: Users, text: "Accès Prioritaire" },
                { icon: BarChart2, text: "Phase Beta" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <item.icon className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}