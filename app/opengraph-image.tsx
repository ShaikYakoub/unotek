import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Unotek | Premium AAC Blocks";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e3a8a 45%, #60a5fa 100%)",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.12,
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #ffffff 0, transparent 28%), radial-gradient(circle at 80% 70%, #ffffff 0, transparent 25%)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          padding: "56px 72px",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 12,
              background: "#ffffff",
              color: "#1d4ed8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 900,
            }}
          >
            U
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 800,
              letterSpacing: "0.04em",
            }}
          >
            UNOTEK
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#bfdbfe",
            }}
          >
            Premium AAC Blocks
          </div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 900,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            Engineered For Faster, Lighter, Smarter Construction.
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: "#dbeafe",
            }}
          >
            66% Lighter. 15% Steel Savings. 35% Labor Reduction.
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
