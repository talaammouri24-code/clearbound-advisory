import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Check } from "lucide-react";
import planningImage from "@assets/generated_images/architectural_blueprints_and_material_samples.png";

export default function WhatWeDo() {
  const services = [
    {
      title: "Procurement Strategy",
      description: "We define how your project is bought before a single supplier is engaged. We analyze the market, define packages, and set the rules of engagement to ensure you remain in control.",
      deliverables: ["Market Analysis", "Packaging Strategy", "Risk Profile Assessment", "Budget Framework"]
    },
    {
      title: "Vendor Qualification & Selection",
      description: "We find the right partners, not just the available ones. Our blind technical qualification process removes bias and focuses purely on capability, financial health, and track record.",
      deliverables: ["Long-list Generation", "Prequalification Interviews", "Technical Capability Audit", "Financial Health Check"]
    },
    {
      title: "Contract Advisory",
      description: "A contract is only as good as its scope. We work alongside your legal team to ensure the technical scope, payment terms, and performance indicators protect your interests.",
      deliverables: ["Scope Definition", "Payment Schedule Structure", "SLA Definition", "Change Order Protocols"]
    },
    {
      title: "Distressed Project Recovery",
      description: "When projects fail, it is rarely bad luck. It is bad process. We step in to audit the failure, re-negotiate with vendors, or structure a recovery plan to get to completion.",
      deliverables: ["Forensic Audit", "Vendor Re-negotiation", "Recovery Roadmap", "Termination Advisory"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-secondary/20 py-20 border-b border-border">
          <div className="container-wide">
            <div className="max-w-4xl">
              <span className="text-primary font-medium tracking-widest text-xs uppercase mb-4 block">Services</span>
              <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6">Pure Advisory.</h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                We do not sell products. We do not manage construction sites. We provide the intelligence and strategy required to procure complex projects successfully.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <img 
                  src={planningImage} 
                  alt="Strategic Planning" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-serif mb-6">The Client's Representative.</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  In a traditional project, everyone has an agenda. The architect wants their vision realized. The contractor wants margin. The suppliers want volume.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We sit exclusively on your side of the table. We align these conflicting incentives to serve your primary goal: a successful project delivered on your terms.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {services.map((service, index) => (
                <div key={index} className="border-t border-border pt-8">
                  <span className="text-sm text-primary/50 font-mono mb-4 block">0{index + 1}</span>
                  <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed h-24">
                    {service.description}
                  </p>
                  <div>
                    <h5 className="text-xs font-semibold uppercase tracking-widest text-foreground/80 mb-4">Key Deliverables</h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-3 h-3 text-primary" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
