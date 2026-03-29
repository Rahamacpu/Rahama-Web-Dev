import { motion } from "framer-motion";
import { Code2, Server, ShieldCheck } from "lucide-react";

export function About() {
  const skills = [
    { name: "Frontend Development", icon: Code2, desc: "React, Vue, Tailwind, modern UI/UX." },
    { name: "Backend Architecture", icon: Server, desc: "Node.js, Databases, scalable APIs." },
    { name: "Cybersecurity", icon: ShieldCheck, desc: "Pen testing, secure coding practices." },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Hi, this is <span className="text-primary text-glow">Rahama!</span>
            </h2>
            <p className="text-xl text-foreground font-medium mb-6 border-l-4 border-accent pl-4">
              I'm a web developer. I build websites and mobile apps.
            </p>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                With a strong foundation in both software engineering and cybersecurity, I don't just build applications that look good—I engineer systems that are robust, scalable, and fortified against modern threats.
              </p>
              <p>
                My journey began with a passion for problem-solving. Over the years, I've honed my skills in creating intuitive digital experiences while ensuring that the data and infrastructure powering them remain impenetrable.
              </p>
            </div>
            
            <div className="mt-10 pt-10 border-t border-white/10 grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">5+</p>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">50+</p>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          {/* Skills / Visuals */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6"
          >
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary group-hover:text-accent transition-colors">
                    <skill.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{skill.name}</h3>
                    <p className="text-muted-foreground">{skill.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
