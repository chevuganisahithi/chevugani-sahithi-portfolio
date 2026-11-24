import { Brain, Code2, Cpu, FileCode2, Globe, Palette, Paintbrush, Sparkles, Coffee } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const skillGroups = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', icon: FileCode2 },
      { name: 'C++', icon: Cpu },
      { name: 'Java', icon: Coffee },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML', icon: Globe },
      { name: 'CSS', icon: Paintbrush },
      { name: 'JavaScript', icon: Code2 },
    ],
  },
  {
    title: 'AI & Design',
    skills: [
      { name: 'Artificial Intelligence', icon: Sparkles },
      { name: 'Machine Learning', icon: Brain },
      { name: 'UI/UX Design', icon: Palette },
    ],
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

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 120}
              className="rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <h3 className="mb-5 text-lg font-semibold">{group.title}</h3>
              <ul className="flex flex-col gap-3">
                {group.skills.map(({ name, icon: Icon }) => (
                  <li
                    key={name}
                    className="group flex items-center gap-3 rounded-xl bg-muted px-4 py-3 transition-colors hover:bg-accent"
                  >
                    <Icon
                      className="size-5 text-muted-foreground transition-colors group-hover:text-primary"
                      aria-hidden="true"
                    />
                    <span className="font-medium">{name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
