import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    localPatterns: [
      {
        pathname: "/images/**",
      },
      {
        pathname: "/api/media/file/**",
      },
    ],
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      ".cjs": [".cts", ".cjs"],
      ".js": [".ts", ".tsx", ".js", ".jsx"],
      ".mjs": [".mts", ".mjs"],
    };

    return webpackConfig;
  },
  async redirects() {
    return [
      // Core pages (trailing slash → clean URLs)
      { source: "/about/", destination: "/about", permanent: true },
      { source: "/services/", destination: "/services", permanent: true },
      { source: "/contact/", destination: "/contact", permanent: true },
      { source: "/clinician", destination: "/team", permanent: true },
      { source: "/clinician/", destination: "/team", permanent: true },

      // Therapist profiles
      { source: "/about-rachel", destination: "/team/rachel-grant", permanent: true },
      { source: "/about-rachel/", destination: "/team/rachel-grant", permanent: true },
      { source: "/about-sabah", destination: "/team/sabah-pinto", permanent: true },
      { source: "/about-sabah/", destination: "/team/sabah-pinto", permanent: true },
      { source: "/about-cynthia", destination: "/team/cynthia-ekeanyawu", permanent: true },
      { source: "/about-cynthia/", destination: "/team/cynthia-ekeanyawu", permanent: true },
      { source: "/latoya", destination: "/team/latoya-buchanan", permanent: true },
      { source: "/latoya/", destination: "/team/latoya-buchanan", permanent: true },

      // Thin / technical URLs
      { source: "/1983-2", destination: "/", permanent: true },
      { source: "/1983-2/", destination: "/", permanent: true },
      { source: "/elementor-hf/:path*", destination: "/", permanent: true },
      { source: "/author/:path*", destination: "/", permanent: true },

      // Booking conversion route → Jane App
      {
        source: "/book",
        destination: "https://balanceself-care.janeapp.com/",
        permanent: false,
      },
      {
        source: "/book/",
        destination: "https://balanceself-care.janeapp.com/",
        permanent: false,
      },
    ];
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
