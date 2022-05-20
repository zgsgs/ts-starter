import AutoImport from 'unplugin-auto-import/vite'

// https://github.com/antfu/unplugin-auto-import
export default AutoImport({
  imports: [
    'vitest',
    // 'vue',
    // 'vue-router',
    // 'vue-i18n',
    // 'vue/macros',
    // '@vueuse/head',
    // '@vueuse/core',
  ],
  dts: 'types/auto-imports.d.ts',
})
