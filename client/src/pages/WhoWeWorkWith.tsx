import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import villaImage from "@assets/generated_images/luxury_villa_interior_minimalist_neutral.png";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function WhoWeWorkWith() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-secondary/20 py-20 border-b border-border">
          <div className="container-wide">
            <div className="max-w-4xl">
              <span className="text-primary font-medium tracking-widest text-xs uppercase mb-4 block">Client Profile</span>
              <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6">Not for everyone.</h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                We work exclusively with clients who value independence and transparency over convenience.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Card 1: Homeowners */}
              <div className="group relative bg-card border border-border p-8 hover:border-primary/50 transition-colors flex flex-col h-full">
                <div className="mb-6 aspect-video overflow-hidden bg-secondary">
                    <img src={villaImage} className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500" alt="Villa" />
                </div>
                <h3 className="text-2xl font-serif mb-4">Private Homeowners</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  UHNW individuals undertaking significant residential projects (Villas, Palaces, Estates) who need a representative to manage the complexity of high-end procurement.
                </p>
                <div className="pt-6 border-t border-border/50">
                   <p className="text-sm font-medium text-foreground mb-2">Common Challenges:</p>
                   <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                       <li>Opaque pricing from contractors</li>
                       <li>Lack of technical knowledge to challenge specs</li>
                       <li>Scope creep and budget overruns</li>
                   </ul>
                </div>
              </div>

              {/* Card 2: Developers */}
              <div className="group bg-card border border-border p-8 hover:border-primary/50 transition-colors flex flex-col h-full">
                <div className="mb-6 aspect-video overflow-hidden bg-secondary relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                    {/* Abstract pattern or just color block for variety if no image available, keeping it simple */}
                    <div className="w-full h-full bg-stone-200" /> 
                </div>
                <h3 className="text-2xl font-serif mb-4">Boutique Developers</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  Developers who need to augment their internal teams with specialized procurement strategy for specific high-stakes projects.
                </p>
                <div className="pt-6 border-t border-border/50">
                   <p className="text-sm font-medium text-foreground mb-2">Common Challenges:</p>
                   <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                       <li>Vendor capability assessment</li>
                       <li>Contract leakage and risk transfer</li>
                       <li>Supply chain reliability</li>
                   </ul>
                </div>
              </div>

              {/* Card 3: Family Offices */}
              <div className="group bg-card border border-border p-8 hover:border-primary/50 transition-colors flex flex-col h-full">
                <div className="mb-6 aspect-video overflow-hidden bg-secondary">
                   <div className="w-full h-full bg-stone-300" />
                </div>
                <h3 className="text-2xl font-serif mb-4">Family Offices</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  Investment teams managing real estate portfolios who require technical due diligence and procurement audits to protect capital deployment.
                </p>
                <div className="pt-6 border-t border-border/50">
                   <p className="text-sm font-medium text-foreground mb-2">Common Challenges:</p>
                   <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                       <li>Asset lifecycle cost analysis</li>
                       <li>Distressed project recovery</li>
                       <li>Fiduciary oversight of development managers</li>
                   </ul>
                </div>
              </div>

            </div>

            <div className="mt-20 text-center">
                <p className="text-lg text-muted-foreground mb-8">Do you fit this profile?</p>
                <Link href="/inquiry">
                    <a className="inline-flex items-center gap-2 text-primary font-serif italic text-xl hover:opacity-80 transition-opacity">
                        Start an assessment <ArrowRight className="w-5 h-5" />
                    </a>
                </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
