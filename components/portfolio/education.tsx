import { BookOpen, GraduationCap, School } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const education = [
  {
    icon: GraduationCap,
    degree: 'Integrated M.Tech, Computer Science and Engineering',
    focus: 'Specialization in Artificial Intelligence',
    institution: 'VIT Bhopal University, Madhya Pradesh',
    period: '2024 – 2029 (Expected)',
    score: 'CGPA: 8+',
  },
  {
    icon: BookOpen,
    degree: 'Intermediate (MPC)',
    focus: 'Mathematics, Physics, Chemistry',
    institution: 'Impulse Junior College, Hyderabad',
    period: '2022 – 2024',
    score: '93.8%',
  },
  {
    icon: School,
    degree: 'SSC',
    focus: 'Secondary School Certificate',
    institution: 'Sri Saraswathi English Medium High School',
    period: '2022',
    score: '87.5%',
  },
]

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="bg-muted/60 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading id="education-title" eyebrow="Education" title="Academic background" />

        <ol className="relative flex flex-col gap-8 border-l-2 border-accent pl-8 md:pl-10">
          {education.map(({ icon: Icon, ...item }, i) => (
            <Reveal as="li" key={item.degree} delay={i * 120} className="relative">
              <span className="absolute -left-[3.05rem] top-1 flex size-10 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground md:-left-[3.55rem]">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-primary">{item.period}</p>
                  <h3 className="mt-1 text-xl font-semibold">{item.degree}</h3>
                  <p className="mt-1 font-medium text-foreground/80">{item.focus}</p>
                  <p className="mt-1 text-muted-foreground">{item.institution}</p>
                </div>
                <span className="self-start rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
                  {item.score}
                </span>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
