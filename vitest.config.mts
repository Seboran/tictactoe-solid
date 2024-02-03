import { defineConfig } from 'vitest/config';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  test: {
    environment: 'happy-dom',
    coverage: {
      reporter: ['lcov', 'text'],
      include: ['src/index.ts'],
      exclude: ['src/types.ts'],
    },
    watch: false,
    globals: true,
    clearMocks: true,
    include: ['src/__tests__/*.tsx'],
  },
});
