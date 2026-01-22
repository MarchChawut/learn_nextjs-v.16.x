import Link from "next/link";

const products = [
  { id: 1, name: "A", price: 25000 },
  { id: 2, name: "B", price: 20000 },
  { id: 3, name: "C", price: 15000 },
  { id: 4, name: "D", price: 10000 },
];

export default function ProductsPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "1.5rem" }}>รายการสินค้า</h1>
      <div style={{ display: "grid", gap: "1rem" }}>
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            style={{
              border: "1px solid #ddd",
              padding: "1rem",
              borderRadius: "8px",
              textDecoration: "none",
              color: "inherit",
              display: "block",
            }}
          >
            <h2 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
              {product.name}
            </h2>
            <p style={{ color: "#0070f3", fontWeight: "bold" }}>
              ฿{product.price.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
