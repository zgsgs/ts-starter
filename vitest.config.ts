import { defineConfig, loadEnv } from 'vite'
import { setupVitePlugins } from './internal/vite'

export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd())

  return {
    plugins: setupVitePlugins(configEnv, viteEnv),
    // https://github.com/vitest-dev/vitest
    test: {
      include: [
        'test/**/*.test.ts',
        'packages/**/*.test.ts'
      ],
      globals: true,
      // deps: {
      //   inline: ['@vue', '@vueuse', 'vue-demi'],
      // },
    },
  }
})
