import { DetailedViewPage } from "pages/DetailedViewPage";
import { FavoritesPage } from "pages/FavoritesPage";
import { HomePage } from "pages/HomePage";
import { NotFoundPage } from "pages/NotFoundPage";

const router = {
  home: "/",
  favorites: "/favorites",
  detailed: "/artwork",
  notFound: "*",
} as const;

type pages = keyof typeof router;

type paths = (typeof router)[pages];

type routeProps = {
  path: paths;
  element: JSX.Element;
};

export const routeConfig: Record<pages, routeProps> = {
  home: { path: "/", element: <HomePage /> },
  favorites: { path: "/favorites", element: <FavoritesPage /> },
  detailed: { path: "/artwork", element: <DetailedViewPage /> },
  notFound: { path: "*", element: <NotFoundPage /> },
};
