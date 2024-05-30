import { Route, Routes } from "react-router-dom";
import { routeConfig } from "./config";

export function AppRouter() {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}
