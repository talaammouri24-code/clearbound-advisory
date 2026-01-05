import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function HowWeWork() {
  const steps = [
    {
      title: "Intake & Qualification",
      desc: "We begin with a structured review of your project's status. We only accept engagements where our independence creates multiples of value in savings or risk mitigation."
    },
    {
      title: "Scope & Fixed Fee",
      desc: "We define a precise scope of advisory work. You receive a fixed-fee proposal. No hourly billing, no open-ended retainers. You know exactly what you are buying."
    },
    {
      title: "Engagement",
      desc: "Our fees are prepaid. This ensures our advice is never influenced by the need to 'keep the client happy' to get the next invoice paid. We tell you the truth, even when it is uncomfortable."
    },
    {
      title: "Delivery & Execution",
      desc: "We execute the advisory scope—whether that is qualifying a vendor list, auditing a contract, or defining a strategy. We deliver the report, the roadmap, or the decision matrix."
    },
    {
      title: "Handover",
      desc: "We equip you or your team to execute the strategy. We do not linger. We provide the clarity required for you to move forward, then we step away."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-secondary/20 py-20 border-b border-border">
          <div className="container-wide">
            <div className="max-w-4xl">
              <span className="text-primary font-medium tracking-widest text-xs uppercase mb-4 block">Process</span>
              <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6">Methodical Clarity.</h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                We do not improvise. Our process is designed to extract ambiguity from your project and replace it with actionable data.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="relative border-l border-primary/20 ml-4 md:ml-12 space-y-16">
              {steps.map((step, index) => (
                <div key={index} className="relative pl-12 md:pl-20">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                  <span className="text-sm font-mono text-primary/60 mb-2 block">Step 0{index + 1}</span>
                  <h3 className="text-3xl font-serif mb-4 text-foreground">{step.title}</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-foreground text-background">
            <div className="container-wide text-center">
                <h3 className="text-3xl font-serif mb-6">No retainers. No hourly rates.</h3>
                <p className="text-white/70 max-w-2xl mx-auto text-lg">
                    Our incentives must be aligned with yours. Hourly billing encourages inefficiency. Retainers encourage dependency. Fixed fees encourage results.
                </p>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
