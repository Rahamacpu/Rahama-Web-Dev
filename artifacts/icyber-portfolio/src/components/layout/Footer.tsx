import { Link } from "wouter";
import { 
  Phone, 
  Mail, 
  Globe, 
  Bell, 
  MessageSquare, 
  Camera, 
  Wifi, 
  Smile, 
  Search,
  Youtube
} from "lucide-react";
import logoImg from "@assets/Black_and_White_Modern_Personal_Logo(2)_1777405393996.png";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialIcons = [
    { icon: Phone, label: "Phone", href: "tel:+447774136787" },
    { icon: Mail, label: "Email", href: "mailto:rahamamusa1222@gmail.com" },
    { icon: Globe, label: "Website", href: null },
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@ICYBERTV" },
    { icon: Bell, label: "Notifications", href: null },
    { icon: MessageSquare, label: "Chat", href: null },
    { icon: Camera, label: "Instagram", href: null },
    { icon: Wifi, label: "Connect", href: null },
    { icon: Smile, label: "Community", href: null },
    { icon: Search, label: "Search", href: null },
  ];

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 inline-flex">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border border-white/10 overflow-hidden">
                <img src={logoImg} alt="RA Logo" className="w-6 h-6 object-contain" />
              </div>
              <span className="font-display font-bold text-xl tracking-wider text-foreground">
                I CYBER
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-6">
              Empowering businesses through cutting-edge web development, mobile applications, and robust cybersecurity solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Rahama</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-foreground">Expertise</h4>
            <ul className="space-y-4">
              <li className="text-muted-foreground">Web Application Development</li>
              <li className="text-muted-foreground">Mobile App Development</li>
              <li className="text-muted-foreground">Cybersecurity Consulting</li>
              <li className="text-muted-foreground">UI/UX Design</li>
            </ul>
          </div>
        </div>

        {/* Social Icons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 py-8 border-y border-white/10 mb-8">
          {socialIcons.map((item, idx) => {
            const className = "p-3 rounded-full bg-white/5 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-all duration-300 inline-flex";
            return item.href ? (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                aria-label={item.label}
              >
                <item.icon className="w-5 h-5" />
              </a>
            ) : (
              <button 
                key={idx}
                className={className}
                aria-label={item.label}
              >
                <item.icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>

        <div className="text-center text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between">
          <p>&copy; {currentYear} icyber.tech. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Developed by Rahama</p>
        </div>
      </div>
    </footer>
  );
}
