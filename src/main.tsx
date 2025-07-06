import ReactDOM from "react-dom/client";
import App from "./App";
import { loadConfig } from "./../config/config";
import { BrowserRouter } from "react-router-dom"; // ✅ import

async function bootstrap() {
  await loadConfig(); // Loads /public/development.json
  const root = ReactDOM.createRoot(document.getElementById("root")!);
  root.render(
    <BrowserRouter> {/* ✅ wrap App in BrowserRouter */}
      <App />
    </BrowserRouter>
  );
}

bootstrap();
