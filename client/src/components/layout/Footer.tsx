import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border pt-20 pb-10">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/">
              <a className="font-serif text-2xl font-semibold tracking-tight text-foreground">
                ClearBound<span className="text-primary">.</span>
              </a>
            </Link>
            <p className="mt-6 text-muted-foreground max-w-sm leading-relaxed">
              Independent procurement advisory for Qatar’s most demanding projects. 
              We provide clarity before commitment, serving UHNW homeowners, developers, and family offices.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-medium mb-6 text-foreground">Menu</h4>
            <ul className="space-y-4">
              <li><Link href="/what-we-do"><a className="text-sm text-muted-foreground hover:text-primary transition-colors">What We Do</a></Link></li>
              <li><Link href="/how-we-work"><a className="text-sm text-muted-foreground hover:text-primary transition-colors">How We Work</a></Link></li>
              <li><Link href="/who-we-work-with"><a className="text-sm text-muted-foreground hover:text-primary transition-colors">Who We Work With</a></Link></li>
              <li><Link href="/fees"><a className="text-sm text-muted-foreground hover:text-primary transition-colors">Fees & Independence</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-medium mb-6 text-foreground">Action</h4>
            <ul className="space-y-4">
              <li><Link href="/inquiry"><a className="text-sm text-muted-foreground hover:text-primary transition-colors">Start an Inquiry</a></Link></li>
              <li className="text-sm text-muted-foreground pt-4">Qatar based. Global standards.</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ClearBound Advisory. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Engagement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
