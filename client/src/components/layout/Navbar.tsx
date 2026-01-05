import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/what-we-do", label: "What We Do" },
    { href: "/how-we-work", label: "How We Work" },
    { href: "/who-we-work-with", label: "Who We Work With" },
    { href: "/fees", label: "Fees & Independence" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container-wide flex h-20 items-center justify-between">
        <Link href="/">
          <a className="font-serif text-2xl font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity">
            ClearBound<span className="text-primary">.</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <Link href="/inquiry">
            <Button variant="default" className="ml-4 font-serif italic bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8">
              Start an Inquiry
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-background border-b border-border/40 p-6 flex flex-col gap-6 shadow-lg animate-in slide-in-from-top-5">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-serif font-medium",
                  location === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <Link href="/inquiry">
            <Button onClick={() => setIsOpen(false)} className="w-full font-serif italic bg-primary text-primary-foreground rounded-none py-6">
              Start an Inquiry
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
