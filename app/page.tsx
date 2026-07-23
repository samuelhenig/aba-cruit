import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  LockKeyhole,
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
const instagramHref = "https://www.instagram.com/abacruit/";

const roles = [
  ["BCBAs", "Our specialty and most requested role."],
  ["Clinical Directors", "Leadership candidates for growing ABA organizations."],
  ["Regional Directors", "Multi-site clinical leadership and growth support."],
  ["RBTs & BTs", "Direct service team members for client care."],
  ["ABA Supervisors", "Experienced clinical support for your team."],
  ["Operations Staff", "Schedulers, intake coordinators, and admin support."],
];

const professionalBenefits = [
  "Confidential career search",
  "Better-fit opportunities",
  "Personalized career guidance",
  "Salary and offer insights",
  "Nationwide opportunities",
  "No cost to candidates",
];

const employerBenefits = [
  "BCBAs, RBTs, and clinical leaders",
  "Proactive candidate outreach",
  "Qualified and interested candidates",
  "A focused ABA recruiting partner",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-navy">
      <Header />
      <Hero />
      <TrustBar />
      <FeaturedOpportunity />
      <ReferralCTA />
      <TalentNetwork />
      <TwoPaths />
      <Roles />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="leading-none">
          <div className="text-2xl font-black tracking-tight">
            <span className="text-blue">ABA</span> Cruit
          </div>
          <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.17em] text-slate-500">
            Staffing & Recruiting
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex">
          <a href="/opportunities" className="hover:text-blue">Opportunities</a>
          <a href="#employers" className="hover:text-blue">For Employers</a>
          <a href="/refer" className="hover:text-blue">Refer & Earn</a>
          <a href="#contact" className="hover:text-blue">Contact</a>
        </nav>

        <a
          href={phoneHref}
          className="hidden items-center rounded-full bg-navy px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue sm:inline-flex"
        >
          <Phone className="mr-2 h-4 w-4" />
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

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue/15 bg-white px-4 py-2 text-sm font-bold text-blue shadow-sm">
            <Sparkles className="h-4 w-4" />
            The recruiting company exclusively for ABA
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.03] tracking-tight md:text-7xl">
            The Recruiting Company Exclusively for ABA.
          </h1>

          <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-600">
            We connect ABA organizations with exceptional BCBAs, RBTs, and clinical leaders—and help ABA professionals find roles where they can grow and thrive.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/opportunities"
              className="inline-flex items-center justify-center rounded-full bg-blue px-7 py-4 text-base font-bold text-white shadow-soft transition hover:bg-navy"
            >
              Browse ABA Opportunities <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#employers"
              className="inline-flex items-center justify-center rounded-full border border-blue bg-white px-7 py-4 text-base font-bold text-navy transition hover:bg-soft"
            >
              Hire ABA Professionals
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
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Why ABA Cruit</p>
                <h2 className="mt-2 text-3xl font-black">A focused ABA recruiting partner</h2>
              </div>
              <div className="rounded-2xl bg-white p-3 text-blue shadow-sm">
                <UsersRound className="h-8 w-8" />
              </div>
            </div>

            <div className="mt-7 space-y-4">
              <Pipeline icon={<BadgeCheck />} title="ABA Recruiting Specialists" text="We focus on ABA roles and understand the hiring needs of providers and professionals." />
              <Pipeline icon={<UserRoundCheck />} title="BCBA Focused" text="BCBAs remain our strongest specialty and one of the most requested roles." />
              <Pipeline icon={<Search />} title="Proactive Outreach" text="We reach out directly instead of relying only on job-board applicants." />
              <Pipeline icon={<ShieldCheck />} title="Quality Matches" text="We aim for fit, interest, and long-term alignment—not just resumes." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    ["Specialized ABA Recruiting", ShieldCheck],
    ["Nationwide Talent Network", UsersRound],
    ["Personalized Service", UserRoundCheck],
    ["Confidential & Professional", LockKeyhole],
  ] as const;

  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {items.map(([label, Icon]) => (
          <div key={label} className="flex items-center gap-3">
            <Icon className="h-6 w-6 shrink-0 text-blue" />
            <span className="text-sm font-black text-slate-700">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedOpportunity() {
  return (
    <section id="opportunities" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue">Featured opportunity</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Current ABA Opportunities</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Explore selected opportunities or join the ABA Cruit Talent Network to hear about roles that better match your goals.
          </p>
        </div>
        <a href="#talent-network" className="inline-flex items-center font-black text-blue hover:text-navy">
          Not the right fit? Join the network <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
        <article className="overflow-hidden rounded-[2rem] border border-blue/30 bg-white shadow-soft">
          <div className="grid lg:grid-cols-[.82fr_1.18fr]">
            <div className="bg-navy p-8 text-white md:p-10">
              <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em]">Now Recruiting</div>
              <h3 className="mt-6 text-4xl font-black">BCBA — Maryland</h3>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                A flexible opportunity designed to reduce unnecessary workload while preserving strong earning potential.
              </p>
              <div className="mt-7 flex items-center gap-2 text-sm font-bold text-slate-200">
                <MapPin className="h-5 w-5 text-blue" /> Maryland
              </div>
            </div>

            <div className="p-8 md:p-10">
              <p className="text-2xl font-black text-blue">$90–$120 per hour</p>
              <p className="mt-2 font-bold text-slate-700">25–28 billable hours per week</p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {["Majority remote", "Approximately 25% in person", "Flexible schedule", "Low caseload", "Minimal non-billable work", "Strong administrative support", "Travel reimbursement", "Consistent caseload / no waitlist"].map((item) => (
                  <div key={item} className="flex items-start gap-2 rounded-2xl bg-soft p-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm leading-6 text-slate-500">Active BCBA certification and Maryland LBA eligibility required.</p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={`mailto:${email}?subject=Maryland BCBA Opportunity`} className="inline-flex items-center justify-center rounded-full bg-blue px-6 py-4 font-bold text-white transition hover:bg-navy">
                  Ask About This Opportunity <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#talent-network" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 font-bold text-navy transition hover:border-blue hover:text-blue">
                  Join for Future Roles
                </a>
              </div>
            </div>
          </div>
        </article>

        <aside className="rounded-[2rem] border border-slate-200 bg-soft p-8 shadow-sm md:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue shadow-sm">
            <Clock3 className="h-6 w-6" />
          </div>
          <h3 className="mt-6 text-3xl font-black">More opportunities are coming.</h3>
          <p className="mt-4 leading-8 text-slate-600">
            We are building a focused ABA opportunity hub. Join the network so we can learn what you want and contact you when a relevant role becomes available.
          </p>
          <a href="#talent-network" className="mt-7 inline-flex items-center font-black text-blue hover:text-navy">
            Tell us what you’re looking for <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </aside>
      </div>
    </section>
  );
}

function ReferralCTA() {
  return (
    <section className="bg-soft py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft lg:grid-cols-[1.1fr_.9fr]">
          <div className="p-8 md:p-12">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-blue">
              ABA Cruit Referral Program
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Know a Great BCBA?
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Refer an ABA professional to ABA Cruit and earn up to $500 when
              they are successfully placed and complete 90 days of employment.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "$500 for a qualifying BCBA referral",
                "Simple online referral form",
                "We handle the recruiting process",
                "Paid after eligibility is confirmed",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm font-bold text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="/refer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-blue px-7 py-4 font-bold text-white transition hover:bg-navy"
            >
              Refer Someone
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="flex items-center justify-center bg-navy p-10 text-center text-white md:p-12">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue">
                Earn up to
              </p>

              <p className="mt-4 text-7xl font-black">$500</p>

              <p className="mt-4 text-xl font-black">
                For a qualifying BCBA referral
              </p>

              <p className="mt-4 max-w-md leading-7 text-slate-200">
                Introduce the right person once. ABA Cruit handles the rest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TalentNetwork() {
  return (
    <section id="talent-network" className="bg-soft py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft lg:grid-cols-[.8fr_1.2fr] lg:p-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-blue">Not seeing the right opportunity?</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Join the ABA Cruit Talent Network</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              You do not need to be actively job hunting. Tell us what matters to you once, and we’ll reach out when a relevant opportunity may be worth considering.
            </p>

            <div className="mt-7 space-y-3">
              {professionalBenefits.slice(0, 4).map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue" />
                  {item}
                </div>
              ))}
            </div>

            <a href={instagramHref} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 font-black text-blue hover:text-navy">
              <span className="text-sm font-black">IG</span>
              Follow @abacruit on Instagram
            </a>
          </div>

          <form action={`mailto:${email}`} method="post" encType="text/plain" className="grid gap-4 sm:grid-cols-2">
            <Input name="Full name" placeholder="Full name" />
            <Input name="Email" type="email" placeholder="Email address" />
            <Input name="Phone" type="tel" placeholder="Phone number" />
            <Select name="Certification or role">
              <option value="">Certification or role</option>
              <option>BCBA</option>
              <option>BCaBA</option>
              <option>RBT</option>
              <option>BT</option>
              <option>Clinical Director</option>
              <option>ABA Supervisor</option>
              <option>Operations / Administrative</option>
              <option>Other ABA Professional</option>
            </Select>
            <Input name="Current state" placeholder="Current state" />
            <Input name="Preferred location" placeholder="Preferred state or location" />

            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-blue px-7 py-4 font-bold text-white transition hover:bg-navy sm:col-span-2">
              Join the Talent Network <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <p className="text-center text-xs leading-5 text-slate-500 sm:col-span-2">
              Your information is kept confidential and is not shared with employers without your permission.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function TwoPaths() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-warm p-8 shadow-sm">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue shadow-sm">
            <UserRoundCheck className="h-6 w-6" />
          </div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue">ABA Professionals</p>
          <h2 className="mt-2 text-3xl font-black">Find Your Next Opportunity</h2>
          <div className="mt-5 space-y-3">
            {professionalBenefits.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm font-bold text-slate-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                {item}
              </div>
            ))}
          </div>
          <a href="/opportunities" className="mt-7 inline-flex items-center justify-center rounded-full border border-blue bg-white px-6 py-4 font-bold text-blue transition hover:bg-blue hover:text-white">
            Browse Opportunities <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        <div id="employers" className="rounded-[2rem] border border-slate-200 bg-soft p-8 shadow-sm">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue shadow-sm">
            <BriefcaseBusiness className="h-6 w-6" />
          </div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue">ABA Employers</p>
          <h2 className="mt-2 text-3xl font-black">Need to Hire?</h2>
          <div className="mt-5 space-y-3">
            {employerBenefits.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm font-bold text-slate-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                {item}
              </div>
            ))}
          </div>
          <a href={`mailto:${email}?subject=ABA Company Hiring Request`} className="mt-7 inline-flex items-center justify-center rounded-full bg-blue px-6 py-4 font-bold text-white transition hover:bg-navy">
            Hire ABA Staff <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Roles() {
  return (
    <section id="roles" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-blue">Who we help fill</p>
        <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Roles We Recruit For</h2>
      </div>

      <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map(([title, description]) => (
          <div key={title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-warm text-blue">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-black">{title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1fr_auto_auto] md:items-center lg:px-8">
        <div>
          <div className="text-2xl font-black"><span className="text-blue">ABA</span> Cruit</div>
          <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">Staffing & Recruiting</div>
        </div>

        <div className="flex flex-col gap-3 text-sm font-bold text-slate-200 sm:flex-row sm:gap-6">
          <a href={phoneHref} className="inline-flex items-center gap-2 hover:text-white">
            <Phone className="h-4 w-4 text-blue" /> {phoneDisplay}
          </a>
          <a href={`mailto:${email}`} className="inline-flex items-center gap-2 hover:text-white">
            <Mail className="h-4 w-4 text-blue" /> {email}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a href={instagramHref} target="_blank" rel="noreferrer" aria-label="ABA Cruit on Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition hover:border-blue hover:bg-blue">
            <span className="text-sm font-black">IG</span>
          </a>
          <a href="https://www.linkedin.com/company/abacruit" aria-label="ABA Cruit on LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition hover:border-blue hover:bg-blue">
            <span className="text-sm font-black">in</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function Input({ name, placeholder, type = "text" }: { name: string; placeholder: string; type?: string }) {
  return (
    <input
      required
      name={name}
      type={type}
      placeholder={placeholder}
      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-blue focus:ring-2 focus:ring-blue/10"
    />
  );
}

function Select({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <select
      required
      name={name}
      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-sm text-navy outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/10"
    >
      {children}
    </select>
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
