module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Set-Cookie",
            value: "SameSite=Lax; Secure",
          },
        ],
      },
    ];
  },
};
