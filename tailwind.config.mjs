/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'figtree': ['Figtree Variable', 'sans-serif']
			  },
			  colors:{
				'primary': '#F4D04E',
				'secondary': '#6B6B6B',
				'tertiary': '#111111' 
			  }
		},
		fontFamily:{
			'intern': ['Inter Tight Variable','sans-serif'],
			'oswald': ['Oswald Variable','sans-serif'],
		}
	}
}