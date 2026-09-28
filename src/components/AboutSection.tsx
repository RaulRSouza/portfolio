import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

const skills = [
  { name: "Front-end", items: ["React", "JavaScript / TypeScript", "HTML / CSS", "Material UI / Tailwind", "Figma"] },
  { name: "Back-end", items: ["Python / FastAPI", "Java / Spring Boot", "APIs REST", "JWT / 2FA", "Swagger / OpenAPI"] },
  { name: "Banco de Dados", items: ["SQL", "PostgreSQL", "Redis (cache)", "Modelagem de dados"] },
  { name: "DevOps & Tools", items: ["Docker", "Git / GitHub", "Linux", "Google Cloud (fundamentos)", "Power BI / Excel"] },
];

const certifications = [
  { name: "Google Cloud Computing Foundations", org: "Google", year: "2025" },
  { name: "Empreendedorismo — Programa Supernova", org: "Sebrae · 80h", year: "2026" },
  { name: "Programação Web — Front-End", org: "UNIT · 80h", year: "2024" },
  { name: "Python Completo", org: "Danki Code · 30h", year: "2024" },
  { name: "Criando minha API em Java com Spring Boot", org: "UNIT · 6h", year: "2025" },
  { name: "Introdução à Ciência de Dados com Python e Kaggle", org: "UNIT · 6h", year: "2025" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const photoY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="py-24 md:py-40 px-6 md:px-12 lg:px-16">
      <div ref={ref}>
        {/* Header */}
        <motion.div
          className="mb-20 md:mb-32"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-mono text-primary text-sm">&#123;</span>
            <span className="text-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
              Sobre mim
            </span>
            <motion.div
              className="flex-1 h-px bg-border"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ transformOrigin: "left" }}
            />
            <span className="text-mono text-primary text-sm">&#125;</span>
          </div>

          <div className="overflow-hidden mb-8 md:mb-12">
                <motion.h2
                  className="text-display text-[clamp(1.25rem,6.6vw,6rem)] font-extrabold tracking-[-0.03em] text-foreground leading-[0.9]"
                  initial={{ y: 80 }}
                  animate={inView ? { y: 0 } : {}}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  CONSTRUINDO O
                  <br />
                  <span className="text-gradient-cyber">FUTURO</span>
                </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-6">

              <motion.div
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 overflow-hidden border border-border/50"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: photoY }}
              >
                <img
                  src={profilePhoto}
                  alt="Raul Rodrigues"
                  className="w-full h-full object-cover object-[40%_30%] grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary" />
              </motion.div>
            </div>

            <motion.div
              className="md:col-span-5 md:col-start-8 flex flex-col justify-end"
              style={{ y: textY }}
            >
              <p className="text-body text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                Sou Raul Rodrigues, desenvolvedor full stack em formação, cursando Ciência da Computação
                na Universidade Tiradentes (UNIT), em Aracaju. No back-end, construo APIs REST com Python,
                FastAPI e Java/Spring Boot, com PostgreSQL, Redis, JWT/2FA e Docker. No front-end, crio
                interfaces responsivas com React e Material UI, do Figma à implementação.
              </p>
              <p className="text-body text-muted-foreground/60 text-sm leading-relaxed">
                Passei por estágios e residências de software em instituições públicas e empresas privadas,
                além de suporte técnico, docência e inovação. Busco estágio, trainee ou vaga júnior em
                desenvolvimento — remoto ou em Aracaju.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-20 md:mb-32"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { value: "9", label: "Experiências" },
            { value: "3", label: "Residências" },
            { value: "20+", label: "Certificações" },
            { value: "6º", label: "Período CC" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-background px-3 py-6 md:p-6 lg:p-8 text-center group hover:bg-card transition-colors duration-500"
              whileHover={{ y: -2 }}
            >
              <motion.span
                className="text-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary block mb-2 glow-text"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {stat.value}
              </motion.span>
              <span className="text-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="mb-20 md:mb-32">
          <motion.div
            className="flex items-center gap-3 mb-10"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <span className="text-mono text-[10px] tracking-[0.4em] uppercase text-primary">
              // tech_stack
            </span>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } },
            }}
          >
            {skills.map((category) => (
              <motion.div
                key={category.name}
                className="bg-background p-6 md:p-8 group hover:bg-card transition-all duration-500 relative overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                }}
                whileHover={{ y: -2 }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-px bg-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformOrigin: "left" }}
                />
                <h4 className="text-mono text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-6">
                  {category.name}
                </h4>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="text-body text-sm text-muted-foreground flex items-center gap-3 group-hover:text-secondary-foreground transition-colors duration-300">
                      <span className="w-1 h-1 bg-primary/40 group-hover:bg-primary transition-colors duration-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Formação */}
        <div>
          <motion.div
            className="flex items-center gap-3 mb-10"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
          >
            <span className="text-mono text-[10px] tracking-[0.4em] uppercase text-primary">
              // formação
            </span>
          </motion.div>

          <motion.div
            className="border border-border p-6 md:p-8 hover:bg-card/50 transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h4 className="text-display text-lg font-bold text-foreground">
                  Bacharelado em Ciência da Computação
                </h4>
                <span className="text-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                  Universidade Tiradentes (UNIT) — 6º período, em curso
                </span>
              </div>
              <span className="text-mono text-[10px] tracking-widest text-primary">
                ARACAJU, SE
              </span>
            </div>
            <div className="mt-6 pt-6 border-t border-border flex flex-wrap gap-x-8 gap-y-2">
              <span className="text-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                Português — <span className="text-foreground">nativo</span>
              </span>
              <span className="text-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                Inglês — <span className="text-foreground">intermediário</span>
              </span>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 mt-16 mb-10"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.1 }}
          >
            <span className="text-mono text-[10px] tracking-[0.4em] uppercase text-primary">
              // certificações
            </span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-background p-5 md:p-6 hover:bg-card transition-colors duration-500">
                <h4 className="text-body text-sm font-medium text-foreground leading-snug mb-2">
                  {cert.name}
                </h4>
                <span className="text-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                  {cert.org} · <span className="text-primary">{cert.year}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
