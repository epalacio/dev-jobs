import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	safelist: ['bg-[**]'],
	theme: {
		fontSize: {
			sm: ['14px', '18px'],
			base: ['16px', '26px'],
			lg: ['20px', '24px'],
			xl: ['24px', '29px'],
			'2xl': ['28px', '34px'],
		},
		extend: {
			colors: {
				violet: '#5964e0',
				lightviolet: '#939BF4',
				verydarkblue: '#19202D',
				midnight: '#121721',
				darkgray: '#6E8098',
				gray: '#9DAEC2',
				lightgray: '#F4F6F8',
			},
			fontFamily: {
				KumbhSans: ['KumbhSans', 'sans-serif'],
			},
			borderRadius: {
				xl: '1rem',
			},
		},
	},
	plugins: [],
};
export default config;
