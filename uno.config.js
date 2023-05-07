const { defineConfig, presetUno, presetIcons } = require("unocss");

module.exports = defineConfig({
  presets: [
    presetUno(),
    presetIcons()
  ],
  rules: [
    ["m", { margin: ".25rem" }],
  ]
});
