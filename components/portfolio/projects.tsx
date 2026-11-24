import Image from 'next/image'
import { Code2 as Github, ExternalLink } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const projects = [
  {
    title: 'Credit Card Fraud Detection Using Machine Learning',
    description:
      'A machine learning project that analyzes credit card transactions to classify them as legitimate or potentially fraudulent.',
    image: '/projects/fraud-detection.png',
    tags: ['Machine Learning', 'Classification', 'Python'],
  },
  {
    title: 'AI House Design',
    description:
      'An AI-driven project that explores generating and visualizing house design ideas, combining intelligent systems with design thinking.',
    image: '/projects/ai-house-design.png',
    tags: ['Artificial Intelligence', 'Design', 'UI/UX'],
  },
  {
    title: 'Merchant Intelligence Copilot',
    description:
      'An AI copilot concept for merchants that helps surface business insights and answer questions about their store.',
    image: '/projects/merchant-copilot.png',
    tags: ['Artificial Intelligence', 'Copilot', 'Analytics'],
  },
]

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="bg-muted/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          id="projects-title"
          eyebrow="Projects"
          title="Selected work"
          description="A few projects where I applied AI and machine learning to real problems."
        />

        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal
              as="li"
              key={project.title}
              delay={i * 120}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-accent">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={`Illustration for ${project.title}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <ul className="mb-4 flex flex-wrap gap-2" aria-label="Topics">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <h3 className="text-xl font-semibold leading-snug">{project.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <p className="mt-3 text-sm italic text-muted-foreground">
                  [Add details: tools used, your role and key outcomes.]
                </p>
                <div className="mt-6 flex gap-3 border-t border-border pt-5">
                  <span
                    className="inline-flex items-center gap-2 rounded-full border border-dashed border-border px-4 py-2 text-sm text-muted-foreground"
                    title="Add your GitHub repository link"
                  >
                    <Github className="size-4" aria-hidden="true" />
                    [Code link]
                  </span>
                  <span
                    className="inline-flex items-center gap-2 rounded-full border border-dashed border-border px-4 py-2 text-sm text-muted-foreground"
                    title="Add your live demo link"
                  >
                    <ExternalLink className="size-4" aria-hidden="true" />
                    [Demo link]
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
