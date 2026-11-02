import React from "react";
import BadgeSkill from "./BadgeSkill";

interface KartuProfilProps {
  nama: string;
  npm: string;
  kelas: string;
  status: string;
  fotoUrl?: string;
}

const daftarKeahlian: { namaSkill: string; level: "Pemula" | "Menengah" | "Mahir" }[] = [
  { namaSkill: "HTML / CSS",   level: "Mahir"    },
  { namaSkill: "PHP",          level: "Menengah" },
  { namaSkill: "SQL",          level: "Menengah" },
  { namaSkill: "Tailwind CSS", level: "Mahir"    },
  { namaSkill: "Bootstrap",    level: "Menengah" },
  { namaSkill: "JavaScript",   level: "Pemula"   },
];

function KartuProfil({ nama, npm, kelas, status, fotoUrl }: KartuProfilProps) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "24px",
      }}
    >
      {/* Header profil */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {/* Avatar */}
        <img
          src={
            fotoUrl ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(nama)}&background=e5e7eb&color=374151&size=80&bold=true`
          }
          alt={`Foto ${nama}`}
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "1px solid #e5e7eb",
            flexShrink: 0,
          }}
        />

        {/* Info */}
        <div>
          <h3
            style={{
              margin: "0 0 4px 0",
              fontSize: "18px",
              fontWeight: "600",
              color: "#111827",
            }}
          >
            {nama}
          </h3>
          <p style={{ margin: "0 0 2px 0", fontSize: "13px", color: "#6b7280" }}>
            NPM: <span style={{ color: "#374151", fontWeight: "500" }}>{npm}</span>
          </p>
          <p style={{ margin: "0 0 8px 0", fontSize: "13px", color: "#6b7280" }}>
            Kelas: <span style={{ color: "#374151", fontWeight: "500" }}>{kelas}</span>
          </p>
          <span
            style={{
              display: "inline-block",
              padding: "2px 10px",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: "500",
              background: status === "Aktif" ? "#dcfce7" : "#fef9c3",
              color: status === "Aktif" ? "#15803d" : "#92400e",
              border: `1px solid ${status === "Aktif" ? "#bbf7d0" : "#fde68a"}`,
            }}
          >
            {status === "Aktif" ? "Mahasiswa Aktif" : status}
          </span>
        </div>
      </div>

      {/* Daftar Keahlian */}
      <div
        style={{
          marginTop: "20px",
          paddingTop: "16px",
          borderTop: "1px solid #f3f4f6",
        }}
      >
        <p
          style={{
            margin: "0 0 10px 0",
            fontSize: "12px",
            fontWeight: "600",
            color: "#9ca3af",
            textTransform: "uppercase",
            letterSpacing: "0.6px",
          }}
        >
          Keahlian
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {daftarKeahlian.map((skill) => (
            <BadgeSkill key={skill.namaSkill} namaSkill={skill.namaSkill} level={skill.level} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default KartuProfil;
