/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xs: "450px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			colors: {
				darkBlue: "#111C42",
				darkBluelight: "#111C42A0",
				darkBluedark: "#111C42AA",
				darkBluedark2: "#111C42FD",
				lightText: "#FFFFFF99",
				darkText: "#3A4154",
				textBlue: "#111C4289",
				textGray: "#111C4280",
				greenPrimary: "#59BA51",
				sectionGray: "#3A415408",
				sectionBlue: "#111C4210",
				borderGray: "#3A415433",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};