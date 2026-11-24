import { Binary, Brain, Code2, FileCode2, Globe, Palette, Sparkles, Wrench } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const skillGroups = [
  {
    title: 'Programming',
    icon: FileCode2,
    skills: ['Python', 'C', 'C++', 'Java (foundational)'],
  },
  {
    title: 'DSA & Computer Science',
    icon: Binary,
    skills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Algorithm Analysis', 'Problem-Solving'],
  },
  {
    title: 'AI & Data',
    icon: Brain,
    skills: [
      'ML Fundamentals',
      'Classification',
      'Data Preprocessing',
      'Model Evaluation',
      'Pandas',
      'NumPy',
    ],
  },
  {
    title: 'Software & Web',
    icon: Globe,
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Responsive Design',
      'REST API Concepts (learning)',
      'Debugging & Testing',
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'Command Line'],
  },
  {
    title: 'AI Growth Areas',
    icon: Sparkles,
    skills: ['Prompt Engineering', 'LLM Fundamentals', 'Embeddings', 'RAG', 'AI Agents', 'Cloud Fundamentals'],
  },
  {
    title: 'Design',
    icon: Palette,
    skills: ['UI/UX Fundamentals', 'Canva', 'Adobe Photoshop', 'Digital Design'],
  },
]

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          id="skills-title"
          eyebrow="Technical Skills"
          title="Tools and technologies I work with"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = group.icon
            return (
              <Reveal
                key={group.title}
                delay={(i % 3) * 120}
                className="rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full bg-muted px-3.5 py-1.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
          <Reveal
            delay={120}
            className="flex flex-col justify-center rounded-3xl border border-dashed border-primary/30 bg-accent/40 p-6"
          >
            <Code2 className="mb-3 size-6 text-primary" aria-hidden="true" />
            <p className="font-heading text-lg font-semibold">Always learning</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Currently growing in LLMs, RAG, AI agents and cloud fundamentals.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
