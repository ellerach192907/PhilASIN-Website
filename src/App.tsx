import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout/Layout";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Accomplishments from "./pages/Accomplishments";
import News from "./pages/News";
import Resources from "./pages/Resources";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";
import NotFound from "./pages/not-found";


function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/story" component={Story} />
        <Route path="/accomplishments" component={Accomplishments} />
        <Route path="/news" component={News} />
        <Route path="/resources" component={Resources} />
        <Route path="/membership" component={Membership} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
