module.exports = {
  extends: ["@turbo-repo/eslint-config"], // Extend from global config
  parserOptions: {
    project: ["./tsconfig.app.json", "./tsconfig.node.json"], 
    tsconfigRootDir: __dirname, 
  },
  rules: {   
    "no-console": "error", 
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/react-in-jsx-scope": "off", 
    "react/jsx-no-target-blank": ["error", { "allowReferrer": false }]
  },
};
