import react from '@vitejs/plugin-react';
import { merge } from 'lodash';
import { PluginOption, UserConfig, defineConfig } from 'vite';

function codesandboxPlugin(): PluginOption {
  if (typeof process.env.CODESANDBOX_HOST === 'undefined') {
    return null;
  }

  return {
    name: 'codesandbox-projects-plugin',
    config: (config: UserConfig) =>
      merge({}, config, {
        server: {
          hmr: {
            clientPort: 443,
            protocol: 'wss',
          },
        },
      } as UserConfig),
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), codesandboxPlugin()],
});
