import { defineConfig } from 'tsup';

/**
 * tsup configuration for @strata-game-library/presets
 *
 * Ensures proper Node.js ESM support with correct .js extensions
 */
export default defineConfig({
	entry: {
		index: 'src/index.ts',
		'ai/index': 'src/ai/index.ts',
		'animation/index': 'src/animation/index.ts',
		'audio/index': 'src/audio/index.ts',
		'billboards/index': 'src/billboards/index.ts',
		'camera/index': 'src/camera/index.ts',
		'characters/index': 'src/characters/index.ts',
		'clouds/index': 'src/clouds/index.ts',
		'decals/index': 'src/decals/index.ts',
		'fur/index': 'src/fur/index.ts',
		'input/index': 'src/input/index.ts',
		'lighting/index': 'src/lighting/index.ts',
		'lod/index': 'src/lod/index.ts',
		'molecular/index': 'src/molecular/index.ts',
		'particles/index': 'src/particles/index.ts',
		'physics/index': 'src/physics/index.ts',
		'postprocessing/index': 'src/postprocessing/index.ts',
		'reflections/index': 'src/reflections/index.ts',
		'shaders/index': 'src/shaders/index.ts',
		'shadows/index': 'src/shadows/index.ts',
		'state/index': 'src/state/index.ts',
		'terrain/index': 'src/terrain/index.ts',
		'ui/index': 'src/ui/index.ts',
		'vegetation/index': 'src/vegetation/index.ts',
		'water/index': 'src/water/index.ts',
		'weather/index': 'src/weather/index.ts',
	},
	format: ['esm'],
	dts: true,
	clean: true,
	sourcemap: true,
	splitting: false,
	target: 'ES2022',
	jsx: 'automatic',
	external: [
		'@strata-game-library/core',
		'@react-three/fiber',
		'react',
		'three',
		'yuka',
	],
	treeshake: true,
	minify: false,
	keepNames: true,
	banner: {
		js: '/* @strata-game-library/presets - ESM Build */',
	},
});
