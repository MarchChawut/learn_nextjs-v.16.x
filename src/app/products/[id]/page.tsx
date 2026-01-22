interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}
const products = [
  {
    id: 1,
    name: "โทรศัพท์มือถือ Samsung Galaxy S24",
    price: 25900,
    description: "สมาร์ทโฟนรุ่นล่าสุดพร้อมกล้อง AI และหน้าจอ Dynamic AMOLED 2X",
  },
  {
    id: 2,
    name: "แล็ปท็อป MacBook Air M3",
    price: 42900,
    description:
      "แล็ปท็อปบางเบาพร้อมชิป M3 ประสิทธิภาพสูงและแบตเตอรี(ใช้งานได้ยาวนาน",
  },
  {
    id: 3,
    name: "หูฟังไร้สาย AirPods Pro",
    price: 8990,
    description:
      "หูฟังระดับพรีเมียมพร้อมActive Noise Cancellation และ Spatial Audio",
  },
  {
    id: 4,
    name: "แท็บเล็ต iPad Air",
    price: 21900,
    description:
      "แท็บเล็ตอเนกประสงค์พร้อมชิป M2และจอ Liquid Retina ขนาด 11 นิ<ว",
  },
];
export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) {
    return (
      <main style={{ padding: "2rem" }}>
        <h1>ไม่พบสินค้า</h1>
        <p>ขออภัย ไม่พบสินค้าที(คุณกําลังมองหา</p>
      </main>
    );
  }
  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{product.name}</h1>
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "2rem",
          borderRadius: "8px",
          marginBottom: "1rem",
        }}
      >
        <p style={{ fontSize: "1.5rem", color: "#0070f3", fontWeight: "bold" }}>
          ฿{product.price.toLocaleString()}
        </p>
      </div>
      <p style={{ lineHeight: "1.6", color: "#666" }}>{product.description}</p>
    </main>
  );
}
