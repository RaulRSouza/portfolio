import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

const skills = [
  { name: "Frontend", items: ["React", "TypeScript / JavaScript", "Tailwind / Material UI", "Framer Motion", "Figma"] },
  { name: "Backend", items: ["Python / FastAPI", "Java / Spring Boot", "API RESTful", "JWT / 2FA", "Swagger"] },
  { name: "Banco de Dados", items: ["PostgreSQL", "Redis", "SQL", "MongoDB", "Prisma"] },
  { name: "Infra & Tools", items: ["Docker", "Git / GitHub", "Power BI", "Excel", "CI/CD"] },
];

const timeline = [
  { year: "2026", role: "Estagiário de TI", company: "Ricardo Dinucci", desc: "Desenvolvimento backend com FastAPI, APIs RESTful, integração com React, autenticação JWT/2FA, PostgreSQL, Redis e documentação técnica." },
  { year: "2025", role: "Estagiário de TI", company: "Fundação de Saúde Parreiras Horta", desc: "Desenvolvimento de API REST para o LACEN, com gestão de amostras biológicas, geração de laudos, autenticação JWT, documentação Swagger e foco em arquitetura e segurança." },
  { year: "2025", role: "Estagiário de TI", company: "Polícia Militar de Sergipe", desc: "Suporte técnico, manutenção de equipamentos, instalação de softwares, apoio a redes e sistemas e organização de chamados." },
  { year: "2024", role: "Estagiário de TI", company: "BAASIC", desc: "Criação de interfaces responsivas com Material UI, do design no Figma à implementação, com foco em acessibilidade, mobile e uso de Docker para deploy e integração contínua." },
  { year: "2022", role: "Jovem Aprendiz", company: "Eletrocel", desc: "Organização de sistemas, cadastro de clientes, controle de estoque, planilhas e suporte administrativo." },
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

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-6">
              <div className="overflow-hidden mb-8">
                <motion.h2
                  className="text-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] text-foreground leading-[0.9]"
                  initial={{ y: 80 }}
                  animate={inView ? { y: 0 } : {}}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  CONSTRUINDO O
                  <br />
                  <span className="text-gradient-cyber">FUTURO</span>
                </motion.h2>
              </div>

              <motion.div
                className="relative w-48 h-48 md:w-56 md:h-56 overflow-hidden border border-border/50"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: photoY }}
              >
                <img
                  src={profilePhoto}
                  alt="Raul Rodrigues"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
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
                Sou Raul Rodrigues, desenvolvedor Full Stack Junior com 3 anos de experiência
                e 10 projetos profissionais. Cursando Ciência da Computação em Aracaju, Sergipe.
                Apaixonado por criar soluções que fazem a diferença.
              </p>
              <p className="text-body text-muted-foreground/60 text-sm leading-relaxed">
                De estágios em instituições públicas a desenvolvimento de APIs para o estado de Sergipe,
                minha trajetória é marcada pela busca constante de aprendizado e entrega de valor real.
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
            { value: "3+", label: "Anos de XP" },
            { value: "10+", label: "Projetos" },
            { value: "99.9%", label: "Uptime" },
            { value: "∞", label: "Curiosidade" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-background p-6 md:p-8 text-center group hover:bg-card transition-colors duration-500"
              whileHover={{ y: -2 }}
            >
              <motion.span
                className="text-display text-3xl md:text-5xl font-extrabold text-primary block mb-2 glow-text"
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

        {/* Timeline */}
        <div>
          <motion.div
            className="flex items-center gap-3 mb-10"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
          >
            <span className="text-mono text-[10px] tracking-[0.4em] uppercase text-primary">
              // trajetória
            </span>
          </motion.div>

          <div className="border-t border-border">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className="grid grid-cols-12 gap-4 py-8 border-b border-border group hover:bg-card/50 transition-colors duration-500 px-4"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
                whileHover={{ x: 4 }}
              >
                <div className="col-span-2 md:col-span-1">
                  <span className="text-mono text-[10px] tracking-widest text-primary">
                    {item.year}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-4">
                  <h4 className="text-display text-lg font-bold text-foreground">
                    {item.role}
                  </h4>
                  <span className="text-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                    {item.company}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-5 md:col-start-7 mt-2 md:mt-0">
                  <p className="text-body text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Formação */}
        <div className="mt-20">
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
                  Ciência da Computação
                </h4>
                <span className="text-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                  Bacharelado — Em andamento
                </span>
              </div>
              <span className="text-mono text-[10px] tracking-widest text-primary">
                ARACAJU, SE
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
