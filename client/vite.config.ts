import dns from 'node:dns';
import path from 'node:path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';

// Open localhost instead of 127.0.0.1
dns.setDefaultResultOrder('verbatim');

const resolvePath = (dir: string) => path.resolve(__dirname, dir);

// https://vitejs.dev/config/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const config = defineConfig(({ command, mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const isSourcemapEnabled = process.env.VITE_APP_SOURCEMAP_ENABLED === 'true';

  return {
    plugins: [
      splitVendorChunkPlugin(),
      react(),
      svgr(),
      checker({ typescript: true, enableBuild: false }),
    ],
    build: {
      sourcemap: isSourcemapEnabled,
      commonjsOptions: {
        sourceMap: isSourcemapEnabled,
      },
      outDir: resolvePath('build'),
      assetsInlineLimit: 0,
    },
    resolve: {
      alias: {
        src: resolvePath('src'),
      },
    },
    server: {
      port: 3000,
      open: true,
    },
    preview: {
      port: 4000,
    },
  };
});

export default config;
