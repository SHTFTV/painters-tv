import {Home,Cities,CityDetail,Services,Listings,Journal,Story,Utility} from '@/pages/network-pages';
import './network.css';
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import InteriorPainting from "@/pages/services/interior-painting";
import ExteriorPainting from "@/pages/services/exterior-painting";
import EpoxyFlooring from "@/pages/services/epoxy-flooring";
import CommercialPainting from "@/pages/services/commercial-painting";
import CabinetRefinishing from "@/pages/services/cabinet-refinishing";
import DeckFenceStaining from "@/pages/services/deck-fence-staining";
import WallpaperRemoval from "@/pages/services/wallpaper-removal";
import PressureWashing from "@/pages/services/pressure-washing";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/cities" component={Cities} />
      <Route path="/city/:slug" component={CityDetail} />
      <Route path="/services" component={Services} />
      <Route path="/services/interior-painting" component={InteriorPainting} />
      <Route path="/services/exterior-painting" component={ExteriorPainting} />
      <Route path="/services/epoxy-flooring" component={EpoxyFlooring} />
      <Route path="/services/commercial-painting" component={CommercialPainting} />
      <Route path="/services/cabinet-refinishing" component={CabinetRefinishing} />
      <Route path="/services/deck-fence-staining" component={DeckFenceStaining} />
      <Route path="/services/wallpaper-removal" component={WallpaperRemoval} />
      <Route path="/services/pressure-washing" component={PressureWashing} />
      <Route path="/listings" component={Listings} />
      <Route path="/pricing" component={() => <Utility kind="pricing"/>} />
      <Route path="/list-your-business" component={() => <Utility kind="list-your-business"/>} />
      <Route path="/estimate" component={() => <Utility kind="estimate"/>} />
      <Route path="/about" component={() => <Utility kind="about"/>} />
      <Route path="/journal" component={Journal}/><Route path="/journal/:slug" component={Story}/><Route path="/market-with-us" component={()=><Utility kind="market-with-us"/>}/><Route path="/guest-posts" component={()=><Utility kind="guest-posts"/>}/><Route path="/privacy" component={()=><Utility kind="privacy"/>}/><Route component={()=><Utility kind="not-found"/>} />
    </Switch>
  );
}

function App({ ssrPath }: { ssrPath?: string }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter
          ssrPath={ssrPath}
          base={import.meta.env.BASE_URL.replace(/\/$/, "")}
        >
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
