import Link from "next/link";

interface ProductDetailPageProps {
  param: Promise<{
    search?: string;
  }>;
}

const products = [
  {
    id: 1,
    name: "A",
    price: 25000,
    description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    category: "phone",
  },
  {
    id: 2,
    name: "B",
    price: 20000,
    description: "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
    category: "labtop",
  },
  {
    id: 3,
    name: "C",
    price: 15000,
    description: "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
    category: "tablet",
  },
  {
    id: 4,
    name: "D",
    price: 10000,
    description: "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
    category: "audio",
  },
  {
    id: 5,
    name: "E",
    price: 10000,
    description: "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
    category: "phone",
  },
  {
    id: 6,
    name: "F",
    price: 10000,
    description: "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
    category: "tablet",
  },
];

export default async function ProductDetailPage({
  searchParams,
}: ProductDetailPageProps) {
  const { search } = await searchParams;
  // const product = products.find((p) => p.id === parseInt(id));
  const filteredProducts = search
    ? products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()),
      )
    : products;

  // if (!product) {
  //   return (
  //     <main style={{ padding: "2rem" }}>
  //       <h1>ไม่พบสินค้า</h1>
  //     </main>
  //   );
  // }

  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "1.5rem" }}>รายการสินค้า</h1>

      <form style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          name="search"
          defaultValue={search || ""}
          placeholder="ค้นหาสินค้า..."
          style={{
            width: "100%",
            padding: "0.75rem",
            fontSize: "1rem",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        />
      </form>

      {filteredProducts.length === 0 ? (
        <p style={{ color: "#666" }}>ไม่พบสินค้าที่ค้นหา</p>
      ) : (
        <>
          <p style={{ marginBottom: "1rem", color: "#666" }}>
            พบ {filteredProducts.length} รายการ{" "}
            {search && ` สำหรับ "${search}"`}
          </p>
          <div style={{ display: "grid", gap: "1rem" }}>
            {filteredProducts.map((product) => (
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
                  ฿ {product.price.toLocaleString()}
                </p>
              </Link>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
