import fs from 'fs';
import vercel from '@sveltejs/adapter-vercel';

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel({
			edge: false,
			external: Object.keys(packageJson.dependencies),
			split: false
		}),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
