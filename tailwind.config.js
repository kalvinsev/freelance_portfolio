// tailwind.config.js
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0",
						transform: "translateY(20px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"slide-in-left": {
					"0%": {
						opacity: "0",
						transform: "translateX(-40px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)",
					},
				},
				"slide-in-up": {
					"0%": {
						opacity: "0",
						transform: "translateY(40px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"scale-in": {
					"0%": {
						opacity: "0",
						transform: "scale(0.95)",
					},
					"100%": {
						opacity: "1",
						transform: "scale(1)",
					},
				},
				"pop-in": {
					"0%": {
						opacity: "0",
						transform: "scale(0.85) translateY(10px)",
					},
					"100%": {
						opacity: "1",
						transform: "scale(1) translateY(0)",
					},
				},
			},
			animation: {
				"fade-in": "fade-in 1.2s ease-out forwards",
				"slide-in-left":
					"slide-in-left 1.2s ease-out forwards",
				"slide-in-up":
					"slide-in-up 1.2s ease-out forwards",
				"scale-in": "scale-in 1s ease-out forwards",
				"pop-in": "pop-in 0.6s ease-out forwards",
			},
		},
	},
	plugins: [],
};
