import { Produtos } from "../produtos";

import { Link } from "react-router-dom";

export function ListingPage() {
  return (
    <>
      {Produtos.map((produto) => {
        return (
          <div key={produto.id}>
            <Link to={produto.slug}>{produto.name}</Link>
          </div>
        );
      })}
    </>
  );
}
