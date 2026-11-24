import { GraduationCap, Lightbulb, Puzzle } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Student',
    text: 'Integrated M.Tech in CSE (Artificial Intelligence) at VIT Bhopal University.',
  },
  {
    icon: Lightbulb,
    title: 'Interests',
    text: 'Software engineering, applied AI, machine learning and user-friendly applications.',
  },
  {
    icon: Puzzle,
    title: 'Approach',
    text: 'Analytical problem-solving and practical solutions through technology.',
  },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-muted/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading id="about-title" eyebrow="About Me" title="Curious mind, practical builder" />

        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              {'I am an '}
              <span className="font-semibold text-foreground">
                Integrated M.Tech Computer Science and Engineering
              </span>
              {' student specializing in '}
              <span className="font-semibold text-foreground">Artificial Intelligence</span>
              {' at VIT Bhopal University.'}
            </p>
            <p>
              I am interested in software engineering, applied AI, machine learning and building
              user-friendly applications. I enjoy analytical problem-solving and developing
              practical solutions through technology.
            </p>
          </Reveal>

          <ul className="grid gap-4">
            {highlights.map(({ icon: Icon, title, text }, i) => (
              <Reveal
                as="li"
                key={title}
                delay={i * 100}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-lg hover:shadow-primary/5"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
