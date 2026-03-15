import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 150);
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className={`px-6 md:px-12 lg:px-16 py-4 flex justify-between items-center transition-all duration-500 ${
        scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' : ''
      }`}>
        {/* Logo */}
        <motion.a
          href="#"
          className="text-mono text-sm font-bold text-foreground tracking-tight relative group"
          whileHover={{ scale: 1.02 }}
        >
          <span className="relative z-10">
            {'{'} <span className="text-primary">raul</span> {'}'}
          </span>
          <motion.span
            className="absolute inset-0 bg-primary/5 -m-2"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        </motion.a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { label: "Projetos", href: "#works" },
            { label: "Sobre", href: "#about" },
            { label: "Contato", href: "#contact" },
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-mono text-[11px] tracking-[0.15em] uppercase px-4 py-2 text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
            >
              <span className="relative z-10">{item.label}</span>
              <motion.span
                className="absolute bottom-0 left-4 right-4 h-px bg-primary"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.a>
          ))}
        </div>

        {/* Status */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-mono text-[10px] tracking-widest uppercase text-muted-foreground hidden sm:block">
            Disponível
          </span>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
