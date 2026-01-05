import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import WhatWeDo from "@/pages/WhatWeDo";
import HowWeWork from "@/pages/HowWeWork";
import WhoWeWorkWith from "@/pages/WhoWeWorkWith";
import Fees from "@/pages/Fees";
import Inquiry from "@/pages/Inquiry";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/what-we-do" component={WhatWeDo} />
      <Route path="/how-we-work" component={HowWeWork} />
      <Route path="/who-we-work-with" component={WhoWeWorkWith} />
      <Route path="/fees" component={Fees} />
      <Route path="/inquiry" component={Inquiry} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
