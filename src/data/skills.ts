export interface SkillCategory {
  title: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    items: ['Python', 'SQL', 'Java', 'JavaScript', 'TypeScript', 'R'],
  },
  {
    title: 'ML / AI Frameworks',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain', 'CrewAI', 'HuggingFace', 'mlflow'],
  },
  {
    title: 'Data Engineering',
    items: ['Apache Spark', 'Kafka', 'Airflow', 'Prefect', 'Databricks', 'dbt'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS (S3, EC2, Glue, EMR, Redshift)', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins'],
  },
  {
    title: 'Databases & Storage',
    items: ['PostgreSQL', 'Redshift', 'Pinecone (VectorDB)', 'DynamoDB', 'MongoDB'],
  },
  {
    title: 'Specializations',
    items: ['Large Language Models', 'NLP', 'Generative AI', 'AI Agents', 'Multilingual AI', 'Statistical Modelling'],
  },
];
