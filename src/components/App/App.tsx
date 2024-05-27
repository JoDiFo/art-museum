import { HomePage } from "pages/HomePage";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Routes, Route } from "react-router-dom";
import { FavoritesPage } from "pages/FavoritesPage";
import { Suspense } from "react";
import { PageLoader } from "components/PageLoader";
import { DetailedViewPage } from "pages/DetailedViewPage";

export function App() {
  return (
    <>
      <Header />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/artwork" element={<DetailedViewPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}
