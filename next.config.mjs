/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirect from root to /component-example
  async redirects() {
    return [
      {
        source: "/",
        destination: "/component-example",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
