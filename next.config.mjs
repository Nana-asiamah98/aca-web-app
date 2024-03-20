/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
  env: {
    NEXT_PUBLIC_CMS_API_URL: "https://site-api.datocms.com",
    NEXT_PUBLIC_CMS_API_TOKEN: "51f39259855732db02d00699f41740",
    NEXT_PUBLIC_CONTENTFUL_SPACE_ID: "373i90l99opx",
    NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN:
      "4E_Cf6r5RsY9CCkMQW7xd6eBmu-jDEqBhzDjc5-38PQ",
    NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN:
      "gca84TzMut1iGXe82GOhyqh7UDecucuO-Kw1D2I7sL8",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        // pathname: "/account123/**",
      },
      /*  {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        // pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
        port: "",
        // pathname: "/account123/**",
      }, */
    ],
  },
};

export default nextConfig;
