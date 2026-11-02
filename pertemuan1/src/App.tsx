import React from "react";
import KartuProfil from "./KartuProfil";
import ItemMatkul from "./ItemMatkul";
import KartuProyek from "./KartuProyek";

/* ─── Data Mata Kuliah ──────────────────────────────────────────── */
const daftarPraktikum = [
  { id: 101, kode: "IF301", nama: "Praktikum Pemrograman II",               sks: 2, hari: "Senin"  },
  { id: 102, kode: "IF302", nama: "Verifikasi & Validasi Perangkat Lunak",  sks: 2, hari: "Senin"  },
  { id: 103, kode: "IF303", nama: "Praktikum Web",                          sks: 2, hari: "Selasa" },
  { id: 104, kode: "IF304", nama: "Praktikum Sistem Berorientasi Objek",    sks: 2, hari: "Selasa" },
  { id: 105, kode: "IF305", nama: "Perancangan Interaksi",                  sks: 3, hari: "Rabu"   },
  { id: 106, kode: "IF306", nama: "Bahasa Inggris",                         sks: 2, hari: "Rabu"   },
  { id: 107, kode: "IF307", nama: "Intelegensia Buatan",                    sks: 3, hari: "Kamis"  },
  { id: 108, kode: "IF308", nama: "Internet of Things",                     sks: 3, hari: "Kamis"  },
  { id: 109, kode: "IF309", nama: "Perancangan Sistem",                     sks: 3, hari: "Kamis"  },
];

/* ─── Data Proyek Portfolio ─────────────────────────────────────── */
const daftarProyek = [
  {
    id: 1,
    judul: "Website Yearbook SMAN 1 Kaliwedi",
    deskripsi:
      "Website portofolio alumni kelas IPA 1 SMAN 1 Kaliwedi yang dirancang modern, interaktif, dan responsif. Menampilkan galeri foto, profil siswa, dan kenangan kelas.",
    tagar: ["HTML", "TailwindCSS", "JavaScript"],
    repoUrl: "https://akbarputrapamungkas.github.io/yearbook-SMANKA/vngrd-science-one/",
    emoji: "📸",
  },
  {
    id: 2,
    judul: "Tugas Kuliah Internet & Web",
    deskripsi:
      "Kumpulan repositori dan project praktikum kuliah Internet & Teknologi Web di Universitas Pasundan. Berisi berbagai latihan dan tugas pemrograman web.",
    tagar: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/akbarputrapamungkas/itw2024_243040093",
    emoji: "📚",
  },
  {
    id: 3,
    judul: "Website Resmi Menwa UNPAS",
    deskripsi:
      "Website profil resmi Resimen Mahasiswa (Menwa) Universitas Pasundan sebagai pusat informasi publik. Menampilkan berita, kegiatan, dan profil organisasi.",
    tagar: ["TailwindCSS", "HTML", "CSS"],
    repoUrl: "https://www.menwaunpas.com",
    emoji: "🎖️",
  },
  {
    id: 4,
    judul: "Home Server & CI/CD Infrastructure",
    deskripsi:
      "Otomatisasi deployment server lokal, konfigurasi SSL Nginx Reverse Proxy, monitoring status dengan Grafana, dan deploy web otomatis sebagai production infrastructure.",
    tagar: ["Docker", "Nginx", "Linux"],
    repoUrl: "https://github.com/akbarputrapamungkas/PW2026_243040093",
    emoji: "🖥️",
  },
];

/* ─── Helper: Section Heading ───────────────────────────────────── */
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2
        style={{
          margin: 0,
          fontSize: "15px",
          fontWeight: "600",
          color: "#111827",
          letterSpacing: "0.6px",
          textTransform: "uppercase",
        }}
      >
        {children}
      </h2>
      <div
        style={{
          marginTop: "8px",
          height: "1px",
          background: "#e5e7eb",
        }}
      />
    </div>
  );
}

/* ─── App ───────────────────────────────────────────────────────── */
function App() {
  const notifikasiSapaan = () => {
    alert(
      "Selamat datang di Modul 1!\nAnda berhasil menguasai fondasi arsitektur React JS.\nTeruslah berkarya!"
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f9fafb",
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        color: "#111827",
      }}
    >
      {/* ── Main Container */}
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "48px 24px" }}>

        {/* ── Header ── */}
        <header style={{ marginBottom: "48px" }}>
          <p
            style={{
              margin: "0 0 8px 0",
              fontSize: "13px",
              color: "#6b7280",
              letterSpacing: "0.5px",
            }}
          >
            Laboratorium Informatika · Modul 1
          </p>
          <h1
            style={{
              margin: "0 0 6px 0",
              fontSize: "26px",
              fontWeight: "700",
              color: "#111827",
              lineHeight: 1.3,
            }}
          >
            Praktikum Pemrograman Web
          </h1>
          <p style={{ margin: 0, color: "#6b7280", fontSize: "14px" }}>
            Pengenalan React JS &amp; Vite — Arsitektur Komponen Modern
          </p>
          <div style={{ marginTop: "20px", height: "1px", background: "#e5e7eb" }} />
        </header>

        {/* ── Section 1: Profil ── */}
        <section style={{ marginBottom: "44px" }}>
          <SectionHeading>Profil Mahasiswa</SectionHeading>
          <KartuProfil
            nama="Akbar Putra Pamungkas"
            npm="243040093"
            kelas="IF-Praktikum-E"
            status="Aktif"
            fotoUrl=""
          />
        </section>

        {/* ── Section 2: Daftar Matkul ── */}
        <section style={{ marginBottom: "44px" }}>
          <SectionHeading>Jadwal Mata Kuliah Semester Ini</SectionHeading>
          <div style={{ display: "grid", gap: "8px" }}>
            {daftarPraktikum.map((matkul) => (
              <ItemMatkul key={matkul.id} {...matkul} />
            ))}
          </div>
        </section>

        {/* ── Section 3: Showcase Portfolio ── */}
        <section style={{ marginBottom: "44px" }}>
          <SectionHeading>Showcase Portofolio Mini</SectionHeading>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "12px",
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
              background: "#1d4ed8",
              color: "#fff",
              padding: "10px 28px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "14px",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#1e40af";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#1d4ed8";
            }}
          >
            Uji Interaktivitas Event
          </button>
          <p style={{ marginTop: "8px", fontSize: "12px", color: "#9ca3af" }}>
            Klik untuk konfirmasi penguasaan modul
          </p>
        </div>

        {/* Footer */}
        <footer
          style={{
            textAlign: "center",
            borderTop: "1px solid #e5e7eb",
            paddingTop: "20px",
          }}
        >
          <p style={{ margin: 0, fontSize: "12px", color: "#9ca3af" }}>
            © 2026 · PW2026_243040093 · Praktikum Pemrograman Web · Informatika
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
