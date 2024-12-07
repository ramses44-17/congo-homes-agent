import { Facebook, Instagram, Linkedin, Mail, MapPin} from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image"
export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Image src="/logo.jpg" alt="Congo Homes Logo"
            width={74}
            height={64}
             />
            <p className="text-sm text-primary-foreground/80 max-w-sm">
              Congo Homes est la première plateforme immobilière intelligente de RDC. Rejoignez-nous dans cette aventure innovante.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>contact@congohomes.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Kinshasa, RDC</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Suivez notre développement</h3>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="hover:text-secondary">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-secondary">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-secondary">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
              <div className="mt-6">
                <a href="#cta"><Button className="bg-secondary hover:bg-secondary/90 text-white w-full">
                  Rejoindre la liste d'attente
                </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Congo Homes. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}