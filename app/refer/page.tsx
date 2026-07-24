import ReferralForm from "../../components/ReferralForm";
import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  Clock3,
  Gift,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  UserPlus,
  UsersRound,
} from "lucide-react";

const phoneDisplay = "410-542-2255";
const phoneHref = "tel:4105422255";
const email = "hello@abacruit.com";
const instagramHref = "https://www.instagram.com/abacruit/";

const referralBonuses = [
  {
    role: "BCBA",
    amount: "$500",
    description: "For a successfully placed Board Certified Behavior Analyst.",
  },
  {
    role: "BCaBA",
    amount: "$250",
    description: "For a successfully placed Assistant Behavior Analyst.",
  },
  {
    role: "RBT or BT",
    amount: "Up to $200",
    description: "Bonus amount may vary based on the position and employer.",
  },
];

const referralRules = [
  "The referred professional must be new to ABA Cruit.",
  "The referral must be submitted before the candidate applies or contacts us directly.",
  "When multiple people refer the same candidate, the first eligible referral receives credit.",
  "The candidate must be hired through ABA Cruit by a participating employer.",
  "The candidate must complete 90 consecutive days of employment.",
  "The referral bonus is generally paid within 14 business days after eligibility is confirmed.",
  "Referral bonuses may be reported as taxable income when required by law.",
];

export default function ReferralPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-navy">
      <Header />
      <Hero />
      <HowItWorks />
      <BonusAmounts />
      <ReferralFormSection />
      <Terms />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="/" className="leading-none">
          <div className="text-2xl font-black tracking-tight">
            <span className="text-blue">ABA</span> Cruit
          </div>

          <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.17em] text-slate-500">
            Staffing & Recruiting
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex">
          <a href="/opportunities" className="hover:text-blue">
            Opportunities
          </a>
          <a href="/#employers" className="hover:text-blue">
            For Employers
          </a>
         <a href="/refer" className="font-black text-blue">
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
            ABA Cruit Referral Program
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.03] tracking-tight md:text-7xl">
            Refer an ABA Professional. Earn Up to $500.
          </h1>

          <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-600">
            Know an exceptional BCBA or ABA professional who may be ready for
            their next opportunity? Introduce them to ABA Cruit and earn a cash
            referral bonus when they are successfully placed.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#refer"
              className="inline-flex items-center justify-center rounded-full bg-blue px-7 py-4 text-base font-bold text-white shadow-soft transition hover:bg-navy"
            >
              Refer Someone
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-blue bg-white px-7 py-4 text-base font-bold text-navy transition hover:bg-soft"
            >
              See How It Works
            </a>
          </div>

          <p className="mt-6 text-sm font-semibold leading-6 text-slate-500">
            There is no cost to participate. The referred professional does not
            need to be actively job searching.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft md:p-8">
          <div className="rounded-[1.5rem] bg-soft p-6 md:p-8">
            <div className="flex items-center justify-between gap-5">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                  Featured bonus
                </p>
                <p className="mt-3 text-6xl font-black text-blue">$500</p>
                <p className="mt-2 text-xl font-black">BCBA referral bonus</p>
              </div>

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-blue shadow-sm">
                <Gift className="h-8 w-8" />
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <Benefit text="You introduce a qualified professional." />
              <Benefit text="ABA Cruit helps them explore fitting opportunities." />
              <Benefit text="You earn the bonus after a qualifying placement." />
            </div>

            <div className="mt-8 rounded-2xl border border-blue/15 bg-white p-5">
              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                <div>
                  <p className="font-black">When is the bonus paid?</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    After the referred candidate completes 90 consecutive days
                    of employment and ABA Cruit confirms eligibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Submit Your Referral",
      description:
        "Share your contact information and the professional’s basic details using the form below.",
      icon: <UserPlus className="h-7 w-7" />,
    },
    {
      number: "2",
      title: "We Make the Connection",
      description:
        "ABA Cruit confidentially contacts the professional and helps them explore relevant opportunities.",
      icon: <UsersRound className="h-7 w-7" />,
    },
    {
      number: "3",
      title: "You Earn the Bonus",
      description:
        "When your referral is hired and completes 90 consecutive days of employment, you become eligible for payment.",
      icon: <BadgeDollarSign className="h-7 w-7" />,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-7xl px-5 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-blue">
          Three simple steps
        </p>

        <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
          How the Referral Program Works
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Make the introduction once. We handle the recruiting process from
          there.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="relative rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-warm text-blue">
                {step.icon}
              </div>

              <span className="text-5xl font-black text-slate-100">
                {step.number}
              </span>
            </div>

            <h3 className="mt-7 text-2xl font-black">{step.title}</h3>

            <p className="mt-3 leading-7 text-slate-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BonusAmounts() {
  return (
    <section className="bg-soft py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue">
            Referral rewards
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Current Bonus Amounts
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Bonus amounts are based on the professional’s role and the
            qualifying position they accept.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {referralBonuses.map((bonus) => (
            <div
              key={bonus.role}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-warm text-blue">
                <Gift className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-2xl font-black">{bonus.role}</h3>

              <p className="mt-3 text-4xl font-black text-blue">
                {bonus.amount}
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                {bonus.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-6 text-slate-500">
          The applicable bonus will be confirmed before a qualifying placement.
          Certain positions or employer agreements may not participate in the
          referral program.
        </p>
      </div>
    </section>
  );
}

function ReferralFormSection() {
  return (
    <section
      id="refer"
      className="mx-auto max-w-7xl px-5 py-20 lg:px-8"
    >
      <div className="grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue">
            Refer someone
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Make an Introduction
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Submit the professional's information and we'll confidentially reach out.
          </p>

          <div className="mt-8 space-y-4">
            <Benefit text="Quick and simple submission" />
            <Benefit text="Confidential professional outreach" />
            <Benefit text="No recruiting work required from you" />
            <Benefit text="Cash bonus for qualifying placements" />
          </div>
        </div>

        <ReferralForm />
      </div>
    </section>
  );
}

function Terms() {
  return (
    <section className="border-t border-slate-200 bg-warm py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue">
            Important details
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight">
            Referral Eligibility
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            These guidelines help ensure that referral bonuses are handled
            clearly and fairly.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <div className="space-y-4">
            {referralRules.map((rule) => (
              <div key={rule} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                <p className="leading-7 text-slate-600">{rule}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 border-t border-slate-200 pt-6 text-sm leading-6 text-slate-500">
            ABA Cruit reserves the right to verify eligibility, modify or end
            the referral program, and deny duplicate, fraudulent, misleading,
            or otherwise ineligible submissions. Additional terms may apply to
            a specific referral or position.
          </p>
        </div>
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
            Staffing & Recruiting
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm font-bold text-slate-200 sm:flex-row sm:gap-6">
          <a
            href={phoneHref}
            className="inline-flex items-center gap-2 hover:text-white"
          >
            <Phone className="h-4 w-4 text-blue" />
            {phoneDisplay}
          </a>

          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 hover:text-white"
          >
            <Mail className="h-4 w-4 text-blue" />
            {email}
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

function Input({
  name,
  placeholder,
  type = "text",
}: {
  name: string;
  placeholder: string;
  type?: string;
}) {
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

function Select({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
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

function Benefit({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
      <p className="text-sm font-bold leading-6 text-slate-700">{text}</p>
    </div>
  );
}
