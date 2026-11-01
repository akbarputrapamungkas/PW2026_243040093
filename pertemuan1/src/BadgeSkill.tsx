import React from "react";

interface BadgeSkillProps {
  namaSkill: string;
  level: "Pemula" | "Menengah" | "Mahir";
}

const levelConfig = {
  Pemula: {
    bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    glow: "0 4px 15px rgba(102, 126, 234, 0.5)",
    icon: "🌱",
    ring: "#a78bfa",
  },
  Menengah: {
    bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    glow: "0 4px 15px rgba(245, 87, 108, 0.5)",
    icon: "⚡",
    ring: "#f472b6",
  },
  Mahir: {
    bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    glow: "0 4px 15px rgba(79, 172, 254, 0.5)",
    icon: "🔥",
    ring: "#38bdf8",
  },
};

function BadgeSkill({ namaSkill, level }: BadgeSkillProps) {
  const config = levelConfig[level];

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        background: config.bg,
        boxShadow: config.glow,
        color: "#fff",
        padding: "6px 14px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: "700",
        letterSpacing: "0.5px",
        border: `1px solid ${config.ring}`,
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        cursor: "default",
        userSelect: "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px) scale(1.05)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = config.glow.replace("0.5)", "0.8)");
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0) scale(1)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = config.glow;
      }}
    >
      <span style={{ fontSize: "13px" }}>{config.icon}</span>
      <span>{namaSkill}</span>
      <span
        style={{
          fontSize: "10px",
          opacity: 0.85,
          background: "rgba(255,255,255,0.2)",
          padding: "1px 6px",
          borderRadius: "999px",
          marginLeft: "2px",
        }}
      >
        {level}
      </span>
    </div>
  );
}

export default BadgeSkill;
