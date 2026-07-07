export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    period: 'May 2025 – Present',
    role: 'AI Data Engineer',
    company: 'HavarTech Solutions · Georgia, USA (Remote)',
    bullets: [
      'Engineered robust AWS data infrastructure using S3, Redshift, Glue, and EMR for large-scale ML training and inference.',
      'Built scalable ETL/ELT pipelines with Apache Spark & Databricks — reduced data processing time by 40%.',
      'Implemented CI/CD pipelines for MLOps via AWS CodePipeline & Jenkins, improving deployment efficiency by 50%.',
      'Fine-tuned RoBERTa-L and Ollama LLMs and integrated them into the product ecosystem with full monitoring.',
    ],
  },
  {
    period: 'Dec 2024 – Present',
    role: 'MLOps Data Engineer Consultant / Tutor',
    company: 'Omdena · Bhutan (Remote)',
    bullets: [
      'Led development of an LLM-powered mental health chatbot adopted by the Bhutanese Government.',
      'Designed end-to-end data pipeline for disaster management system (flood, fire, earthquake detection) presented to the United Nations.',
      'Trained 350+ professionals across Tanzania, Nepal, and Bhutan with 93% transitioning to live innovation challenges.',
    ],
  },
  {
    period: 'Jul 2024 – Nov 2024',
    role: 'Associate ML Data Engineer',
    company: 'Ajua · Nairobi, Kenya',
    bullets: [
      'Engineered customer experience ML models tracking NPS, CSAT, CES, CLV, and Churn Rate.',
      'Built real-time embedded dashboards for clients; migrated the platform to AWS for scalability.',
      'Collaborated with Customer Success Engineers to resolve experience challenges and retrain legacy models.',
    ],
  },
  {
    period: 'Jun 2023 – Jun 2024',
    role: 'Lead Data Scientist',
    company: 'Nexthikes · Noida, India',
    bullets: [
      'Led cross-functional teams of data scientists and engineers, achieving 96% client satisfaction.',
      'Translated business needs into technical sprints using Agile methodology, increasing revenue.',
      'Mentored interns and junior data scientists, earning recognition as Best Mentor.',
    ],
  },
  {
    period: 'Jul 2023 – Jul 2024',
    role: 'Data Science Trainer',
    company: 'Henry Harvin · Noida, India',
    bullets: [
      'Upskilled 215+ students in Python, R, SQL, Apache Spark, and cloud data platforms.',
      'Co-architected a Master’s in Data Science curriculum now adopted by Collège de Paris.',
      'Led 12 real-world data science projects from extraction to model deployment.',
    ],
  },
];
