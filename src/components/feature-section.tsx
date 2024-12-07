'use client'

import { LayoutDashboard, UserCircle, Building, MessageSquare, BarChartIcon as ChartBar, Shield } from 'lucide-react';
import { motion } from "framer-motion";
import { FeatureCard } from "./feature-card";

export function FeaturesSection() {
  const features = [
    {
      icon: Building,
      title: "Gestion d'annonces simplifiée",
      description: "Créez, modifiez et gérez vos annonces immobilières en toute simplicité avec notre interface intuitive en cours de développement."
    },
    {
      icon: LayoutDashboard,
      title: "Tableau de bord intelligent",
      description: "Suivez vos performances en temps réel grâce à notre tableau de bord analytique actuellement en phase de test."
    },
    {
      icon: UserCircle,
      title: "Profil professionnel avancé",
      description: "Construisez votre présence en ligne avec un profil professionnel complet incluant vos informations essentielles."
    },
    {
      icon: MessageSquare,
      title: "Communication centralisée",
      description: "Gérez tous vos échanges avec les clients depuis une interface unique et intuitive."
    },
    {
      icon: ChartBar,
      title: "Analyses détaillées",
      description: "Des outils d'analyse pour comprendre et optimiser les performances des vos annonces immobilières."
    },
    {
      icon: Shield,
      title: "Sécurité garantie",
      description: "Nous développons une infrastructure sécurisée pour protéger vos données professionnelles."
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

  return (
    <motion.div 
      className="py-24 bg-accent"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Fonctionnalités en développement
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Découvrez les outils que nous préparons pour révolutionner votre activité immobilière
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

