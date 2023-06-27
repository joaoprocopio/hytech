import { useParams } from "react-router-dom";
import { Produtos } from "../produtos";

export function ProductPage() {
  const { slug } = useParams();

  const produto = Produtos.find((produto) => produto.slug === slug);

  return (
    <>
      <h1>{produto.name}</h1>
      <p>{produto.description}</p>
    </>
  );
}
