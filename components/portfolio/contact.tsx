import { Code2 as Github, Mail, MapPin, UserRound as Linkedin } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const contactItems = [
  { icon: Mail, label: 'Email', value: '[your.email@example.com]' },
  { icon: Linkedin, label: 'LinkedIn', value: '[LinkedIn profile URL]' },
  { icon: Github, label: 'GitHub', value: '[GitHub profile URL]' },
  { icon: MapPin, label: 'Location', value: '[City, Country]' },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-muted/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact Me"
          title="Let's build something together"
          description="I'm open to internships, collaborations and conversations about AI and machine learning. Feel free to reach out."
        />

        <Reveal className="relative overflow-hidden rounded-3xl bg-foreground p-8 text-background md:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/40 blur-3xl"
          />
          <ul className="relative grid gap-4 sm:grid-cols-2">
            {contactItems.map(({ icon: Icon, label, value }) => (
              <li
                key={label}
                className="flex items-center gap-4 rounded-2xl border border-background/10 bg-background/5 p-5 transition-colors hover:bg-background/10"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-background/60">{label}</p>
                  <p className="truncate font-medium">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
