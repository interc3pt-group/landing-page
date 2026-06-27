/** @type {import('lint-staged').Configuration} */
module.exports = {
  // Lint & auto-fix staged JS/TS source files
  '*.{js,jsx,ts,tsx,cjs,mjs}': ['oxlint --fix'],
}
