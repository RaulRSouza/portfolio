import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Github, Terminal } from "lucide-react";
import projectHpm from "@/assets/project-hpm.jpg";
import projectCrypto from "@/assets/project-crypto.jpg";
import projectLacen from "@/assets/project-lacen.jpg";
import projectEletrocel from "@/assets/project-eletrocel.png";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  tech: string[];
  metrics: Record<string, string>;
  image?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    id: "01",
    title: "Climbe",
    subtitle: "Residência de Software III — Climbe Investimentos",
    category: "FULL STACK",
    year: "2026",
    description: "Sistema interno para os analistas de investimentos da empresa: arquitetura, modelagem de dados, APIs REST com as regras de negócio e interface pensada para o dia a dia dos analistas.",
    tech: ["React", "TypeScript", "APIs REST", "SQL"],
    metrics: {},
    repo: "https://github.com/RaulRSouza/climb-insight-hub",
  },
  {
    id: "02",
    title: "To-Do Full Stack",
    subtitle: "Teste técnico — Advice Health",
    category: "FULL STACK",
    year: "2025",
    description: "Aplicação de tarefas com Django REST Framework e React + TypeScript: autenticação JWT, CRUD, filtros, categorias, compartilhamento, Docker, PostgreSQL e testes com pytest. Nota 30/30.",
    tech: ["Django REST", "React", "TypeScript", "PostgreSQL", "Docker"],
    metrics: { nota: "30/30", testes: "pytest" },
    repo: "https://github.com/RaulRSouza/TO-DO",
  },
  {
    id: "03",
    title: "CryptoTrend",
    subtitle: "Plataforma de Trading",
    category: "FULL STACK",
    year: "2025",
    description: "Plataforma de análise de criptomoedas com gráficos de candlestick em tempo real, acompanhamento de posições, RSI e outros indicadores de mercado.",
    tech: ["React", "Python", "WebSocket", "TypeScript", "PostgreSQL"],
    metrics: { sinais: "24h", perf: "96", uptime: "99.5%" },
    image: projectCrypto,
  },
  {
    id: "04",
    title: "HPM-SINC",
    subtitle: "Sistema Hospitalar — PM Sergipe",
    category: "FULL STACK",
    year: "2025",
    description: "API para o Hospital da Polícia Militar de Sergipe, integrando o banco de dados da PM com o sistema hospitalar para gestão de pacientes e laudos.",
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    metrics: { laudos: "2.4K+", perf: "98", uptime: "99.9%" },
    image: projectHpm,
    repo: "https://github.com/RaulRSouza/API-JM",
  },
  {
    id: "05",
    title: "API LACEN",
    subtitle: "Residência de Software II — Fundação Parreiras Horta",
    category: "BACKEND",
    year: "2025",
    description: "API REST para o Laboratório Central de Saúde Pública de Sergipe: gestão de lotes, amostras biológicas e lâminas, geração de laudos, autenticação JWT e documentação Swagger (OpenAPI).",
    tech: ["Java", "Spring Boot", "Swagger", "PostgreSQL", "JWT"],
    metrics: { endpoints: "35", perf: "91%", models: "16" },
    image: projectLacen,
    repo: "https://github.com/RaulRSouza/FSPH-API",
  },
  {
    id: "06",
    title: "Eletrocel",
    subtitle: "Loja Virtual",
    category: "FULL STACK",
    year: "2024",
    description: "Loja virtual completa para e-commerce de eletrônicos, com catálogo de produtos, carrinho de compras, sistema de pagamento e painel administrativo.",
    tech: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Tailwind"],
    metrics: { produtos: "500+", perf: "95", uptime: "99.7%" },
    image: projectEletrocel,
  },
];

