import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			violet: '#5964e0',
			lightViolet: '#939BF4',
			veryDarkBlue: '#19202D',
			midnight: '#121721',
			darkGrey: '#6E8098',
			gray: '#9DAEC2',
			lightGray: '#F4F6F8',
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontFamily: {
				KumbhSans: ['KumbhSans', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
export default config;
