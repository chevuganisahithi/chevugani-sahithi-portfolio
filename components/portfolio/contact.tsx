import { ArrowUpRight, Code2 as Github, Mail, UserRound as Linkedin } from 'lucide-react'
import { profile } from '@/lib/profile'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const contactItems = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, external: false },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/chevuganisahithi',
    href: profile.linkedin,
    external: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/chevuganisahithi',
    href: profile.github,
    external: true,
  },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact Me"
          title="Let's build something together"
          description="I'm open to internships, collaborations and conversations about software engineering and applied AI. Feel free to reach out."
        />

        <Reveal className="relative overflow-hidden rounded-3xl bg-foreground p-6 text-background md:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/40 blur-3xl"
          />
          <ul className="relative grid gap-4 md:grid-cols-3">
            {contactItems.map(({ icon: Icon, label, value, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-background/10 bg-background/5 p-5 transition-colors hover:border-primary/60 hover:bg-background/10"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-background/60">{label}</p>
                    <p className="break-all font-medium">{value}</p>
                  </div>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-background/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-background"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
          <div className="relative mt-8 flex flex-wrap gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
            >
              <Github className="size-4" aria-hidden="true" />
              View GitHub Profile
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-background/20 px-6 py-3 text-sm font-semibold text-background transition-colors hover:border-background hover:bg-background hover:text-foreground"
            >
              <Linkedin className="size-4" aria-hidden="true" />
              LinkedIn Profile
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
