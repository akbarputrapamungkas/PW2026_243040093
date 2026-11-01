import React from "react";

interface KartuProyekProps {
  judul: string;
  deskripsi: string;
  tagar: string[];
  repoUrl: string;
  gradientAccent: string;
  emoji: string;
}

function KartuProyek({ judul, deskripsi, tagar, repoUrl, gradientAccent, emoji }: KartuProyekProps) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "16px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-6px)";
        el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.5)";
        el.style.borderColor = "rgba(255,255,255,0.25)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
        el.style.borderColor = "rgba(255,255,255,0.1)";
      }}
    >
      {/* Decorative glow blob */}
      <div
        style={{
          position: "absolute",
          top: "-30px",
          right: "-30px",
          width: "120px",
          height: "120px",
          background: gradientAccent,
          borderRadius: "50%",
          filter: "blur(50px)",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "10px",
            background: gradientAccent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            flexShrink: 0,
          }}
        >
          {emoji}
        </div>
        <h3
          style={{
            margin: 0,
            fontSize: "16px",
            fontWeight: "700",
            color: "#f1f5f9",
            letterSpacing: "0.3px",
          }}
        >
          {judul}
        </h3>
      </div>

      {/* Deskripsi */}
      <p
        style={{
          margin: 0,
          fontSize: "13px",
          color: "#94a3b8",
          lineHeight: "1.6",
          flexGrow: 1,
        }}
      >
        {deskripsi}
      </p>

      {/* Tagar Teknologi */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {tagar.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "3px 10px",
              borderRadius: "999px",
              fontSize: "11px",
              fontWeight: "600",
              background: "rgba(255,255,255,0.08)",
              color: "#cbd5e1",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Tombol Repo */}
      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: "10px 18px",
          borderRadius: "10px",
          background: gradientAccent,
          color: "#fff",
          fontWeight: "700",
          fontSize: "13px",
          textDecoration: "none",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          transition: "opacity 0.2s ease, transform 0.2s ease",
          letterSpacing: "0.3px",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
          (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.03)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
          (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        Lihat Repositori GitHub
      </a>
    </div>
  );
}

export default KartuProyek;
