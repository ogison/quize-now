/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    tabWidth: 4,
    printWidth: 120,
    overrides: [
      {
        files: "*.{json,json5,html,yaml,yml}",
        options: {
          tabWidth: 2,
        },
      },
      {
        files: "*.md",
        options: {
          tabWidth: 2,
          trailingComma: "none",
        },
      },
    ],
  },
};

export default config;
