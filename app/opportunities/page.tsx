import type { Metadata } from "next";
import type { ReactNode } from "react";
import TalentNetworkForm from "../../components/TalentNetworkForm";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Filter,
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

export const metadata: Metadata = {
  title: "ABA Opportunities | ABA Cruit",
  description:
    "Explore BCBA, RBT, clinical leadership, and ABA operations opportunities through ABA Cruit.",
};

const phoneDisplay = "410-542-2255";
const phoneHref = "tel:4105422255";
const email = "hello@abacruit.com";
const instagramHref = "https://www.instagram.com/abacruit/";

const opportunities = [
  {
    title: "Board Certified Behavior Analyst",
    shortTitle: "BCBA",
    location: "Maryland",
    workStyle: "Majority remote",
    compensation: "$90–$120 per hour",
    schedule: "25–28 billable hours per week",
    status: "Now Recruiting",
    featured: true,
    description:
      "A flexible BCBA opportunity designed to reduce unnecessary workload while preserving strong earning potential and clinical impact.",
    highlights: [
      "Approximately 25% in person",
      "Flexible schedule",
      "Low caseload",
      "Minimal non-billable work",
      "Strong administrative support",
      "Travel reimbursement",
      "Consistent caseload with no waitlist",
    ],
    requirements:
      "Active BCBA certification and Maryland LBA eligibility required.",
  },
] as const;

const networkBenefits = [
  "Confidential career search",
  "Better-fit opportunities",
  "Personalized career guidance",
  "Salary and offer insights",
  "Nationwide opportunities",
  "No cost to candidates",
];

export default function OpportunitiesPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-navy">
      <Header />
      <Hero />
      <TrustBar />
      <OpportunityDirectory />
      <RoleInterest />
      <TalentNetwork />
      <CandidateSupport />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="/" className="leading-none" aria-label="ABA Cruit home">
          <div className="text-2xl font-black tracking-tight">
            <span className="text-blue">ABA</span> Cruit
          </div>
          <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.17em] text-slate-500">
            Staffing &amp; Recruiting
          </div>
        </a>

        <nav
  aria-label="Primary navigation"
  className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex"
>
  <a href="/opportunities" className="font-black text-blue">
  Opportunities
</a>
          
  <a href="/#employers" className="hover:text-blue">
    For Employers
  </a>

  <a href="/refer" className="hover:text-blue">
    Refer & Earn
  </a>

  <a href="/#contact" className="hover:text-blue">
    Contact
  </a>
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
    <section className="relative overflow-hidden bg-gradient-to-b from-warm to-white">
      <div className="absolute right-[-120px] top-[-120px] h-80 w-80 rounded-full bg-blue/10 blur-3xl" />
      <div className="absolute bottom-[-160px] left-[-120px] h-96 w-96 rounded-full bg-cream blur-2xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue/15 bg-white px-4 py-2 text-sm font-bold text-blue shadow-sm">
            <Sparkles className="h-4 w-4" />
            Opportunities built around ABA professionals
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.03] tracking-tight md:text-7xl">
            Find an ABA Role That Fits Your Life.
          </h1>

          <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-600">
            Explore selected BCBA and ABA opportunities, or join our confidential talent network so we can contact you when the right role becomes available.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#open-roles"
              className="inline-flex items-center justify-center rounded-full bg-blue px-7 py-4 text-base font-bold text-white shadow-soft transition hover:bg-navy"
            >
              View Open Opportunities <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#talent-network"
              className="inline-flex items-center justify-center rounded-full border border-blue bg-white px-7 py-4 text-base font-bold text-navy transition hover:bg-soft"
            >
              Join the Talent Network
            </a>
          </div>

          <div className="mt-9 flex flex-col gap-3 text-sm font-semibold text-slate-600 sm:flex-row sm:items-center sm:gap-6">
            <a href={phoneHref} className="inline-flex items-center gap-2 hover:text-blue">
              <Phone className="h-4 w-4 text-blue" /> {phoneDisplay}
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 hover:text-blue"
            >
              <Mail className="h-4 w-4 text-blue" /> {email}
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft md:p-8">
          <div className="rounded-[1.5rem] bg-soft p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                  Your search, handled personally
                </p>
                <h2 className="mt-2 text-3xl font-black">More than a job board</h2>
              </div>
              <div className="rounded-2xl bg-white p-3 text-blue shadow-sm">
                <Search className="h-8 w-8" />
              </div>
            </div>

            <div className="mt-7 space-y-4">
              <Feature
                icon={<BadgeCheck className="h-5 w-5" />}
                title="ABA-Specific Opportunities"
                text="Roles from organizations seeking experienced ABA professionals."
              />
              <Feature
                icon={<LockKeyhole className="h-5 w-5" />}
                title="Confidential Conversations"
                text="Explore opportunities without your information being shared prematurely."
              />
              <Feature
                icon={<UserRoundCheck className="h-5 w-5" />}
                title="Personal Guidance"
                text="We help you evaluate fit, expectations, compensation, and next steps."
              />
              <Feature
                icon={<ShieldCheck className="h-5 w-5" />}
                title="No Cost to Candidates"
                text="Our recruiting support is always free for ABA professionals."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    ["ABA-Focused Recruiting", ShieldCheck],
    ["Nationwide Opportunities", MapPin],
    ["Personalized Support", UserRoundCheck],
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

