import LandingPage from "../imports/LandingPage";
import { FormModalProvider } from "./contexts/FormModalContext";

export default function App() {
  return (
    // Full-viewport shell — each section manages its own max-width inner container.
    // The body background is white so that on large monitors the area outside
    // any section's coloured background looks intentional.
    <FormModalProvider>
      <div className="w-full overflow-x-hidden bg-white">
        <LandingPage />
      </div>
    </FormModalProvider>
  );
}
