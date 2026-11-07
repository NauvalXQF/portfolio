import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogAlt =
  "Muhammad Nauval Fadli — Informatics UNDIP '24 · data & self-hosted apps";

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0c0e",
          padding: "72px",
          color: "#e9edf2",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            color: "#98a2b0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 9999,
                background: "#ffb224",
              }}
            />
            <div style={{ display: "flex" }}>opankcs.com</div>
          </div>
          <div style={{ display: "flex", color: "#7d8794" }}>
            github.com/NauvalXQF
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Muhammad Nauval Fadli
          </div>
          <div style={{ marginTop: 24, fontSize: 36, color: "#98a2b0" }}>
            {"Informatics UNDIP '24 · Data & self-hosted apps"}
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, fontSize: 26, color: "#98a2b0" }}>
          <div
            style={{
              display: "flex",
              border: "1px solid #2b333d",
              borderRadius: 9999,
              padding: "10px 24px",
            }}
          >
            REKSA
          </div>
          <div
            style={{
              display: "flex",
              border: "1px solid #2b333d",
              borderRadius: 9999,
              padding: "10px 24px",
            }}
          >
            JARA
          </div>
          <div
            style={{
              display: "flex",
              border: "1px solid #2b333d",
              borderRadius: 9999,
              padding: "10px 24px",
            }}
          >
            KMS KOPI
          </div>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
