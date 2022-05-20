import type { ConfigEnv, PluginOption } from 'vite'
import autoImport from './auto-import'
import visualizer from './visualizer'

/**
 * vite插件
 * @param configEnv - 环境
 * @param srcPath - src路径
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(
  configEnv: ConfigEnv,
  viteEnv: ImportMetaEnv,
): (PluginOption | PluginOption[])[] {
  const plugins = [
    autoImport,
  ]

  if (configEnv.command === 'build' && viteEnv.VITE_VISUALIZER === 'true')
    plugins.push(visualizer)

  return plugins
}
