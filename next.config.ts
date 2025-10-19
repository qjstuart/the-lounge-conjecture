import type { NextConfig } from "next";

const sassOptions = {
  includePaths: ["assets/styles"],
  additionalData: `
    @use "variables" as *;
    @use "mixins" as *;
  `,
};

const nextConfig: NextConfig = {
  sassOptions: {
    ...sassOptions,
    implementation: "sass-embedded",
  },
};

export default nextConfig;
