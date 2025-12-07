import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextCoreWebVitals,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "react/no-unescaped-entities": "off",
      "no-console": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@next/next/no-css-tags": "off",
      "@next/next/no-img-element": "off",
      "@next/next/no-sync-scripts": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
];

export default eslintConfig;
