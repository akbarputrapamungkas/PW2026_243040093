import React from "react";

interface ItemMatkulProps {
  id: number;
  kode: string;
  nama: string;
  sks: number;
  hari: string;
}

const hariColor: Record<string, string> = {
  Senin:  "#dbeafe",
  Selasa: "#fce7f3",
  Rabu:   "#dcfce7",
  Kamis:  "#fef9c3",
  Jumat:  "#ede9fe",
  Sabtu:  "#f3f4f6",
};

const hariTextColor: Record<string, string> = {
  Senin:  "#1d4ed8",
  Selasa: "#be185d",
  Rabu:   "#15803d",
  Kamis:  "#92400e",
  Jumat:  "#6d28d9",
  Sabtu:  "#374151",
};

function ItemMatkul({ kode, nama, sks, hari }: ItemMatkulProps) {
  const bgColor = hariColor[hari] ?? "#f3f4f6";
  const textColor = hariTextColor[hari] ?? "#374151";

  return (
    <div
      style={{
        padding: "14px 16px",
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "background 0.15s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "#f9fafb";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "#ffffff";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Hari badge */}
        <span
          style={{
            background: bgColor,
            color: textColor,
            fontSize: "11px",
            fontWeight: "600",
            padding: "3px 8px",
            borderRadius: "4px",
            flexShrink: 0,
            minWidth: "52px",
            textAlign: "center",
          }}
        >
          {hari}
        </span>

        <div>
          <span style={{ fontSize: "12px", color: "#9ca3af", marginRight: "6px" }}>
            {kode}
          </span>
          <span style={{ fontSize: "14px", color: "#111827", fontWeight: "500" }}>
            {nama}
          </span>
        </div>
      </div>

      <span
        style={{
          fontSize: "12px",
          color: "#6b7280",
          flexShrink: 0,
          marginLeft: "12px",
        }}
      >
        {sks} SKS
      </span>
    </div>
  );
}

export default ItemMatkul;
