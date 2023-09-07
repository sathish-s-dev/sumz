import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	esbuild: {
		loader: 'tsx',
	},
	root: './',
	build: {
		outDir: './dist',
	},
	optimizeDeps: {
		esbuildOptions: {
			loader: {
				'.js': 'jsx',
				'.ts': 'tsx',
			},
		},
	},
	plugins: [react()],
});
