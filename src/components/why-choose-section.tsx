'use client'

import { motion } from "framer-motion";
import { Rocket, Clock, Users2, Trophy, Target, HandCoins } from 'lucide-react';
import { Card } from "./ui/card";

export function WhyChooseSection() {
  const reasons = [
    {
      icon: Rocket,
      title: "Première Vague",
      description: "Rejoignez les premiers agents à tester et influencer le développement de notre plateforme. Vos retours façonneront l'avenir de Congo Homes."
    },
    {
      icon: Clock,
      title: "Avantage Précoce",
      description: "Bénéficiez d'un accès prioritaire et de fonctionnalités exclusives en rejoignant notre liste d'attente dès maintenant."
    },
    {
      icon: Target,
      title: "Innovation Technologique",
      description: "Notre plateforme en développement intègre les dernières technologies pour optimiser votre travail d'agent immobilier."
    },
    {
      icon: Trophy,
      title: "Accompagnement Personnalisé",
      description: "En tant que membre fondateur, profitez d'un support dédié et d'une formation privilégiée lors du lancement."
    },
    {
      icon: HandCoins,
      title: "Tarifs Préférentiels",
      description: "Les premiers inscrits bénéficieront gratuitement de toute les fonctionnalités bêta premium jusqu'au lancement officiel de la plateforme."
    },
    {
      icon: Users2,
      title: "Communauté Pionnière",
      description: "Faites partie des agents visionnaires qui définiront les nouvelles normes de l'immobilier en RDC."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <motion.section 
      className="py-24 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl text-center mb-4">
            Pourquoi Rejoindre Congo Homes Maintenant ?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Saisissez l'opportunité de faire partie des pionniers de la révolution immobilière
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-secondary">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="bg-accent p-3 rounded-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
                    >
                      <Icon className="h-6 w-6 text-secondary" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">{reason.title}</h3>
                      <p className="text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}

