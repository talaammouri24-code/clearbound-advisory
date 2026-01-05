import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck, Banknote, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Fees() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-secondary/20 py-20 border-b border-border">
          <div className="container-wide">
            <div className="max-w-4xl">
              <span className="text-primary font-medium tracking-widest text-xs uppercase mb-4 block">Transparency</span>
              <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6">Our Independence.</h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                We have removed every incentive that could cloud our judgment. We do not take commissions. We do not work on hourly rates.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-8 border border-border bg-card">
                <Banknote className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-serif mb-4">Fixed Fee Only</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We price our services based on value and scope, not time. You will know exactly what the engagement costs before we start. No hidden hours. No surprises.
                </p>
              </div>
              <div className="p-8 border border-border bg-card">
                <ScrollText className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-serif mb-4">Prepaid Engagements</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We require payment upfront or on specific milestones. This grants us the freedom to tell you difficult truths without fear of a withheld invoice.
                </p>
              </div>
              <div className="p-8 border border-border bg-card">
                <ShieldCheck className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-serif mb-4">Zero Commissions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We never accept introduction fees, commissions, or kickbacks from suppliers. If we recommend a vendor, it is because they are the best for your project.
                </p>
              </div>
            </div>

            <div className="mt-20 p-10 bg-foreground text-background rounded-sm">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-serif mb-6">Why we don't show prices online.</h2>
                    <p className="text-white/70 text-lg leading-relaxed mb-8">
                        Every project has a unique risk profile and complexity. A villa renovation requires different advisory scope than a commercial development. We provide a custom fixed-fee proposal after our initial intake assessment.
                    </p>
                    <Link href="/inquiry">
                        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white rounded-none px-8 py-6">
                            Request Assessment
                        </Button>
                    </Link>
                </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
