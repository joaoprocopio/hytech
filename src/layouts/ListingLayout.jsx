export function ListingLayout({ children }) {
  return (
    <>
      <header>Eu sou um header, e me chamo listing layout</header>
      <main>{children}</main>
      <footer style={{ backgroundColor: "blue", color: "white" }}>
        Eu sou um footer, e eu sou azul
      </footer>
    </>
  );
}
