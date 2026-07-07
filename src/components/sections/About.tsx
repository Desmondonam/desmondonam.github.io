import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';

const SKILL_BARS = [
  { name: 'Python / ML Frameworks', pct: 95 },
  { name: 'AWS / Cloud Architecture', pct: 90 },
  { name: 'LLMs & Fine-tuning', pct: 88 },
  { name: 'Data Pipelines (Spark, Kafka, Airflow)', pct: 92 },
  { name: 'MLOps / CI-CD / Docker / K8s', pct: 85 },
  { name: 'Data Visualization & Analytics', pct: 87 },
];

const TAGS = ['LLMs & GenAI', 'MLOps', 'AWS Certified', 'Data Engineering', 'NLP', 'AI Agents'];

export default function About() {
  return (
    <section id="about" className="section-shell bg-navy-800/40">
      <SectionHeader index="// 01" title="About" />
      <div className="grid gap-14 md:grid-cols-2">
        <div className="space-y-5 text-sm leading-relaxed text-navy-400 md:text-[15px]">
          <p>
            I'm a <strong className="text-ink">Machine Learning Data Engineer</strong> based in Nairobi,
            Kenya, specializing in building end-to-end AI systems — from raw data ingestion to
            production-grade model deployment.
          </p>
          <p>
            My work spans{' '}
            <strong className="text-ink">
              LLM fine-tuning, MLOps pipeline design, cloud-native ETL/ELT architectures, and real-time data
              processing
            </strong>
            . I've deployed systems for government bodies, NGOs, and enterprise clients across Africa, Asia,
            and the Americas.
          </p>
          <p>
            Beyond engineering, I am passionate about <strong className="text-ink">knowledge transfer</strong>{' '}
            — I've trained 350+ data scientists and engineers across Tanzania, Nepal, Bhutan, and Kenya, and
            co-authored a Master's curriculum adopted by Collège de Paris.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {TAGS.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {SKILL_BARS.map((skill) => (
            <div key={skill.name} className="flex flex-col gap-2">
              <div className="flex justify-between text-xs">
                <span className="text-ink">{skill.name}</span>
                <span className="text-accent">{skill.pct}%</span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-navy-700">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent-soft"
                  style={{ width: `${skill.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
