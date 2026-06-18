import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";

const phoneDisplay = "410-542-2255";
const phoneHref = "tel:4105422255";
const email = "hello@abacruit.com";

const roles = [
  ["BCBAs", "Our specialty and most requested role."],
  ["Clinical Directors", "Leadership candidates for growing ABA organizations."],
  ["Regional Directors", "Multi-site clinical leadership and growth support."],
  ["RBTs & BTs", "Direct service team members for client care."],
  ["ABA Supervisors", "Experienced clinical support for your team."],
  ["Operations Staff", "Schedulers, intake coordinators, and admin support."],
];

const process = [
  ["01", "Tell us about your opening", "Share the role, location, pay range, setting, schedule, and must-have requirements."],
  ["02", "We identify qualified candidates", "We focus on the ABA talent pool and prioritize candidates who match your real hiring needs."],
  ["03", "We begin direct outreach", "We proactively reach out instead of waiting for job board applicants to appear."],
  ["04", "You meet interested candidates", "Your team speaks with candidates who are qualified, interested, and ready for the next step."],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-navy">
      <Header />
      <Hero />
      <TrustBar />
      <TwoPaths />
      <Roles />
      <Why />
      <How />
      <BCBASection />
      <CTA />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="leading-none">
          <div className="text-2xl font-black tracking-tight">
            <span className="text-blue">ABA</span> Cruit
          </div>
          <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Staffing & Recruiting
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
          <a href="#companies" className="hover:text-blue">Companies</a>
          <a href="#candidates" className="hover:text-blue">Candidates</a>
          <a href="#roles" className="hover:text-blue">Roles</a>
          <a href="#contact" className="hover:text-blue">Contact</a>
        </nav>

        <a
          href={phoneHref}
          className="hidden rounded-full bg-navy px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue sm:inline-flex"
        >
          {phoneDisplay}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-warm to-white">
      <div className="absolute right-[-120px] top-[-120px] h-80 w-80 rounded-full bg-blue/10 blur-3xl" />
      <div className="absolute bottom-[-160px] left-[-120px] h-96 w-96 rounded-full bg-cream blur-2xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue/15 bg-white px-4 py-2 text-sm font-bold text-blue shadow-sm">
            <Sparkles className="h-4 w-4" />
            ABA recruiting specialists with a BCBA focus
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.03] tracking-tight md:text-7xl">
            Build your ABA team faster.
          </h1>

          <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-600">
            From BCBAs and RBTs to clinical leadership and support staff, ABA Cruit helps ABA organizations connect with qualified candidates quickly and efficiently.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#companies" className="inline-flex items-center justify-center rounded-full bg-blue px-7 py-4 text-base font-bold text-white shadow-soft transition hover:bg-navy">
              I Need to Hire ABA Staff <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#candidates" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-base font-bold text-navy transition hover:border-blue hover:text-blue">
              I’m Looking for an ABA Role
            </a>
          </div>

          <div className="mt-9 flex flex-col gap-3 text-sm font-semibold text-slate-600 sm:flex-row sm:items-center sm:gap-6">
            <a href={phoneHref} className="inline-flex items-center gap-2 hover:text-blue">
              <Phone className="h-4 w-4 text-blue" /> {phoneDisplay}
            </a>
            <a href={`mailto:${email}`} className="inline-flex items-center gap-2 hover:text-blue">
              <Mail className="h-4 w-4 text-blue" /> {email}
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft md:p-8">
          <div className="rounded-[1.5rem] bg-soft p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Hiring Focus</p>
                <h2 className="mt-2 text-3xl font-black">ABA Talent Pipeline</h2>
              </div>
              <div className="rounded-2xl bg-white p-3 text-blue shadow-sm">
                <UsersRound className="h-8 w-8" />
              </div>
            </div>

            <div className="mt-7 space-y-4">
              <Pipeline icon={<BadgeCheck />} title="Certified BCBAs" text="Our strongest focus and the hardest role for many ABA companies to fill." />
              <Pipeline icon={<BriefcaseBusiness />} title="Clinical & Operations Roles" text="Support for leadership, supervisors, intake, scheduling, and admin hiring." />
              <Pipeline icon={<Clock3 />} title="Fast Turnaround" text="Our target is qualified conversations in about one week or less whenever possible." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-3 px-5 py-5 text-sm font-bold text-slate-600 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {["ABA Industry Focused", "BCBA Recruiting Specialists", "Companies & Candidates", "Fast Turnaround"].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-blue" /> {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function TwoPaths() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <div id="companies" className="rounded-[2rem] border border-slate-200 bg-soft p-8 shadow-sm">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue shadow-sm">
            <BriefcaseBusiness className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-black">For ABA Companies</h2>
          <p className="mt-4 leading-8 text-slate-600">
            Need BCBAs, RBTs, clinical leaders, supervisors, or office support? Tell us what roles you need filled and we’ll help connect you with qualified candidates.
          </p>
          <a
            href={`mailto:${email}?subject=ABA Company Hiring Request`}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-blue px-6 py-4 font-bold text-white transition hover:bg-navy"
          >
            Submit a Hiring Request <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        <div id="candidates" className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-warm text-blue">
            <UserRoundCheck className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-black">For ABA Professionals</h2>
          <p className="mt-4 leading-8 text-slate-600">
            Certified BCBA, RBT, BT, supervisor, or ABA professional? Send us your information and we’ll help match you with ABA companies that may be a strong fit.
          </p>
          <a
            href={`mailto:${email}?subject=ABA Candidate Application`}
            className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 font-bold text-navy transition hover:border-blue hover:text-blue"
          >
            Apply to Be Matched <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Roles() {
  return (
    <section id="roles" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionIntro eyebrow="What we recruit for" title="Positions we help fill" text="ABA companies need more than one role to operate well. We help with the full hiring picture, while keeping BCBAs as our strongest specialty." />
      <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map(([title, text]) => (
          <div key={title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-warm text-blue">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-black">{title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="bg-soft py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionIntro eyebrow="Why ABA companies choose us" title="Recruiting designed specifically for ABA" text="Unlike general recruiting firms, we understand ABA organizations, certification requirements, and the pressure of filling clinical roles quickly." />
        <div className="mt-11 grid gap-5 lg:grid-cols-3">
          <Feature icon={<Search />} title="Focused search" text="We identify candidates based on the actual role, geography, requirements, and hiring urgency." />
          <Feature icon={<Phone />} title="Proactive outreach" text="We do not just wait for applicants. We reach out directly and professionally." />
          <Feature icon={<CalendarCheck />} title="Simple next steps" text="The goal is to move qualified candidates toward interviews without overcomplicating the process." />
        </div>
      </div>
    </section>
  );
}

function How() {
  return (
    <section id="how" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <SectionIntro eyebrow="How it works" title="Simple, direct, and built for speed" text="Tell us what you need. We begin targeted outreach and help you connect with qualified ABA professionals." />
        <div className="grid gap-5">
          {process.map(([num, title, text]) => (
            <div key={num} className="grid gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-[80px_1fr]">
              <div className="text-3xl font-black text-blue/25">{num}</div>
              <div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BCBASection() {
  return (
    <section className="bg-warm py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-soft md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-blue">BCBA specialty</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Need a BCBA quickly?</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                BCBAs remain one of the most difficult positions for many ABA organizations to fill. Because of this, we have built our recruiting process around identifying and engaging certified BCBAs quickly.
              </p>
              <p className="mt-5 text-xl font-black leading-8 text-navy">
                Our goal: qualified BCBA conversations within about one week or less whenever possible.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-navy p-7 text-white">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-blue" />
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-300">Targeted markets</p>
              </div>
              <p className="mt-5 text-2xl font-black leading-9">
                We can focus outreach by state, city, service area, certification status, and role requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="rounded-[2rem] bg-blue p-8 text-white shadow-soft md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_.75fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">Let’s talk about your hiring needs.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50">
              Whether you need one BCBA, need support building an ABA team, or are an ABA professional looking for the right match, ABA Cruit can help.
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-white p-6 text-navy">
            <a href={phoneHref} className="mb-4 flex items-center gap-3 rounded-2xl bg-soft p-4 font-black hover:text-blue">
              <Phone className="h-5 w-5 text-blue" /> {phoneDisplay}
            </a>
            <a href={`mailto:${email}`} className="flex items-center gap-3 rounded-2xl bg-soft p-4 font-black hover:text-blue">
              <Mail className="h-5 w-5 text-blue" /> {email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <div className="text-lg font-black text-navy"><span className="text-blue">ABA</span> Cruit</div>
          <div className="mt-1">Staffing & Recruiting for ABA Organizations</div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-5">
          <a href={phoneHref} className="hover:text-blue">{phoneDisplay}</a>
          <a href={`mailto:${email}`} className="hover:text-blue">{email}</a>
        </div>
      </div>
    </footer>
  );
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-black uppercase tracking-[0.22em] text-blue">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>
    </div>
  );
}

function Pipeline({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex gap-4 rounded-[1.25rem] bg-white p-4 shadow-sm">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-warm text-blue">
        {icon}
      </div>
      <div>
        <h3 className="font-black">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-[1.5rem] bg-white p-7 shadow-sm">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-warm text-blue">
        {icon}
      </div>
      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </div>
  );
}
