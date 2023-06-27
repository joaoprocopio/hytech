import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ListingLayout } from "./layouts/ListingLayout";
import { ListingPage } from "./pages/ListingPage";
import { ProductPage } from "./pages/ProductPage";

const router = createBrowserRouter([
  {
    // Página que faz a listagem dos produtos
    path: "/",
    element: (
      <ListingLayout>
        <ListingPage />
      </ListingLayout>
    ),
  },
  {
    // Página que mostra o produto
    path: ":slug",
    element: (
      <ListingLayout>
        <ProductPage />
      </ListingLayout>
    ),
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
