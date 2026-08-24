import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  // GitHub Pages serves directories, not extensionless files: this emits
  // policies/viewmet-privacy-policy/index.html so both /path and /path/ resolve.
  trailingSlash: true,
};

export default nextConfig;
