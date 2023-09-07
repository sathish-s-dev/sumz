// import react from '@vitejs/plugin-react';
// import { defineConfig } from 'vite';
// // import tsconfigPaths from 'vite-tsconfig-paths';

// // https://vitejs.dev/config/

// export default defineConfig(() => {
// 	const config = {
// 		esbuild: {
// 			loader: 'tsx',
// 		},
// 		root: './',
// 		build: {
// 			outDir: './dist',
// 		},
// 		optimizeDeps: {
// 			esbuildOptions: {
// 				loader: {
// 					'.js': 'jsx',
// 					'.ts': 'tsx',
// 				},
// 			},
// 		},
// 		plugins: [react()],
// 		base: '/sumz',
// 	}

// 	return config;
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
	const config = {
		plugins: [react()],
		base: '/sumz',
	};

	return config;
});
