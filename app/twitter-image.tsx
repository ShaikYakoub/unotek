import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Unotek | Premium AAC Blocks";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        background:
          "linear-gradient(130deg, #111827 0%, #1d4ed8 55%, #93c5fd 100%)",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.1,
          backgroundImage:
            "radial-gradient(circle at 10% 85%, #ffffff 0, transparent 24%), radial-gradient(circle at 78% 20%, #ffffff 0, transparent 26%)",
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
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            fontSize: 34,
            fontWeight: 800,
            letterSpacing: "0.03em",
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 12,
              background: "#ffffff",
              color: "#1d4ed8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 900,
            }}
          >
            U
          </div>
          UNOTEK
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "#bfdbfe",
            }}
          >
            Enterprise Grade AAC
          </div>
          <div
            style={{
              fontSize: 66,
              fontWeight: 900,
              lineHeight: 1.06,
              maxWidth: 980,
            }}
          >
            Premium Blocks Built For Performance.
          </div>
          <div
            style={{
              fontSize: 27,
              fontWeight: 500,
              color: "#dbeafe",
            }}
          >
            Faster execution, thermal efficiency, structural confidence.
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
