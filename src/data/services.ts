export interface Service {
  icon: 'BarChart3' | 'Database' | 'Cpu' | 'GraduationCap' | 'Compass';
  title: string;
  pitch: string;
}

export const services: Service[] = [
  {
    icon: 'BarChart3',
    title: 'Data Science Consultancy',
    pitch:
      'End-to-end data science consulting — from problem scoping and exploratory analysis to statistical modelling and decision-ready insights for teams that need answers, not just dashboards.',
  },
  {
    icon: 'Database',
    title: 'Data Engineering',
    pitch:
      'Production-grade ETL/ELT pipelines and cloud data infrastructure (AWS Redshift, Glue, EMR, Apache Spark, Databricks) built to move and prepare data reliably at scale.',
  },
  {
    icon: 'Cpu',
    title: 'ML Engineering & LLM / MLOps',
    pitch:
      'Design, fine-tune, and deploy ML and LLM systems with full CI/CD, monitoring, and cost-aware infrastructure — from RoBERTa-L fine-tuning to CrewAI multi-agent pipelines.',
  },
  {
    icon: 'GraduationCap',
    title: 'Tutoring & Corporate Training',
    pitch:
      'Hands-on data science and ML training for individuals and organizations — 350+ professionals trained across Omdena, Henry Harvin, 10 Academy, and EdZip Education programs.',
  },
  {
    icon: 'Compass',
    title: 'Career Mentorship',
    pitch:
      '1:1 mentorship for aspiring data scientists and engineers — portfolio review, interview prep, and career-transition roadmaps informed by real hiring and team-lead experience.',
  },
];
