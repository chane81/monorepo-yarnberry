import { defineConfig, Options } from 'tsup';

export default defineConfig(async (options: Options) => ({
  treeshake: true,
  splitting: true,
  legacyOutput: false,
  entry: ['src/**/*.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  minify: true,
  clean: true,
  ...options
}));
