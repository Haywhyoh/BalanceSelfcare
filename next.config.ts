import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // WordPress permalinks end in a slash. Match that so /about/ stays /about/
  // instead of being treated as a different URL from /about.
  trailingSlash: true,
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
      // Legacy WordPress paths. Destinations keep the trailing slash so they
      // do not bounce back through the slash redirect.
      { source: "/clinician", destination: "/team/", permanent: true },
      { source: "/clinician/", destination: "/team/", permanent: true },

      // Therapist profiles
      { source: "/about-rachel", destination: "/team/rachel-grant/", permanent: true },
      { source: "/about-rachel/", destination: "/team/rachel-grant/", permanent: true },
      { source: "/about-sabah", destination: "/team/sabah-pinto/", permanent: true },
      { source: "/about-sabah/", destination: "/team/sabah-pinto/", permanent: true },
      { source: "/about-cynthia", destination: "/team/cynthia-ekeanyawu/", permanent: true },
      { source: "/about-cynthia/", destination: "/team/cynthia-ekeanyawu/", permanent: true },
      { source: "/latoya", destination: "/team/latoya-buchanan/", permanent: true },
      { source: "/latoya/", destination: "/team/latoya-buchanan/", permanent: true },

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

const config = withPayload(nextConfig, { devBundleServerPackages: false });

const payloadHeaders = config.headers;

// Payload attaches Critical-CH to every route so the admin can read the
// color-scheme client hint. Google's sitemap fetcher will not use a response
// that carries that header, and reports that the sitemap could not be read.
config.headers = async () => {
  const headers = payloadHeaders ? await payloadHeaders() : [];

  return headers.map((rule) => {
    if (rule.source !== "/:path*") return rule;

    return {
      ...rule,
      source: "/:path((?!sitemap\\.xml$|robots\\.txt$).*)",
    };
  });
};

export default config;
