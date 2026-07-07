export interface Product {
  category: 'Course' | 'Book' | 'Service Product';
  title: string;
  description: string;
  priceLabel: string;
  ctaLabel: string;
  url: string;
}

// NOTE: every `url` below is a PLACEHOLDER. Replace with your real storefront /
// checkout / booking link (Gumroad, Payhip, Calendly, Stripe, etc.) before
// treating this section as live and ready for real traffic.
export const products: Product[] = [
  {
    category: 'Course',
    title: 'MLOps in Practice — From Notebook to Production',
    description:
      'A project-based course taking you from a trained model to a monitored, CI/CD-deployed production service using mlflow, Docker, and cloud infrastructure.',
    priceLabel: 'From $149',
    ctaLabel: 'View Course',
    // TODO(placeholder-link): replace with real course platform / checkout URL
    url: 'https://gumroad.com/l/REPLACE_ME-mlops-course',
  },
  {
    category: 'Book',
    title: "The Practical LLM Engineer's Handbook",
    description:
      'A field guide to fine-tuning, deploying, and monitoring large language models in production — grounded in real projects across health, disaster response, and customer experience.',
    priceLabel: '$24 · ebook',
    ctaLabel: 'Get the Book',
    // TODO(placeholder-link): replace with real ebook storefront URL
    url: 'https://payhip.com/b/REPLACE_ME-llm-handbook',
  },
  {
    category: 'Service Product',
    title: 'Data Pipeline Starter Kit',
    description:
      'A fixed-scope, fixed-price engagement to stand up a production ETL/ELT pipeline on AWS (S3, Glue, Redshift) tailored to your data sources — delivered in 2–3 weeks.',
    priceLabel: 'Fixed-scope quote',
    ctaLabel: 'Book a Scoping Call',
    // TODO(placeholder-link): replace with real Calendly / booking URL
    url: 'https://calendly.com/REPLACE_ME/pipeline-starter-kit',
  },
  {
    category: 'Service Product',
    title: 'MLOps Launchpad',
    description:
      'A productized CI/CD + monitoring setup for ML teams — get your models from experiment to reliably deployed and observable in production, fast.',
    priceLabel: 'Fixed-scope quote',
    ctaLabel: 'Book a Scoping Call',
    // TODO(placeholder-link): replace with real Calendly / booking URL
    url: 'https://calendly.com/REPLACE_ME/mlops-launchpad',
  },
];
