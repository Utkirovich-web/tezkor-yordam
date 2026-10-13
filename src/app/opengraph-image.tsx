import { ImageResponse } from "next/og";

export const alt = "Tezkor Yordam — Har bir soniya hayot";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

// Telegram, Facebook va boshqalarda havola ulashilganda chiqadigan rasm
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #d1fae5 0%, #e0f2fe 55%, #ffffff 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, color: "#dc2626", letterSpacing: 4 }}>
            TEZKOR YORDAM · TOSHKENT
          </div>
          <div style={{ fontSize: 92, fontWeight: 800, color: "#0f172a", marginTop: 24 }}>
            Har bir soniya —
          </div>
          <div style={{ fontSize: 92, fontWeight: 800, color: "#dc2626" }}>hayot.</div>
          <div style={{ fontSize: 32, color: "#475569", marginTop: 24, maxWidth: 640 }}>
            Tez tibbiy yordamni bitta tugma bilan chaqiring.
          </div>
        </div>
        <div
          style={{
            width: 260,
            height: 260,
            borderRadius: 999,
            background: "#dc2626",
            color: "#fff",
            fontSize: 72,
            fontWeight: 800,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 60px rgba(220,38,38,0.45)",
          }}
        >
          SOS
        </div>
      </div>
    ),
    size,
  );
}
