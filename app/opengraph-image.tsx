import { ImageResponse } from "next/og"
import { personalInfo } from "@/lib/data"

export const runtime = "edge"

export const alt = `${personalInfo.name} — ${personalInfo.title}`
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  const baseUrl = process.env.NEXT_PUBLIC_PORTFOLIO_URL!

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #000000, #111111)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          color: "white",
          padding: "60px",
        }}
      >
        {/* Decorative Grid or Accents */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Global Glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Avatar Container */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "32px",
            borderRadius: "50%",
            padding: "8px",
            background: "linear-gradient(to bottom, #333, #111)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          }}
        >
          <img
            src={`${baseUrl}/avatar.jpg`}
            width="140"
            height="140"
            style={{
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            marginBottom: "8px",
            color: "white",
            letterSpacing: "-0.05em",
          }}
        >
          {personalInfo.name}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: 500,
            padding: "8px 24px",
            borderRadius: "100px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            color: "#a1a1aa",
            marginBottom: "40px",
          }}
        >
          {personalInfo.title}
        </div>

        {/* Footer / Tech */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {["React", "Next.js", "TypeScript", "Tailwind"].map((tech) => (
            <div
              key={tech}
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#71717a",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#3f3f46",
                  marginRight: "8px",
                }}
              />
              {tech}
            </div>
          ))}
        </div>

        {/* Branding */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            fontSize: "20px",
            fontWeight: "bold",
            color: "rgba(255, 255, 255, 0.2)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={`${baseUrl}/favicon-32x32.png`}
            width="24"
            height="24"
            style={{ marginRight: "8px", opacity: 0.5 }}
          />
          {personalInfo.website?.replace("https://", "")}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
