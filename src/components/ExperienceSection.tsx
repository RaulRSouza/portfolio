import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

type Experience = {
  company: string;
  period: string;
  role: string;
  bullets: string[];
  current?: boolean;
};

// Texto igual ao currículo (Curriculo_Raul_Rodrigues.pdf), mais o estágio na Decós.
const experiences: Experience[] = [
  {
    company: "Hospital Decós",
    period: "Set 2026 – Atual",
    role: "Estagiário de TI · Desenvolvimento Front-end",
    current: true,
    bullets: [
      "Desenvolvimento sozinho de todo o front-end da intranet corporativa do hospital, do design no Figma à implementação.",
      "31 telas em HTML5, Tailwind CSS e JavaScript: SPA com roteamento por hash, tema claro/escuro e 4 níveis de acesso (Leitura, Colaborador, RH e Admin).",
      "Mural de avisos, aniversariantes, eventos, documentos e POPs, diretório e ramais, chamados de TI e auditoria das ações.",
    ],
  },
  {
    company: "Sebrae – Programa Supernova",
    period: "Ago 2026 – Atual",
    role: "Bolsista de Iniciação",
    current: true,
    bullets: [
      "Participação como bolsista no programa Supernova do Sebrae, voltado à iniciação ao empreendedorismo e à inovação.",
      "Atuação no projeto de aperfeiçoamento aplicado em simulador de cirurgia minimamente invasiva, na área de Saúde Humana.",
      "Desenvolvimento de competências em inovação, validação de soluções e visão de negócio aplicada à tecnologia.",
    ],
  },
  {
    company: "FUNDAT – Fundação Municipal de Formação para o Trabalho",
    period: "Abr 2026 – Ago 2026",
    role: "Professor de Informática Básica",
    bullets: [
      "Aulas de informática básica em Aracaju: noções de hardware, sistemas operacionais, navegação na internet, segurança digital e ferramentas do Pacote Office.",
      "Responsável pelo planejamento das aulas e pelo acompanhamento do aprendizado dos alunos.",
      "Desenvolvimento de habilidades de comunicação, didática e liderança em sala de aula.",
    ],
  },
  {
    company: "Climbe Investimentos",
    period: "Jan 2026 – Jul 2026",
    role: "Residência de Software III · Desenvolvedor Full Stack",
    bullets: [
      "Arquitetura e desenvolvimento full stack de um sistema interno voltado aos analistas de investimentos da empresa.",
      "Back-end: modelagem de dados, criação de APIs REST e implementação das regras de negócio.",
      "Front-end: interface intuitiva e eficiente, para que os analistas utilizem plenamente as funcionalidades do sistema.",
    ],
  },
  {
    company: "Ricardo Dinucci",
    period: "Ago 2025 – Fev 2026",
    role: "Estagiário de TI · Desenvolvimento Backend",
    bullets: [
      "Desenvolvimento e manutenção de sistemas, com foco na criação de APIs RESTful com Python e FastAPI.",
      "Modelagem de dados e consultas SQL em PostgreSQL; uso de Redis para otimização de performance.",
      "Implementação de autenticação e segurança com JWT e autenticação de dois fatores (2FA).",
      "Integração com o front-end em React, documentação das APIs e melhoria contínua das aplicações.",
    ],
  },
  {
    company: "Polícia Militar do Estado de Sergipe",
    period: "Fev 2025 – Ago 2025",
    role: "Estagiário de TI · Suporte Técnico",
    bullets: [
      "Suporte técnico aos usuários: manutenção de computadores, instalação de softwares e apoio na resolução de problemas de rede e sistemas.",
      "Atendimento e organização de chamados, com foco na solução de problemas.",
      "Contribuição para o bom funcionamento da infraestrutura de TI da instituição.",
    ],
  },
  {
    company: "LACEN – Fundação de Saúde Parreiras Horta",
    period: "Jan 2025 – Jul 2025",
    role: "Residência de Software II · Desenvolvimento Backend",
    bullets: [
      "Desenvolvimento de uma API REST para o Laboratório Central de Saúde Pública (LACEN), voltada ao gerenciamento de amostras biológicas.",
      "Controle por tipo de amostra, geração de laudos, autenticação com JWT e documentação com Swagger (OpenAPI).",
      "Aplicação de boas práticas de arquitetura de software, segurança, modularidade e organização de código.",
    ],
  },
  {
    company: "BAASIC",
    period: "Jun 2024 – Dez 2024",
    role: "Residência de Software I · Front-end e UI",
    bullets: [
      "Criação e implementação de design responsivo com Material UI, do design das telas no Figma à implementação no VS Code.",
      "Foco em melhorar a acessibilidade e a experiência em dispositivos móveis.",
      "Uso de Docker para simplificar o processo de deploy e facilitar a integração contínua.",
    ],
  },
  {
    company: "Eletrocel",
    period: "Mai 2023 – Jan 2024",
    role: "Jovem Aprendiz",
    bullets: [
      "Organização e assistência no sistema de informática da loja.",
      "Cadastro de clientes e de estoque de mercadorias; criação de planilhas no Excel; suporte de vendas.",
    ],
  },
];

const ExperienceItem = ({ item, index }: { item: Experience; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      className="relative grid grid-cols-12 gap-x-4 md:gap-x-8 pl-6 md:pl-0 pb-10 md:pb-14 last:pb-0"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: Math.min(index, 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Linha do tempo */}
      <span className="absolute left-0 md:left-[calc(25%-0.25rem)] top-2 bottom-0 w-px bg-border" aria-hidden />
      <span
        className={`absolute left-[-4px] md:left-[calc(25%-0.5rem)] top-1.5 w-[9px] h-[9px] rotate-45 border ${
          item.current ? "bg-primary border-primary shadow-[0_0_12px_hsl(160_100%_50%/0.6)]" : "bg-background border-primary/60"
        }`}
        aria-hidden
      />

      {/* Período */}
      <div className="col-span-12 md:col-span-3 md:text-right md:pr-8 mb-2 md:mb-0">
        <span className="text-mono text-[10px] tracking-widest uppercase text-primary">
          {item.period}
        </span>
        {item.current && (
          <span className="ml-2 md:ml-0 md:mt-2 md:block text-mono text-[9px] tracking-widest uppercase text-muted-foreground">
            ● em andamento
          </span>
        )}
      </div>

      {/* Conteúdo */}
      <div className="col-span-12 md:col-span-9 md:pl-4">
        <h3 className="text-display text-lg md:text-2xl font-bold text-foreground leading-tight">
          {item.company}
        </h3>
        <p className="text-mono text-[10px] md:text-[11px] tracking-widest uppercase text-muted-foreground mt-1.5 mb-4">
          {item.role}
        </p>
        <ul className="space-y-2 max-w-3xl">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="text-body text-sm text-muted-foreground leading-relaxed flex gap-3">
              <span className="mt-2 w-1 h-1 flex-none bg-primary/60" aria-hidden />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 lg:px-16">
      <motion.div
        ref={ref}
        className="mb-14 md:mb-24"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center gap-4 mb-6">
          <Briefcase className="w-4 h-4 text-primary" />
          <span className="text-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
            Experiência profissional
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
            className="text-display text-[clamp(1.5rem,7vw,6rem)] font-extrabold tracking-[-0.03em] text-foreground leading-[0.9]"
            initial={{ y: 80 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            TRAJETÓRIA <span className="text-gradient-cyber">REAL</span>
          </motion.h2>
        </div>
      </motion.div>

      <div>
        {experiences.map((item, i) => (
          <ExperienceItem key={item.company} item={item} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
