import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import StudentSection from "./pages/StudentSection";
import AdminSection from "./pages/AdminSection.tsx";
import GetFreeTrial from "./pages/GetFreeTrial.tsx";
import AdminFeatures from "./pages/AdminFeatures";
import AdminExplorePage from "./pages/AdminExplorePage";
import StudentExplorePage from "./pages/StudentExplorePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
  <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/student-section" element={<StudentSection />} />
          <Route path="/admin-section" element={<AdminSection />} />
          <Route path="/get-free-trial" element={<GetFreeTrial />} />
          <Route path="/admin-features" element={<AdminFeatures />} />
            <Route path="/admin-explore" element={<AdminExplorePage />} />
            <Route path="/student-explore" element={<StudentExplorePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
