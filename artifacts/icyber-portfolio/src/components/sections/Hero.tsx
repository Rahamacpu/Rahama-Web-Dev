import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import avatarImg from "@assets/fotis-fotopoulos-SyvsTmuuZyM-unsplash_1777393037241.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=2000&auto=format&fit=crop"
          alt="Scenic coastal sunset"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
      </div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-12 lg:py-0">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 max-w-2xl text-center lg:text-left"
        >
          <div className="inline-block px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-xs sm:text-sm mb-4 sm:mb-6 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
            Career path: Cyber Security Web & App Development
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] mb-4 sm:mb-6">
            Hello, i'm <span className="text-[#00FFFF] text-glow-cyan">Rahama</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light mb-6 sm:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Welcome to my professional website. I engineer secure, scalable, and visually stunning digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold bg-[#00FFFF] text-black shadow-[0_0_20px_rgba(0,255,255,0.35)] hover:shadow-[0_0_35px_rgba(0,255,255,0.6)] hover:bg-[#33FFFF] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Let's Talk
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/services"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold bg-white/5 border border-white/10 text-foreground hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-center"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>

        {/* Profile Image Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 flex justify-center lg:justify-end w-full"
        >
          <div className="relative">
            {/* Decorative background blur */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent blur-[100px] opacity-20 rounded-full" />
            
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 lg:w-80 lg:h-[420px] rounded-t-full rounded-b-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl glass-panel group">
              <img 
                src={avatarImg}
                alt="Rahama - Web Developer" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
            </div>
            
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-4 left-2 sm:-bottom-6 sm:-left-4 lg:-left-10 glass-panel px-4 sm:px-6 py-3 sm:py-4 rounded-2xl flex items-center gap-3 sm:gap-4"
            >
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse flex-shrink-0" />
              <div>
                <p className="font-bold text-foreground text-sm sm:text-base">Available for Work</p>
                <p className="text-xs text-muted-foreground">24/7 Support</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
