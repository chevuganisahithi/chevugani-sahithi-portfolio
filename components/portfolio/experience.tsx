import { Briefcase, CheckCircle2 } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const responsibilities = [
  'Developed responsive front-end interfaces using HTML, CSS, JavaScript and Bulma CSS.',
  'Implemented interactive UI features for desktop, tablet and mobile layouts.',
  'Practiced debugging and maintainable coding practices.',
]

const stack = ['HTML', 'CSS', 'JavaScript', 'Bulma CSS', 'Responsive Design']

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading id="experience-title" eyebrow="Experience" title="Internship experience" />

        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-xl hover:shadow-primary/10 md:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-accent blur-3xl"
          />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-start">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <Briefcase className="size-6" aria-hidden="true" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                Internship
              </p>
              <h3 className="mt-1 text-2xl font-semibold">Web Developer Intern</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {responsibilities.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                {stack.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
