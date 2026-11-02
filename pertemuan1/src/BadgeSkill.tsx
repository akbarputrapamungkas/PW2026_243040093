import React from "react";

interface BadgeSkillProps {
  namaSkill: string;
  level: "Pemula" | "Menengah" | "Mahir";
}

const levelConfig = {
  Pemula: {
    bg: "#f3f4f6",
    color: "#6b7280",
    border: "#e5e7eb",
    dot: "#9ca3af",
  },
  Menengah: {
    bg: "#eff6ff",
    color: "#1d4ed8",
    border: "#bfdbfe",
    dot: "#3b82f6",
  },
  Mahir: {
    bg: "#f0fdf4",
    color: "#15803d",
    border: "#bbf7d0",
    dot: "#22c55e",
  },
};

function BadgeSkill({ namaSkill, level }: BadgeSkillProps) {
  const config = levelConfig[level];

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        background: config.bg,
        color: config.color,
        border: `1px solid ${config.border}`,
        padding: "4px 10px",
        borderRadius: "6px",
        fontSize: "12px",
        fontWeight: "500",
        cursor: "default",
        userSelect: "none",
      }}
    >
      <span
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: config.dot,
          flexShrink: 0,
        }}
      />
      {namaSkill}
      <span style={{ opacity: 0.65, fontSize: "11px" }}>· {level}</span>
    </span>
  );
}

export default BadgeSkill;
