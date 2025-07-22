
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import SolutionsPage from "./pages/SolutionsPage";
import IndustriesPage from "./pages/IndustriesPage";
import TalentAcquisitionPage from "./pages/TalentAcquisitionPage";
import EmployeeEngagementPage from "./pages/EmployeeEngagementPage";
import LeadershipDevelopmentPage from "./pages/LeadershipDevelopmentPage";
import Solution1Page from "./pages/Solution1Page";
import Solution2Page from "./pages/Solution2Page";
import Solution3Page from "./pages/Solution3Page";
import OverseasPage from "./pages/OverseasPage";
import ITStaffingPage from "./pages/ITStaffingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/talent-acquisition" element={<TalentAcquisitionPage />} />
          <Route path="/solutions/employee-engagement" element={<EmployeeEngagementPage />} />
          <Route path="/solutions/leadership-development" element={<LeadershipDevelopmentPage />} />
          <Route path="/solution1" element={<Solution1Page />} />
          <Route path="/solution2" element={<Solution2Page />} />
          <Route path="/solution3" element={<Solution3Page />} />
          <Route path="/overseas" element={<OverseasPage />} />
          <Route path="/it-staffing" element={<ITStaffingPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/blog" element={<NotFound />} /> {/* Temporary blog route that points to NotFound */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
