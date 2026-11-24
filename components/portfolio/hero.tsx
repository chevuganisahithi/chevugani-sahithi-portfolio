import { ArrowRight, Brain, Code2, Code2 as Github, Sparkles, UserRound as Linkedin } from 'lucide-react'
import { profile } from '@/lib/profile'

const focusAreas = [
  { icon: Code2, title: 'Software Engineering', text: 'Data structures, OOP and clean code' },
  { icon: Brain, title: 'Applied AI & ML', text: 'Classification, preprocessing, evaluation' },
  { icon: Sparkles, title: 'Web & UI/UX', text: 'Responsive, user-friendly interfaces' },
]

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] size-[520px] rounded-full bg-accent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.25fr_1fr]">
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground">
            <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
            {profile.headline}
          </p>
          <h1 id="hero-title" className="text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
            Building the Future <span className="text-primary">with AI</span>
          </h1>
          <p className="mt-4 font-heading text-base font-medium tracking-tight text-foreground/70 sm:text-lg">
            Explore my work, projects and journey in technology.
          </p>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {"Hi, I'm "}
            <span className="font-semibold text-foreground">{profile.name}</span>
            {
              ', an Integrated M.Tech Computer Science and Engineering student specializing in Artificial Intelligence at VIT Bhopal University. I build practical, user-friendly applications with software engineering and applied AI.'
            }
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-primary/30"
            >
              View My Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm font-medium">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="size-4" aria-hidden="true" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="size-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-10 delay-200 duration-1000 fill-mode-both">
          <div className="animate-float-slow rounded-3xl border border-border bg-card p-6 shadow-2xl shadow-primary/10">
            <div className="mb-5 flex items-center gap-1.5" aria-hidden="true">
              <span className="size-3 rounded-full bg-border" />
              <span className="size-3 rounded-full bg-border" />
              <span className="size-3 rounded-full bg-primary/60" />
            </div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Focus Areas
            </p>
            <ul className="flex flex-col gap-3">
              {focusAreas.map(({ icon: Icon, title, text }) => (
                <li
                  key={title}
                  className="flex items-center gap-4 rounded-2xl bg-muted p-4 transition-colors hover:bg-accent"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-background text-primary shadow-sm">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-heading font-semibold">{title}</p>
                    <p className="text-sm text-muted-foreground">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
