import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar.tsx";
import SearchSection from "./components/SearchSection.tsx";
import MemoSection from "./components/MemoSection.tsx";
import ProgramSection from "./components/ProgramSection.tsx";
import Footer from "./components/Footer.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <SearchSection />
          <MemoSection />
          <ProgramSection />
          <Footer />
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
