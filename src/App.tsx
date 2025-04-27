
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Donate from "./pages/Donate";
import About from "./pages/About";
import History from "./pages/History";
import NotFound from "./pages/NotFound";

// Initialize tailwind theme colors
import { useEffect } from "react";

// Create the query client
const queryClient = new QueryClient();

const App = () => {
  // Set the custom tailwind theme colors
  useEffect(() => {
    document.documentElement.style.setProperty('--foundation-purple', '#9b87f5');
    document.documentElement.style.setProperty('--foundation-darkPurple', '#6E59A5');
    document.documentElement.style.setProperty('--foundation-lightGray', '#f8f9fa');
    document.documentElement.style.setProperty('--foundation-orange', '#F97316');
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/donate" element={<Donate />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
