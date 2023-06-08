import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { FilterProvider } from "./context/FiltersContext.tsx"
import { store } from "./store/store.tsx"
import { Provider as ReduxProvider } from "react-redux"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FilterProvider>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </FilterProvider>
  </React.StrictMode>
)
