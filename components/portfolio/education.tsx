import { GraduationCap, School } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const education = [
  {
    icon: GraduationCap,
    degree: '[Degree] in Computer Science Engineering',
    focus: 'Specialization in Artificial Intelligence & Machine Learning',
    institution: '[University / College Name]',
    period: '[Start Year] – [Expected Graduation Year]',
    note: '[Add relevant coursework or grade, if you wish.]',
  },
  {
    icon: School,
    degree: '[Previous Qualification]',
    focus: '[Stream / Subjects]',
    institution: '[School Name]',
    period: '[Year]',
    note: '[Optional details]',
  },
]

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading id="education-title" eyebrow="Education" title="Academic background" />

        <ol className="relative flex flex-col gap-8 border-l-2 border-accent pl-8 md:pl-10">
          {education.map(({ icon: Icon, ...item }, i) => (
            <Reveal as="li" key={item.degree} delay={i * 120} className="relative">
              <span className="absolute -left-[3.05rem] top-1 flex size-10 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground md:-left-[3.55rem]">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <div className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5">
                <p className="text-sm font-semibold text-primary">{item.period}</p>
                <h3 className="mt-1 text-xl font-semibold">{item.degree}</h3>
                <p className="mt-1 font-medium text-foreground/80">{item.focus}</p>
                <p className="mt-1 text-muted-foreground">{item.institution}</p>
                <p className="mt-3 text-sm italic text-muted-foreground">{item.note}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
