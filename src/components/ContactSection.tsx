import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    { label: "GitHub", href: "https://github.com/RaulRSouza" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/raull-rodrigues/" },
  ];

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 lg:px-16 relative">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <motion.span
          className="text-display text-[20vw] font-extrabold text-foreground/[0.015] whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 2 }}
        >
          CONTATO
        </motion.span>
      </div>

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-mono text-primary text-sm">{'>'}_</span>
            <span className="text-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
              Contato
            </span>
            <motion.div
              className="flex-1 h-px bg-border"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <div className="overflow-hidden">
            <motion.h2
              className="text-display text-5xl md:text-7xl lg:text-[8rem] font-extrabold tracking-[-0.04em] text-foreground leading-[0.85]"
              initial={{ y: 120 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              VAMOS
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-display text-5xl md:text-7xl lg:text-[8rem] font-extrabold tracking-[-0.04em] leading-[0.85]"
              initial={{ y: 120 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-gradient-cyber">CONSTRUIR</span>
            </motion.h2>
          </div>
        </motion.div>

        {/* Content grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Left - description + CTA */}
          <div>
            <p className="text-body text-muted-foreground text-sm md:text-base leading-relaxed mb-8 max-w-md">
              Disponível para projetos desafiadores, posições full-time e 
              colaborações que empurram os limites do que é possível na web.
            </p>

            <motion.a
              href="https://wa.me/5575999880288?text=Ol%C3%A1%2C%20Raul.%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20falar%20sobre%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-mono text-sm tracking-[0.2em] uppercase text-primary-foreground bg-primary px-8 py-4 hover:glow-sm transition-all duration-500"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Iniciar projeto</span>
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </motion.a>

            <div className="mt-6 space-y-2">
              <motion.a
                href="mailto:raul.rodrigues@souunit.com.br"
                className="text-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-300 tracking-widest block"
                whileHover={{ x: 4 }}
              >
                raul.rodrigues@souunit.com.br
              </motion.a>
              <motion.a
                href="tel:+5575999880288"
                className="text-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-300 tracking-widest block"
                whileHover={{ x: 4 }}
              >
                (075) 99988-0288
              </motion.a>
              <motion.span
                className="text-mono text-xs text-muted-foreground/60 tracking-widest block"
              >
                Aracaju, Sergipe — Brasil
              </motion.span>
            </div>
          </div>

          {/* Right - social links */}
          <div className="md:text-right">
            <span className="text-mono text-[9px] tracking-[0.4em] uppercase text-muted-foreground mb-6 block">
              Me encontre
            </span>
            <div className="space-y-0 border-t border-border md:border-none">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between md:justify-end gap-4 py-4 border-b border-border md:border-none text-foreground hover:text-primary transition-colors duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  whileHover={{ x: -4 }}
                >
                  <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-primary md:order-1 transition-colors duration-300" />
                  <span className="text-display text-xl md:text-2xl font-bold tracking-tight">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="relative z-10 mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <span className="text-mono text-[10px] text-muted-foreground tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} — Feito por Raul Rodrigues
        </span>
        <div className="flex items-center gap-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-mono text-[10px] text-muted-foreground tracking-[0.3em] uppercase">
            Sistema operacional
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
