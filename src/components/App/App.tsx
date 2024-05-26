import { HomePage } from "pages/HomePage";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Routes, Route } from "react-router-dom";
import { FavoritesPage } from "pages/FavoritesPage";
import { Suspense } from "react";

export function App() {
  return (
    <>
      <Header />

      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}
