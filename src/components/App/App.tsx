import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { AppRouter } from "components/Router";
import { Suspense, useEffect } from "react";
import { PageLoader } from "components/PageLoader";
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
        <AppRouter />
      </Suspense>

      <Footer />
    </>
  );
}
