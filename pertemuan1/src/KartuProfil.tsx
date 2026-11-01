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
  { namaSkill: "React JS",     level: "Menengah" },
  { namaSkill: "TypeScript",   level: "Pemula"   },
  { namaSkill: "Tailwind CSS", level: "Menengah" },
  { namaSkill: "Laravel",      level: "Pemula"   },
  { namaSkill: "PostgreSQL",   level: "Mahir"    },
  { namaSkill: "Git & GitHub", level: "Mahir"    },
];

function KartuProfil({ nama, npm, kelas, status, fotoUrl }: KartuProfilProps) {
  return (
    <div
      style={{
        background: "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: "20px",
        padding: "28px",
        backdropFilter: "blur(20px)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div style={{
        position: "absolute", top: "-40px", right: "-40px",
        width: "160px", height: "160px",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        borderRadius: "50%", filter: "blur(60px)", opacity: 0.25, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-40px", left: "-20px",
        width: "120px", height: "120px",
        background: "linear-gradient(135deg, #4facfe, #00f2fe)",
        borderRadius: "50%", filter: "blur(50px)", opacity: 0.2, pointerEvents: "none",
      }} />

      {/* Header profil */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px", position: "relative" }}>
        {/* Avatar dengan ring gradient */}
        <div style={{ position: "relative", flexShrink: 0 }}>
          <div style={{
            width: "90px", height: "90px", borderRadius: "50%",
            padding: "3px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #4facfe 100%)",
          }}>
            <img
              src={fotoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(nama)}&background=1e293b&color=fff&size=84&bold=true`}
              alt={`Foto ${nama}`}
              style={{
                width: "84px", height: "84px", borderRadius: "50%",
                objectFit: "cover", display: "block",
                border: "3px solid #0f172a",
              }}
            />
          </div>
          {/* Dot status online */}
          <div style={{
            position: "absolute", bottom: "4px", right: "4px",
            width: "16px", height: "16px", borderRadius: "50%",
            background: status === "Aktif" ? "#22c55e" : "#f59e0b",
            border: "2px solid #0f172a",
            boxShadow: `0 0 8px ${status === "Aktif" ? "#22c55e" : "#f59e0b"}`,
          }} />
        </div>

        {/* Info */}
        <div style={{ flexGrow: 1 }}>
          <h3 style={{
            margin: "0 0 6px 0",
            fontSize: "20px", fontWeight: "800",
            color: "#f1f5f9", letterSpacing: "0.3px",
          }}>
            {nama}
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8" }}>
              <span style={{ color: "#64748b", marginRight: "6px" }}>NPM</span>
              <span style={{ fontWeight: "700", color: "#cbd5e1" }}>{npm}</span>
            </p>
            <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8" }}>
              <span style={{ color: "#64748b", marginRight: "6px" }}>Kelas</span>
              <span style={{ fontWeight: "600", color: "#cbd5e1" }}>{kelas}</span>
            </p>
          </div>

          {/* Status badge */}
          <div style={{ marginTop: "10px" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "5px",
              padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "700",
              background: status === "Aktif"
                ? "rgba(34, 197, 94, 0.15)"
                : "rgba(245, 158, 11, 0.15)",
              color: status === "Aktif" ? "#4ade80" : "#fbbf24",
              border: `1px solid ${status === "Aktif" ? "rgba(34,197,94,0.3)" : "rgba(245,158,11,0.3)"}`,
            }}>
              <span style={{
                width: "6px", height: "6px", borderRadius: "50%",
                background: status === "Aktif" ? "#4ade80" : "#fbbf24",
              }} />
              {status === "Aktif" ? "Mahasiswa Aktif" : status}
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{
        marginTop: "22px", paddingTop: "20px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}>
        <p style={{
          margin: "0 0 12px 0", fontSize: "11px", fontWeight: "700",
          color: "#475569", textTransform: "uppercase", letterSpacing: "1.2px",
        }}>
          ✦ Daftar Keahlian
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {daftarKeahlian.map((skill) => (
            <BadgeSkill key={skill.namaSkill} namaSkill={skill.namaSkill} level={skill.level} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default KartuProfil;
