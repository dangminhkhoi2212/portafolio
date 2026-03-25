/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/dangminhkhoi2212/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/Dang_Minh_Khoi_Resume.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: "attachment; filename=Dang_Minh_Khoi_Resume.pdf",
          },
        ],
      },
    ]
  },
}

export default nextConfig
