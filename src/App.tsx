import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Bot,
  Check,
  Gauge,
  MapPin,
  Menu,
  Moon,
  Network,
  Quote,
  Sparkles,
  Sun,
  Workflow,
  Zap,
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useTheme } from 'next-themes'

const navLinks = [
  { href: '#solutions', label: 'Lahendused' },
  { href: '#how-it-works', label: 'Kuidas see töötab' },
  { href: '#testimonials', label: 'Arvustused' },
  { href: '#faq', label: 'KKK' },
  { href: '#contact', label: 'Kontakt' },
]

const solutions = [
  {
    icon: Bot,
    title: 'Nutikad agendid',
    description:
      'Tehisintellekti agendid, mis täidavad ülesandeid algusest lõpuni, integreerituna teie süsteemide ja protsessidega.',
  },
  {
    icon: Workflow,
    title: 'B2B protsesside automatiseerimine',
    description:
      'Korraldame operatiivseid ja ärilisi töövooge, kõrvaldades käsitsitöö ja kitsaskohad.',
  },
  {
    icon: Network,
    title: 'Skaleeritav tehisintellekt',
    description:
      'Arhitektuur, mis on valmis kasvama koos teie tegevusega, kaotamata jõudlust ega kontrolli.',
  },
  {
    icon: Gauge,
    title: 'Suurem tootlikkus',
    description:
      'Teie meeskond keskendub olulisele, samal ajal kui tehisintellekt hoolitseb korduvate ülesannete eest mõõdetavate tulemustega.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Diagnoosimine',
    description:
      'Kaardistame teie protsessid ja tuvastame, kus tehisintellekti automatiseerimine annab kõige suurema mõju.',
  },
  {
    number: '02',
    title: 'Ehitamine',
    description:
      'Arendame kohandatud nutikaid süsteeme, mis on integreeritud tööriistadega, mida juba kasutate.',
  },
  {
    number: '03',
    title: 'Skaleerimine',
    description:
      'Jälgime, optimeerime ja skaleerime lahendust vastavalt teie tegevuse kasvule.',
  },
]

const benefits = [
  'Tegevuskulude vähendamine',
  'Integratsioon teie praeguste süsteemidega',
  'Mõõdetavad ja pidevad tulemused',
  'Andmeturve ja -haldus',
]

const testimonials = [
  {
    name: 'Marek Tamm',
    role: 'Tegevjuht, LogiFlow',
    initials: 'MT',
    quote:
      'Interc3pt automatiseeris meie tellimuste töötlemise ja vähendas käsitsitööd 70%. Tulemused olid näha juba esimese kuuga.',
  },
  {
    name: 'Liis Saar',
    role: 'Operatsioonijuht, NordData',
    initials: 'LS',
    quote:
      'Nutikad agendid integreerusid sujuvalt meie süsteemidega. Meeskond saab nüüd keskenduda strateegiale, mitte rutiinile.',
  },
  {
    name: 'Andres Kask',
    role: 'Asutaja, ScaleHub',
    initials: 'AK',
    quote:
      'Skaleeritav lahendus, mis kasvab koos meiega. Parim investeering tootlikkusesse, mille oleme teinud.',
  },
]

const faqs = [
  {
    question: 'Milliseid protsesse saab automatiseerida?',
    answer:
      'Automatiseerime korduvaid operatiivseid ja ärilisi töövooge — alates tellimuste töötlemisest ja andmesisestusest kuni klienditoe ja aruandluseni.',
  },
  {
    question: 'Kui kaua võtab juurutamine aega?',
    answer:
      'See sõltub protsessi keerukusest. Pärast diagnoosi anname selge ajakava — enamik lahendusi käivitub mõne nädalaga.',
  },
  {
    question: 'Kas lahendus integreerub meie praeguste süsteemidega?',
    answer:
      'Jah. Ehitame integratsioonid tööriistadega, mida juba kasutate, ilma et peaksite oma tehnoloogiapaketti välja vahetama.',
  },
  {
    question: 'Kuidas tagate andmete turvalisuse?',
    answer:
      'Järgime andmeturbe ja -halduse parimaid tavasid, tagades, et teie andmed on kaitstud kogu automatiseerimisprotsessi vältel.',
  },
]

