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
        <>
          <Suspense>
            <Navigation />
            {props.children}
            <Footer />
          </Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
