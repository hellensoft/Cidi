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
				textBlue: "#111C4266",
				greenPrimary: "#59BA51",
				sectionGray: "#3A415408",
				borderGray: "#3A415433",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
