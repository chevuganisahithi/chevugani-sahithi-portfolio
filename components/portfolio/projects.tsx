import Image from 'next/image'
import { Code2 as Github, ExternalLink } from 'lucide-react'
import { profile } from '@/lib/profile'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const projects = [
  {
    title: 'Credit Card Fraud Detection System',
    description:
      'Built a classification workflow to identify potentially fraudulent transactions, including data preprocessing and model evaluation.',
    image: '/projects/fraud-detection.png',
    tags: ['Python', 'Machine Learning', 'Pandas', 'NumPy'],
  },
  {
    title: 'AI Civic Portal',
    description:
      'Developed an AI-powered civic information platform intended to make public-service information easier to access through an interactive interface.',
    image: '/projects/ai-civic-portal.png',
    tags: ['Python', 'Web Development', 'AI'],
  },
  {
    title: 'Delivery Agent Management System',
    description:
      'Created a web application interface for managing delivery assignments and presenting task-tracking information.',
    image: '/projects/delivery-agent.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Automated Bill Generator',
    description:
      'Built a billing application designed to generate invoices and automate calculations.',
    image: '/projects/bill-generator.png',
    tags: ['Python', 'Java'],
  },
  {
    title: 'Personal Portfolio & Front-End Mini Projects',
    description:
      'Designed a responsive portfolio and supporting interfaces, including a tourism landing page, image slider, calculator, greeting generator and interactive color-change button.',
    image: '/projects/frontend-projects.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bulma CSS'],
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
          description="Projects across machine learning, applied AI and web development."
        />

        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal
              as="li"
              key={project.title}
              delay={(i % 3) * 120}
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
                <h3 className="text-xl font-semibold leading-snug">{project.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5">
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
          <Reveal
            as="li"
            delay={240}
            className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-primary/30 bg-accent/40 p-8 text-center"
          >
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Github className="size-6" aria-hidden="true" />
            </span>
            <p className="font-heading text-lg font-semibold">More on GitHub</p>
            <p className="text-sm text-muted-foreground">Explore my repositories and ongoing work.</p>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-primary"
            >
              View GitHub Profile
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          </Reveal>
        </ul>
      </div>
    </section>
  )
}
