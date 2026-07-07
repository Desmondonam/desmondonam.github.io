export interface Project {
  icon: 'Brain' | 'Waves' | 'BarChart' | 'Mountain' | 'Zap' | 'GraduationCap';
  title: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    icon: 'Brain',
    title: 'Mental Health Chatbot — Bhutan Government',
    description:
      'LLM-powered mental health chatbot fine-tuned on transformer models, with a full data pipeline for continuous retraining. Adopted by the Bhutanese Government to enhance the Gross National Happiness Index.',
    tags: ['LLM', 'CrewAI', 'NLP', 'AWS', 'Fine-tuning'],
  },
  {
    icon: 'Waves',
    title: 'AI Disaster Management System — Presented to the UN',
    description:
      'Scalable data pipeline ingesting Sentinel-2 satellite imagery and multi-source APIs to detect flood, fire, and earthquake events. Deployed on AWS and presented to the United Nations.',
    tags: ['Sentinel-2', 'AWS Lambda', 'Computer Vision', 'Serverless'],
  },
  {
    icon: 'BarChart',
    title: 'Customer Experience 360 Dashboard',
    description:
      'Real-time embedded analytics platform tracking NPS, CSAT, CES, CLV, and Churn Rate for enterprise clients. Migrated ETL pipeline to AWS with live reporting to client sites.',
    tags: ['Amazon QuickSight', 'Redshift', 'ETL', 'Python'],
  },
  {
    icon: 'Mountain',
    title: 'COPD Early Detection — Nepal',
    description:
      'ML system built with 120 Nepalese students to identify early causes of Chronic Obstructive Pulmonary Disease in Kathmandu province using climate and health data.',
    tags: ['Scikit-learn', 'XGBoost', 'Data Analysis', 'Public Health'],
  },
  {
    icon: 'Zap',
    title: 'MLOps Pipeline Optimizer',
    description:
      'CI/CD MLOps infrastructure using mlflow, Docker, Kubernetes, and AWS CodePipeline — reducing time-to-market for AI solutions by 45% through automated deployment and monitoring.',
    tags: ['mlflow', 'Docker', 'Kubernetes', 'Airflow', 'Prefect'],
  },
  {
    icon: 'GraduationCap',
    title: 'Data Science MSc Curriculum',
    description:
      "Co-designed and implemented a Master's in Data Science curriculum covering data engineering, ML, analytics, and cloud computing — now officially adopted by Collège de Paris.",
    tags: ['Curriculum Design', 'LMS', 'Auto-grading', 'EdTech'],
  },
];
