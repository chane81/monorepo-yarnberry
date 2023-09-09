import glob from 'tiny-glob';
import { defineConfig, Options } from 'tsup';

export default defineConfig(async (options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ['src/**/*.tsx'],
  format: ['esm', 'cjs'],
  // entry: await glob('./src/**/!(*.d|*.spec).tsx'),
  // outExtension: ({ format }) => {
  //   return {
  //     js: `.${format}.js`
  //   };
  // },
  dts: true,
  minify: true,
  clean: true,
  external: ['react'],
  ...options
}));
