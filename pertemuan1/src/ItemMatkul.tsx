import React from "react";

interface ItemMatkulProps {
  id: number;
  kode: string;
  nama: string;
  sks: number;
  hari: string;
}

const hariColor: Record<string, string> = {
  Senin:  "linear-gradient(135deg, #667eea, #764ba2)",
  Selasa: "linear-gradient(135deg, #f093fb, #f5576c)",
  Rabu:   "linear-gradient(135deg, #4facfe, #00f2fe)",
  Kamis:  "linear-gradient(135deg, #43e97b, #38f9d7)",
  Jumat:  "linear-gradient(135deg, #fa709a, #fee140)",
  Sabtu:  "linear-gradient(135deg, #a18cd1, #fbc2eb)",
};

function ItemMatkul({ kode, nama, sks, hari }: ItemMatkulProps) {
  const gradient = hariColor[hari] ?? "linear-gradient(135deg, #667eea, #764ba2)";

  return (
    <div
      style={{
        padding: "16px 20px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateX(6px)";
        el.style.background = "rgba(255,255,255,0.08)";
        el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateX(0)";
        el.style.background = "rgba(255,255,255,0.04)";
        el.style.boxShadow = "none";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        {/* Aksen warna kiri berdasarkan hari */}
        <div
          style={{
            width: "4px",
            height: "40px",
            borderRadius: "4px",
            background: gradient,
            flexShrink: 0,
          }}
        />
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
            <span
              style={{
                background: gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "800",
                fontSize: "14px",
              }}
            >
              {kode}
            </span>
            <span style={{ color: "#e2e8f0", fontSize: "14px", fontWeight: "500" }}>{nama}</span>
          </div>
          <div style={{ fontSize: "12px", color: "#94a3b8" }}>
            📅 {hari}
          </div>
        </div>
      </div>

      <span
        style={{
          background: gradient,
          color: "#fff",
          padding: "5px 14px",
          borderRadius: "999px",
          fontSize: "12px",
          fontWeight: "700",
          flexShrink: 0,
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        }}
      >
        {sks} SKS
      </span>
    </div>
  );
}

export default ItemMatkul;