function App() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === 'dark'
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark')

  return (
    <TooltipProvider delayDuration={200}>
      <div className="min-h-svh bg-background text-foreground">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
            <a href="#top" className="flex items-center gap-2.5">
              <img src="/logo.png" alt="Interc3pt" className="h-9 w-9" />
              <span className="text-lg font-semibold tracking-tight">
                Interc3pt
              </span>
            </a>

            <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    aria-label="Vaheta teemat"
                  >
                    {mounted && isDark ? (
                      <Sun className="size-5" />
                    ) : (
                      <Moon className="size-5" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {mounted && isDark ? 'Hele režiim' : 'Tume režiim'}
                </TooltipContent>
              </Tooltip>

              <Button asChild className="hidden sm:inline-flex">
                <a href="#contact">Räägi spetsialistiga</a>
              </Button>

              {/* Mobile menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    aria-label="Ava menüü"
                  >
                    <Menu className="size-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-72">
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-2.5">
                      <img src="/logo.png" alt="" className="h-7 w-7" />
                      Interc3pt
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="mt-2 flex flex-col gap-1 px-4">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <a
                          href={link.href}
                          className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          {link.label}
                        </a>
                      </SheetClose>
                    ))}
                    <SheetClose asChild>
                      <Button asChild className="mt-4">
                        <a href="#contact">Räägi spetsialistiga</a>
                      </Button>
                    </SheetClose>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>

        <main id="top">
          {/* Hero */}
          <section className="relative overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10"
            >
              <div className="absolute left-1/2 top-[-10%] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-secondary/25 blur-[120px]" />
              <div className="absolute right-[5%] top-[20%] h-[320px] w-[320px] rounded-full bg-accent/20 blur-[120px]" />
            </div>

            <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
              {/* Text */}
              <div className="text-center md:text-left">
                <Badge
                  variant="secondary"
                  className="mb-6 gap-1.5 rounded-full px-3 py-1"
                >
                  <Sparkles className="size-3.5" />
                  Tehisintellektil põhinev automatiseerimine
                </Badge>

                <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
                  Nutikad süsteemid, mis automatiseerivad teie{' '}
                  <span className="text-primary">B2B protsesse</span>
                </h1>

                <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground md:mx-0">
                  Loome tehisintellektil põhinevat automatiseerimistehnoloogiat,
                  et suurendada teie tegevuse tootlikkust skaleeritava
                  tehisintellektiga.
                </p>

                <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row md:items-start md:justify-start">
                  <Button asChild size="lg" className="w-full gap-2 sm:w-auto">
                    <a href="#contact">
                      Alusta kohe
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    <a href="#solutions">Vaata lahendusi</a>
                  </Button>
                </div>
              </div>

              {/* Logo */}
              <div className="relative flex items-center justify-center">
                <div
                  aria-hidden
                  className="pointer-events-none absolute size-72 rounded-full bg-secondary/20 blur-[100px] md:size-96"
                />

                <div className="relative aspect-square w-64 p-4 sm:w-80 md:w-full md:max-w-md lg:max-w-lg">
                  <img
                    src="/logo.png"
                    alt="Interc3pt"
                    className="relative z-0 size-full object-contain drop-shadow-2xl"
                  />

                  {/* Lightning tracing the border */}
                  <svg
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-10 size-full"
                    viewBox="0 0 100 100"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="96"
                      height="96"
                      rx="14"
                      pathLength="100"
                      className="stroke-accent/15"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="2"
                      y="2"
                      width="96"
                      height="96"
                      rx="14"
                      pathLength="100"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="lightning-bolt-2 stroke-secondary"
                    />
                    <rect
                      x="2"
                      y="2"
                      width="96"
                      height="96"
                      rx="14"
                      pathLength="100"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="lightning-bolt stroke-accent"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </section>

          {/* Solutions */}
          <section id="solutions" className="mx-auto max-w-6xl px-6 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Mida me teeme
              </h2>
              <p className="mt-4 text-muted-foreground">
                Tehisintellekt rakendatuna seal, kus teie tegevus seda kõige
                rohkem vajab.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {solutions.map(({ icon: Icon, title, description }) => (
                <Card
                  key={title}
                  className="border-border/60 transition-colors hover:border-primary/40"
                >
                  <CardHeader>
                    <div className="mb-2 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </div>
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-pretty">
                      {description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* How it works */}
          <section
            id="how-it-works"
            className="border-y border-border/60 bg-card/40"
          >
            <div className="mx-auto max-w-6xl px-6 py-20">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Kuidas see töötab
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Diagnoosist skaleerimiseni, teiega igal sammul.
                </p>
              </div>

              <div className="mt-14 grid gap-8 md:grid-cols-3">
                {steps.map((step) => (
                  <div key={step.number} className="relative">
                    <span className="text-5xl font-semibold text-primary/20">
                      {step.number}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Tootlikkus, mis skaleerub koos teiega
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Loome automatiseeringuid, mis kasvavad koos teie ettevõttega,
                  pakkudes tõelist ja jätkusuutlikku kasu aja jooksul.
                </p>

                <ul className="mt-8 space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                        <Check className="size-4" />
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Card className="relative overflow-hidden border-border/60">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-accent/20 blur-3xl"
                />
                <CardContent className="flex flex-col items-center gap-6 py-12 text-center">
                  <div className="flex size-20 items-center justify-center rounded-2xl bg-primary/10">
                    <Zap className="size-10 text-primary" />
                  </div>
                  <p className="max-w-sm text-pretty text-lg font-medium">
                    Nutikas automatiseerimine, mis muudab käsitsi tehtavad
                    protsessid autonoomseteks töövoogudeks.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Testimonials */}
          <section
            id="testimonials"
            className="border-y border-border/60 bg-card/40"
          >
            <div className="mx-auto max-w-6xl px-6 py-20">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Mida kliendid ütlevad
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Ettevõtted, kes on oma tegevust meiega automatiseerinud.
                </p>
              </div>

              <div className="mt-14 grid gap-6 md:grid-cols-3">
                {testimonials.map((t) => (
                  <Card key={t.name} className="border-border/60">
                    <CardContent className="flex h-full flex-col gap-6 pt-6">
                      <Quote className="size-7 text-primary/40" />
                      <p className="flex-1 text-pretty">{t.quote}</p>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {t.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <p className="text-sm font-semibold">{t.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {t.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Korduma kippuvad küsimused
              </h2>
              <p className="mt-4 text-muted-foreground">
                Kõik, mida peate teadma automatiseerimise alustamiseks.
              </p>
            </div>

            <Accordion type="single" collapsible className="mt-10 w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.question} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* CTA */}
          <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
            <Card className="relative overflow-hidden border-primary/20 bg-primary text-primary-foreground">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-0 opacity-30"
              >
                <div className="absolute left-[10%] top-[-30%] size-72 rounded-full bg-accent/30 blur-3xl" />
                <div className="absolute right-[5%] bottom-[-40%] size-80 rounded-full bg-secondary/40 blur-3xl" />
              </div>
              <CardContent className="relative z-10 flex flex-col items-center gap-6 px-6 py-16 text-center">
                <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                  Valmis automatiseerima oma tegevust tehisintellektiga?
                </h2>
                <p className="max-w-xl text-primary-foreground/80">
                  Rääkige meie spetsialistidega ja avastage, kus tehisintellekt
                  saab teie äri kiirendada.
                </p>
                <Button asChild size="lg" variant="secondary" className="gap-2">
                  <a href="mailto:contact@interc3pt.ee">
                    Räägi spetsialistiga
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <a href="#top" className="flex items-center gap-2.5">
                <img src="/logo.png" alt="Interc3pt" className="h-7 w-7" />
                <span className="font-semibold tracking-tight">Interc3pt</span>
              </a>
              <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground sm:items-end">
                <p className="text-center sm:text-right">
                  Tehisintellektil põhinev automatiseerimistehnoloogia.
                </p>
                <p className="flex items-center gap-1.5">
                  <MapPin className="size-4" />
                  Tallinn, Eesti
                </p>
              </div>
            </div>
            <Separator className="my-6" />
            <p className="text-center text-xs text-muted-foreground">
              © 2026 Interc3pt. Kõik õigused kaitstud.
            </p>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  )
}

export default App
