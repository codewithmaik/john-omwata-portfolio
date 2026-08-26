import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0f211a",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#7fa672",
            fontSize: 24,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: "50%",
              border: "2px solid #7fa672",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            OJ
          </div>
          Freelance Web Developer · Kampala, Uganda
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          Websites that load fast, look sharp, and turn visitors into
          clients.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 28,
            color: "#c9d9c7",
          }}
        >
          Omwata John Charles
        </div>
      </div>
    ),
    size,
  );
}
