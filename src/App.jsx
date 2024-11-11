import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header, Courses, Hero, Footer } from "./components";
import { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Header /> */}
      <Hero onSearch={setSearchTerm} />
      <Courses searchTerm={searchTerm} />
      <Footer />
    </QueryClientProvider>
  );
};

export default App;
