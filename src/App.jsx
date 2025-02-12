import { AnimatePresence } from "framer-motion";
import RoutesManager from "./routes";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <AnimatePresence>
      <BrowserRouter>
        <RoutesManager />
      </BrowserRouter>
    </AnimatePresence>
  );
}
