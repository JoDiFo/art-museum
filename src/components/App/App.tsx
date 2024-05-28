import { HomePage } from "pages/HomePage";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Routes, Route } from "react-router-dom";
import { FavoritesPage } from "pages/FavoritesPage";
import { Suspense, useEffect } from "react";
import { PageLoader } from "components/PageLoader";
import { DetailedViewPage } from "pages/DetailedViewPage";
import { useDispatch } from "react-redux";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SET_ARTWORKS",
      payload:
        localStorage
          .getItem("favorites")
          ?.split(",")
          .map((value) => Number(value)) || [],
    });
  }, []);

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
