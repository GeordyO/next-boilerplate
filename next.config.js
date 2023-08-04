/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  sassOptions: {
    additionalData: `@import "common/assets/css/abstracts/variables.scss";`,
  },
  trailingSlash: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
