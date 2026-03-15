import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const MatrixRain = () => {
  const chars = "01アイウエオカキクケコサシスセソタチツテト";
  const columns = 30;
  
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
      {Array.from({ length: columns }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary text-mono text-xs leading-5 whitespace-pre"
          style={{ left: `${(i / columns) * 100}%` }}
          initial={{ y: "-100%" }}
          animate={{ y: "100vh" }}
          transition={{
            duration: 8 + Math.random() * 12,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          {Array.from({ length: 40 }).map((_, j) => (
            <div key={j} style={{ opacity: Math.random() * 0.8 + 0.2 }}>
              {chars[Math.floor(Math.random() * chars.length)]}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

const GlitchText = ({ text, className }: { text: string; className?: string }) => (
  <span className={`relative inline-block ${className}`}>
    <span className="relative z-10">{text}</span>
    <motion.span
      className="absolute inset-0 text-primary opacity-70"
      aria-hidden
      animate={{
        x: [0, -2, 2, 0],
        opacity: [0, 0.7, 0, 0.7, 0],
      }}
      transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
    >
      {text}
    </motion.span>
    <motion.span
      className="absolute inset-0 opacity-50"
      style={{ color: "hsl(0 100% 60%)" }}
      aria-hidden
      animate={{
        x: [0, 2, -2, 0],
        opacity: [0, 0.5, 0, 0.5, 0],
      }}
      transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, delay: 0.05 }}
    >
      {text}
    </motion.span>
  </span>
);

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i <= text.length) {
          setDisplayed(text.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 2000);
        }
      }, 40);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span className="text-mono">
      {displayed}
      {showCursor && (
        <motion.span
          className="text-primary"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        >
          █
        </motion.span>
      )}
    </span>
  );
};

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.5 },
    },
  };

  const lineVariants = {
    hidden: { y: 120, opacity: 0, skewY: 5 },
    visible: {
      y: 0,
      opacity: 1,
      skewY: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      <MatrixRain />

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[16.66%] top-0 bottom-0 w-px bg-border/30 hidden lg:block" />
        <div className="absolute left-[33.33%] top-0 bottom-0 w-px bg-border/30 hidden lg:block" />
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-border/30 hidden lg:block" />
        <div className="absolute left-[66.66%] top-0 bottom-0 w-px bg-border/30 hidden lg:block" />
        <div className="absolute left-[83.33%] top-0 bottom-0 w-px bg-border/30 hidden lg:block" />
      </div>

      {/* Corner markers */}
      <motion.div
        className="absolute top-8 left-6 md:left-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-mono text-[10px] text-muted-foreground tracking-widest">
          ARACAJU, SE — {new Date().getFullYear()}
        </span>
      </motion.div>

      <motion.div
        className="absolute top-8 right-6 md:right-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <span className="text-mono text-[10px] text-muted-foreground tracking-widest">
          v1.0.0
        </span>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 w-full px-6 md:px-12 lg:px-16 pt-24"
        style={{ opacity, scale, y }}
      >
        <motion.div
          className="max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Pre-title terminal line */}
          <motion.div
            className="mb-8 flex items-center gap-3"
            variants={lineVariants}
          >
            <motion.div
              className="h-px bg-primary"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            />
            <span className="text-mono text-[11px] tracking-[0.4em] uppercase text-primary">
              <TypewriterText text="// desenvolvedor_full_stack" delay={1800} />
            </span>
          </motion.div>

          {/* Main title */}
          <div className="overflow-visible mb-1">
            <motion.h1
              className="text-display text-[clamp(2.4rem,8vw,7rem)] font-extrabold leading-[0.92] tracking-[-0.04em] whitespace-nowrap"
              variants={lineVariants}
            >
              <GlitchText text="RAUL" className="mr-[0.18em]" />
              <span className="text-gradient-cyber">RODRIGUES</span>
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-12">
            <motion.h1
              className="text-display text-[clamp(2rem,6vw,5rem)] font-extrabold leading-[0.85] tracking-[-0.04em] text-foreground"
              variants={lineVariants}
            >
              DEV FULL STACK<span className="text-primary">_</span>
            </motion.h1>
          </div>

          {/* Description */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end"
            variants={lineVariants}
          >
            <div className="md:col-span-5 md:col-start-7">
              <p className="text-body text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                Desenvolvedor Full Stack com 3 anos de experiência, cursando Ciência da Computação.
                Focado em construir sistemas escaláveis e interfaces que transformam ideias em realidade.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Python", "Java", "Spring Boot", "PostgreSQL"].map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="text-mono text-[10px] tracking-widest uppercase px-3 py-1.5 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-500"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5 + i * 0.08 }}
                    whileHover={{ scale: 1.05, borderColor: "hsl(160, 100%, 50%)" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        <span className="text-mono text-[9px] tracking-[0.4em] uppercase text-muted-foreground">
          Scroll
        </span>
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-primary/60 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>

      {/* Bottom line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-border"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "left" }}
      />
    </section>
  );
};

export default HeroSection;