const metricLabels: Record<string, string> = {
  perf: "LIGHTHOUSE", sinais: "SINAIS", laudos: "LAUDOS", users: "USUÁRIOS",
  endpoints: "ENDPOINTS", models: "MODELOS", produtos: "PRODUTOS", nota: "NOTA", testes: "TESTES",
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const expanded = isHovered || isOpen;

  return (
    <motion.div
      ref={ref}
      className="group relative border-b border-border cursor-pointer"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsOpen((open) => !open)}
    >
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="absolute inset-0 bg-primary/[0.03]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      <div className="relative py-8 md:py-12 px-0 md:px-4">
        <div className="grid grid-cols-12 gap-4 items-center">
          <motion.div
            className="col-span-1 hidden md:block"
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-mono text-[10px] text-muted-foreground tracking-widest">
              {project.id}
            </span>
          </motion.div>

          <div className="col-span-12 md:col-span-4">
            <motion.div
              animate={{ x: isHovered ? 8 : 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-mono text-[9px] tracking-[0.3em] uppercase text-primary block mb-1">
                {project.category} — {project.year}
              </span>
              <h3 className="text-display text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground leading-none">
                {project.title}
              </h3>
              <span className="text-body text-xs text-muted-foreground mt-1 block">
                {project.subtitle}
              </span>
            </motion.div>
          </div>

          <div className="col-span-12 md:col-span-4 mt-2 md:mt-0">
            <motion.p
              className="text-body text-xs text-muted-foreground leading-relaxed"
              animate={{ opacity: expanded ? 1 : 0.6, x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.4 }}
            >
              {project.description}
            </motion.p>
          </div>

          <div className="col-span-12 md:col-span-3 flex items-center justify-between mt-3 md:mt-0">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.slice(0, 3).map((t) => (
                <span key={t} className="text-mono text-[8px] tracking-wider uppercase px-2 py-0.5 border border-border text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
            <motion.div
              className="ml-4 flex-shrink-0"
              animate={{
                rotate: expanded ? 0 : -45,
                scale: expanded ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="w-5 h-5 text-primary" />
            </motion.div>
          </div>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              className="grid grid-cols-12 gap-4 mt-6 overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {project.image && (
                <div className="col-span-12 md:col-span-6 md:col-start-2">
                  <div className="relative overflow-hidden border border-border/50 rounded-sm">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 sm:h-48 object-cover object-top"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  </div>
                </div>
              )}
              <div className={`col-span-12 ${project.image ? "md:col-span-4" : "md:col-span-10 md:col-start-2"} flex flex-row flex-wrap md:flex-col justify-start md:justify-center gap-x-8 gap-y-4`}>
                {Object.entries(project.metrics).map(([key, val]) => (
                  <div key={key}>
                    <span className="text-mono text-[9px] tracking-widest uppercase text-muted-foreground block">
                      {metricLabels[key] ?? key.toUpperCase()}
                    </span>
                    <span className="text-display text-lg font-bold text-primary">
                      {val}
                    </span>
                  </div>
                ))}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 self-start text-mono text-[10px] tracking-[0.2em] uppercase border border-border px-4 py-2 text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Ver código
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-px bg-primary"
        initial={{ width: "0%" }}
        animate={{ width: expanded ? "100%" : "0%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
};

const GallerySection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const counterX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={sectionRef} className="py-24 md:py-40 px-6 md:px-12 lg:px-16">
      <motion.div
        ref={headerRef}
        className="mb-16 md:mb-24"
        initial={{ opacity: 0 }}
        animate={headerInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center gap-4 mb-6">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="text-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
            Projetos selecionados
          </span>
          <motion.div
            className="flex-1 h-px bg-border"
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ transformOrigin: "left" }}
          />
        </div>

        <div className="overflow-hidden">
          <motion.h2
            className="text-display text-[clamp(1.75rem,8.5vw,6rem)] font-extrabold tracking-[-0.03em] text-foreground"
            initial={{ y: 80 }}
            animate={headerInView ? { y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            PROJETOS <span className="text-gradient-cyber">REAIS</span>
          </motion.h2>
        </div>

        <motion.div className="mt-4 overflow-hidden" style={{ x: counterX }}>
          <span className="text-display text-[5rem] sm:text-[8rem] md:text-[12rem] font-extrabold text-foreground/[0.02] leading-none whitespace-nowrap select-none">
            006 PROJETOS
          </span>
        </motion.div>
      </motion.div>

      <div className="border-t border-border">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
