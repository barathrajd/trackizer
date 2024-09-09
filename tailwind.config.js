module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					0: "#E4D3FF",
					5: "#C9A7FF",
					10: "#AD7BFF",
					20: "#924EDD",
					50: "#7722FF",
					100: "#5E00F5",
				},
				accent: {
					0: "#FFD2CC",
					50: "#FFA699",
					100: "#FF7966",
				},
				secondary: {
					100: "#00FAD9",
					50: "#7DFFEE",
				},
				grey: {
					100: "#0E0E12",
					80: "#1C1C23",
					70: "#353542",
					60: "#4E4E61",
					50: "#666680",
					40: "#83839C",
					30: "#A2A2B5",
					20: "#C1C1CD",
					10: "#E0E0E6",
				},
			},
		},
	},
	plugins: [],
};
