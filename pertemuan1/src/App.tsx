import React from "react";
import KartuProfil from "./KartuProfil";
import ItemMatkul from "./ItemMatkul";
import KartuProyek from "./KartuProyek";

/* ─── Data Mata Kuliah ──────────────────────────────────────────── */
const daftarPraktikum = [
  { id: 101, kode: "IF211", nama: "Pemrograman Web (React & Laravel)",   sks: 3, hari: "Senin"  },
  { id: 102, kode: "IF212", nama: "Sistem Basis Data (PostgreSQL)",       sks: 3, hari: "Rabu"   },
  { id: 103, kode: "IF213", nama: "Rekayasa Perangkat Lunak Terapan",     sks: 3, hari: "Kamis"  },
  { id: 104, kode: "IF214", nama: "Arsitektur Sistem Terdistribusi",      sks: 2, hari: "Jumat"  },
];

/* ─── Data Proyek Portfolio ─────────────────────────────────────── */
const daftarProyek = [
  {
    id: 1,
    judul: "ReactMart E-Commerce",
    deskripsi:
      "Platform belanja online full-stack dengan fitur keranjang dinamis, autentikasi JWT, dan dashboard admin real-time menggunakan React + Node.js.",
    tagar: ["React", "Node.js", "MongoDB", "JWT", "Redux"],
    repoUrl: "https://github.com/akbarputrapamungkas/PW2026_243040093",
    gradientAccent: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    emoji: "🛒",
  },
  {
    id: 2,
    judul: "TaskFlow — Manajemen Tugas",
    deskripsi:
      "Aplikasi manajemen tugas berbasis Kanban dengan drag-and-drop, notifikasi real-time via WebSocket, dan sinkronisasi antar perangkat.",
    tagar: ["Vue.js", "Laravel", "PostgreSQL", "WebSocket", "Docker"],
    repoUrl: "https://github.com/akbarputrapamungkas/PW2026_243040093",
    gradientAccent: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    emoji: "📋",
  },
  {
    id: 3,
    judul: "GeoTrack — Peta Interaktif",
    deskripsi:
      "Aplikasi visualisasi data geospasial menggunakan Leaflet.js dan MapboxGL. Menampilkan peta panas, cluster marker, dan analitik wilayah.",
    tagar: ["TypeScript", "Leaflet.js", "FastAPI", "Redis", "Python"],
    repoUrl: "https://github.com/akbarputrapamungkas/PW2026_243040093",
    gradientAccent: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    emoji: "🗺️",
  },
  {
    id: 4,
    judul: "AI Chat — Asisten Belajar",
    deskripsi:
      "Chatbot berbasis LLM untuk membantu mahasiswa belajar pemrograman. Mendukung code highlighting, konteks percakapan panjang, dan mode evaluasi kode.",
    tagar: ["Next.js", "OpenAI API", "Prisma", "Vercel", "tRPC"],
    repoUrl: "https://github.com/akbarputrapamungkas/PW2026_243040093",
    gradientAccent: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    emoji: "🤖",
  },
];

/* ─── Helper: Section Heading ───────────────────────────────────── */
function SectionHeading({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <h2
        style={{
          margin: 0,
          fontSize: "20px",
          fontWeight: "800",
          color: "#f1f5f9",
          letterSpacing: "0.3px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: "4px",
            height: "22px",
            borderRadius: "4px",
            background: accent,
            flexShrink: 0,
          }}
        />
        {children}
      </h2>
      <div
        style={{
          marginTop: "10px",
          height: "1px",
          background: "linear-gradient(90deg, rgba(255,255,255,0.12), transparent)",
        }}
      />
    </div>
  );
}

