'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, ArrowRight } from 'lucide-react'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Email submitted:', email)
    // Reset the form
    setEmail('')
  }

  return (
      <form onSubmit={handleSubmit} className="w-full flex gap-2">
        <div className="w-5/6 relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Entrez votre email professionnel..."
            className="pl-10 pr-4 py-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <Button 
          type="submit" 
          className="
          bg-secondary hover:bg-secondary/90
          text-white font-medium py-2 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
        >
          Rejoindre la liste d'attente
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
  )
}

