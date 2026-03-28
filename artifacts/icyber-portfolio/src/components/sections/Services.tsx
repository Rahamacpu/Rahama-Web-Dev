import { motion } from "framer-motion";
import { Laptop, Smartphone, Shield, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function Services() {
  const services = [
    {
      id: "web",
      title: "Web Development",
      description: "Custom, responsive, and high-performance websites tailored to your brand identity.",
      icon: Laptop,
      color: "from-blue-500/20 to-cyan-500/20",
      textColor: "text-blue-400"
    },
    {
      id: "mobile",
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: Smartphone,
      color: "from-primary/20 to-accent/20",
      textColor: "text-primary"
    },
    {
      id: "security",
      title: "Cyber Security",
      description: "Comprehensive audits, penetration testing, and security infrastructure setup.",
      icon: Shield,
      color: "from-accent/20 to-rose-600/20",
      textColor: "text-accent"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 relative bg-black">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-sm font-medium mb-4"
          >
            What I Do
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            Our services are available <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">24 hours</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            From conceptualization to deployment and continuous monitoring, we provide end-to-end technological solutions.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              className="group relative rounded-3xl glass-panel p-8 hover:bg-white/[0.03] transition-colors duration-500 overflow-hidden"
            >
              {/* Background Glow */}
              <div className={`absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br ${service.color} blur-[50px] group-hover:scale-150 transition-transform duration-700`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-8 shadow-lg ${service.textColor}`}>
                  <service.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <Link href="/contact" className={`inline-flex items-center gap-2 font-medium ${service.textColor} group/btn`}>
                  Discuss Project
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
