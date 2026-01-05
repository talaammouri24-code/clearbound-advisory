import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import heroImage from "@assets/generated_images/minimalist_architectural_abstract_concrete_light_shadow.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="Architectural Abstract" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
          </div>
          
          <div className="container-wide relative z-10">
            <div className="max-w-3xl animate-in slide-in-from-bottom-10 duration-1000 fade-in">
              <span className="inline-block py-1 px-3 mb-6 border border-primary/30 text-primary text-xs tracking-widest uppercase font-medium bg-primary/5 backdrop-blur-sm">
                Qatar &bull; Advisory Only
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] mb-8 text-foreground text-balance">
                Clarity before <br/>
                <span className="italic text-muted-foreground">commitment.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed mb-10 text-balance">
                Independent procurement advisory for UHNW homeowners, developers, and family offices. We protect your vision from the chaos of execution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/inquiry">
                  <Button size="lg" className="rounded-none text-base px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-serif italic">
                    Start an Inquiry
                  </Button>
                </Link>
                <Link href="/what-we-do">
                  <Button variant="outline" size="lg" className="rounded-none text-base px-8 py-6 border-foreground/10 hover:bg-secondary/50">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The Exclusions - "What We Are Not" */}
        <section className="section-padding bg-card border-y border-border/50">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">Uncompromised Independence.</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  The construction and procurement industry is rife with conflicts of interest. We exist to eliminate them. Our sole product is advice; our sole loyalty is to you.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 border border-red-900/10 bg-red-50/50 dark:bg-red-950/10 rounded-sm">
                    <XCircle className="w-6 h-6 text-destructive shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">We do not execute.</h4>
                      <p className="text-sm text-muted-foreground">We are not contractors. We do not pour concrete or install fittings.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 border border-red-900/10 bg-red-50/50 dark:bg-red-950/10 rounded-sm">
                    <XCircle className="w-6 h-6 text-destructive shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">We do not represent suppliers.</h4>
                      <p className="text-sm text-muted-foreground">We take no commissions, markups, or kickbacks. Ever.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-0 lg:pl-12 border-l border-border/50 hidden lg:block">
                 <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-xl font-serif text-foreground">Fixed-Fee Advisory</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-xl font-serif text-foreground">Fiduciary Standard</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-xl font-serif text-foreground">Procurement Strategy</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-xl font-serif text-foreground">Blind Technical Reviews</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Services Teaser */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-serif mb-6">Precision in every detail.</h2>
                <p className="text-muted-foreground text-lg">
                  We bridge the gap between your vision and the industry's reality. From initial feasibility to final handover, we ensure your interests are protected.
                </p>
              </div>
              <Link href="/what-we-do">
                <a className="group flex items-center gap-2 text-primary font-medium hover:text-foreground transition-colors">
                  View all services <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Feasibility & Strategy",
                  desc: "Before a single drawing is commissioned, we define the procurement route, budget framework, and risk profile."
                },
                {
                  title: "Vendor Selection",
                  desc: "We run rigorous, blind technical qualifications to find partners who can actually deliver, not just those who say they can."
                },
                {
                  title: "Contract Advisory",
                  desc: "We structure agreements that align incentives, define clear deliverables, and protect you from scope creep."
                }
              ].map((service, i) => (
                <div key={i} className="group p-8 border border-border hover:border-primary/50 transition-colors bg-card hover:bg-card/50">
                  <span className="block text-4xl font-serif text-primary/20 mb-6 group-hover:text-primary/40 transition-colors">0{i+1}</span>
                  <h3 className="text-xl font-medium mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-secondary/20 border-t border-border">
          <div className="container-wide text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready to define your project?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Begin with a structured intake review. No sales pitch, just a professional assessment of your requirements.
            </p>
            <Link href="/inquiry">
              <Button size="lg" className="rounded-none text-lg px-10 py-8 bg-primary hover:bg-primary/90 text-primary-foreground font-serif italic">
                Start an Inquiry
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