/* ─── App ───────────────────────────────────────────────────────── */
function App() {
  const notifikasiSapaan = () => {
    alert(
      "🎉 Selamat datang di Modul 1!\nAnda berhasil menguasai fondasi arsitektur React JS.\nTeruslah berkarya! 🚀"
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0e1a 0%, #0f172a 40%, #0d1117 100%)",
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        color: "#e2e8f0",
      }}
    >
      {/* ── Animated background particles (pure CSS via pseudo blobs) */}
      <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        {[
          { top: "10%", left: "5%",  w: 300, bg: "rgba(102,126,234,0.06)" },
          { top: "60%", left: "80%", w: 250, bg: "rgba(79,172,254,0.06)"  },
          { top: "35%", left: "50%", w: 200, bg: "rgba(240,147,251,0.05)" },
        ].map((b, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: b.top, left: b.left,
              width: b.w, height: b.w,
              borderRadius: "50%",
              background: b.bg,
              filter: "blur(80px)",
            }}
          />
        ))}
      </div>

      {/* ── Main Container */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 24px", position: "relative", zIndex: 1 }}>

        {/* ── Hero Header ── */}
        <header style={{ textAlign: "center", marginBottom: "56px" }}>
          <div
            style={{
              display: "inline-block",
              padding: "6px 16px",
              background: "rgba(102,126,234,0.15)",
              border: "1px solid rgba(102,126,234,0.3)",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: "700",
              color: "#a5b4fc",
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            🎓 Laboratorium Informatika · Modul 1
          </div>
          <h1
            style={{
              margin: "0 0 12px 0",
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: "900",
              background: "linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
            }}
          >
            Praktikum Pemrograman Web
          </h1>
          <p style={{ margin: 0, color: "#64748b", fontSize: "15px", fontWeight: "400" }}>
            Pengenalan React JS &amp; Vite — Arsitektur Komponen Modern
          </p>
        </header>

        {/* ── Section 1: Profil ── */}
        <section style={{ marginBottom: "48px" }}>
          <SectionHeading accent="linear-gradient(135deg, #667eea, #764ba2)">
            👤 Profil Mahasiswa Praktikan
          </SectionHeading>
          <KartuProfil
            nama="Akbar Putra Pamungkas"
            npm="243040093"
            kelas="IF-Praktikum"
            status="Aktif"
            fotoUrl=""
          />
        </section>

        {/* ── Section 2: Daftar Matkul ── */}
        <section style={{ marginBottom: "48px" }}>
          <SectionHeading accent="linear-gradient(135deg, #4facfe, #00f2fe)">
            📚 Daftar Rencana Praktikum Semester
          </SectionHeading>
          <div style={{ display: "grid", gap: "10px" }}>
            {daftarPraktikum.map((matkul) => (
              <ItemMatkul key={matkul.id} {...matkul} />
            ))}
          </div>
        </section>

        {/* ── Section 3: Showcase Portfolio ── */}
        <section style={{ marginBottom: "48px" }}>
          <SectionHeading accent="linear-gradient(135deg, #f093fb, #f5576c)">
            🚀 Showcase Portofolio Mini
          </SectionHeading>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
              gap: "16px",
            }}
          >
            {daftarProyek.map((proyek) => (
              <KartuProyek key={proyek.id} {...proyek} />
            ))}
          </div>
        </section>

        {/* ── CTA Button ── */}
        <div style={{ textAlign: "center", paddingBottom: "40px" }}>
          <button
            onClick={notifikasiSapaan}
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "#fff",
              padding: "14px 36px",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "800",
              fontSize: "15px",
              letterSpacing: "0.5px",
              boxShadow: "0 8px 30px rgba(102, 126, 234, 0.4)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-3px) scale(1.03)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 12px 40px rgba(102,126,234,0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0) scale(1)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 30px rgba(102,126,234,0.4)";
            }}
          >
            ✨ Uji Interaktivitas Event
          </button>
          <p style={{ marginTop: "12px", fontSize: "12px", color: "#475569" }}>
            Klik untuk konfirmasi penguasaan modul
          </p>
        </div>

        {/* Footer */}
        <footer style={{ textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "20px" }}>
          <p style={{ margin: 0, fontSize: "12px", color: "#334155" }}>
            © 2026 · PW2026_243040093 · Praktikum Pemrograman Web · Informatika
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