function OpportunityDirectory() {
  return (
    <section id="open-roles" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue">
            Current openings
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            ABA Opportunities
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            We only display selected active searches. Many opportunities are filled through our talent network before they are publicly posted.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-soft px-4 py-3 text-sm font-bold text-slate-600 md:self-auto">
          <Filter className="h-4 w-4 text-blue" />
          {opportunities.length} active opportunity
        </div>
      </div>

      <div className="mt-10 space-y-6">
        {opportunities.map((opportunity) => (
          <OpportunityCard key={`${opportunity.title}-${opportunity.location}`} opportunity={opportunity} />
        ))}
      </div>

      <div className="mt-8 rounded-[2rem] border border-slate-200 bg-soft p-8 md:flex md:items-center md:justify-between md:gap-8 md:p-10">
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue shadow-sm">
            <Clock3 className="h-6 w-6" />
          </div>
          <h3 className="mt-5 text-3xl font-black">The right role may not be posted yet.</h3>
          <p className="mt-3 max-w-3xl leading-8 text-slate-600">
            Tell us what you are looking for, including location, compensation, schedule, setting, and preferred caseload. We will reach out when a relevant opportunity becomes available.
          </p>
        </div>
        <a
          href="#talent-network"
          className="mt-6 inline-flex shrink-0 items-center justify-center rounded-full bg-blue px-6 py-4 font-bold text-white transition hover:bg-navy md:mt-0"
        >
          Join the Network <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

type Opportunity = (typeof opportunities)[number];

function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {

  return (
    <article className="overflow-hidden rounded-[2rem] border border-blue/30 bg-white shadow-soft">
      <div className="grid lg:grid-cols-[.82fr_1.18fr]">
        <div className="bg-navy p-8 text-white md:p-10">
          <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em]">
            {opportunity.status}
          </div>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-blue">
            {opportunity.shortTitle}
          </p>
          <h3 className="mt-2 text-4xl font-black">{opportunity.title}</h3>
          <p className="mt-4 text-lg leading-8 text-slate-200">{opportunity.description}</p>

          <div className="mt-7 space-y-3 text-sm font-bold text-slate-200">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue" /> {opportunity.location}
            </div>
            <div className="flex items-center gap-2">
              <BriefcaseBusiness className="h-5 w-5 text-blue" /> {opportunity.workStyle}
            </div>
            <div className="flex items-center gap-2">
              <Clock3 className="h-5 w-5 text-blue" /> {opportunity.schedule}
            </div>
          </div>
        </div>

        <div className="p-8 md:p-10">
          <p className="text-2xl font-black text-blue">{opportunity.compensation}</p>
          <p className="mt-2 font-bold text-slate-700">{opportunity.schedule}</p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {opportunity.highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 rounded-2xl bg-soft p-3 text-sm font-semibold text-slate-700"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                {item}
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-6 text-slate-500">{opportunity.requirements}</p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#interested-maryland-bcba"
              className="inline-flex items-center justify-center rounded-full bg-blue px-6 py-4 font-bold text-white transition hover:bg-navy"
            >
              I’m Interested in This Role <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#talent-network"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 font-bold text-navy transition hover:border-blue hover:text-blue"
            >
              Join for Future Roles
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function RoleInterest() {
  return (
    <section id="interested-maryland-bcba" className="bg-warm py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-blue/20 bg-white p-8 shadow-soft lg:grid-cols-[.8fr_1.2fr] lg:p-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-blue">
              Interested in this specific role?
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              BCBA Opportunity — Maryland
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Complete this form if you want ABA Cruit to contact you specifically
              about the Maryland BCBA opportunity shown above.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "$90–$120 per hour",
                "25–28 billable hours per week",
                "Majority remote",
                "Flexible schedule",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-bold text-slate-700"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue" />
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-7 rounded-2xl bg-soft p-4 text-sm font-bold leading-6 text-slate-700">
              This submission will be marked as interest in the Maryland BCBA role,
              not just a general request for future opportunities.
            </p>
          </div>

          <TalentNetworkForm
            interestedRole="BCBA — Maryland"
            submitLabel="Submit Interest in This Role"
            successMessage="Thank you. Your interest in the Maryland BCBA opportunity has been received. ABA Cruit will follow up with you about this role."
          />
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
            <p className="text-sm font-black uppercase tracking-[0.22em] text-blue">
              Confidential talent network
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Let Better Opportunities Find You
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              You do not need to be actively job hunting. Share what matters to you once, and we will contact you when a relevant opportunity may be worth considering.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {networkBenefits.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href={instagramHref}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 font-black text-blue hover:text-navy"
            >
              <span className="text-sm font-black">IG</span>
              Follow @abacruit on Instagram
            </a>
          </div>

          <TalentNetworkForm />
        </div>
      </div>
    </section>
  );
}

function CandidateSupport() {
  const steps = [
    {
      number: "01",
      title: "Tell us what you want",
      text: "Share your certification, location, schedule, compensation goals, and what would make a move worthwhile.",
    },
    {
      number: "02",
      title: "Review relevant opportunities",
      text: "We contact you when a role appears aligned instead of sending every opening to every candidate.",
    },
    {
      number: "03",
      title: "Move forward confidentially",
      text: "We coordinate introductions, answer questions, and support you through the interview and offer process.",
    },
  ] as const;

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-blue">How it works</p>
        <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
          A More Personal Career Search
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          We help ABA professionals explore opportunities thoughtfully, privately, and without unnecessary pressure.
        </p>
      </div>

      <div className="mt-11 grid gap-5 lg:grid-cols-3">
        {steps.map((step) => (
          <div key={step.number} className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm">
            <div className="text-sm font-black tracking-[0.18em] text-blue">{step.number}</div>
            <h3 className="mt-4 text-2xl font-black">{step.title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-navy p-8 text-white md:flex-row md:p-10">
        <div>
          <div className="flex items-center gap-3">
            <UsersRound className="h-7 w-7 text-blue" />
            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue">For ABA employers</p>
          </div>
          <h3 className="mt-3 text-3xl font-black">Hiring BCBAs or ABA staff?</h3>
          <p className="mt-3 max-w-2xl leading-7 text-slate-200">
            ABA Cruit helps providers connect with qualified, interested candidates through focused and proactive recruiting.
          </p>
        </div>
        <a
          href={`mailto:${email}?subject=${encodeURIComponent("ABA Company Hiring Request")}`}
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-blue px-6 py-4 font-bold text-white transition hover:bg-white hover:text-navy"
        >
          Hire ABA Staff <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1fr_auto_auto] md:items-center lg:px-8">
        <div>
          <div className="text-2xl font-black">
            <span className="text-blue">ABA</span> Cruit
          </div>
          <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
            Staffing &amp; Recruiting
          </div>
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
          <a
            href={instagramHref}
            target="_blank"
            rel="noreferrer"
            aria-label="ABA Cruit on Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition hover:border-blue hover:bg-blue"
          >
            <span className="text-sm font-black">IG</span>
          </a>
          <a
            href="https://www.linkedin.com/company/abacruit"
            target="_blank"
            rel="noreferrer"
            aria-label="ABA Cruit on LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition hover:border-blue hover:bg-blue"
          >
            <span className="text-sm font-black">in</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function Feature({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
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
