import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import "./app.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router
      root={(props) => (
        <div class="min-h-screen flex flex-col justify-between items-center w-screen">
          <Navigation />
          <Suspense>{props.children}</Suspense>
          <Footer />
        </div>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
