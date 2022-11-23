/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				line: '0 0 6px 4px',
			},
			backgroundImage: {
				eth: 'url(../public/eth.png)',
			},
			colors: {
				button: 'rgba(1,1,1,0)',
			},
			fontFamily: {
				montserrat: ['Montserrat'],
				lato: ['Lato'],
				garamond: ['Garamond'],
			},
		},
		variants: {
			extend: {
				borderBottom: ['last'],
				borderTop: ['first'],
			},
		},
	},
	plugins: [],
}
