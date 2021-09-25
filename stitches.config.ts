import { createStitches } from "@stitches/react";
import {
	slate,
	blue,
	red,
	green,
	violet,
	slateDark,
	blueDark,
	redDark,
	greenDark,
	violetDark,
	blackA,
} from "@radix-ui/colors";
import { utils } from "./stitches/utils";

export const {
	config,
	createTheme,
	css,
	getCssText,
	globalCss,
	styled,
	theme,
} = createStitches({
	theme: {
		// color, background-color, border-color
		// 1 App background
		// 2 Subtle background
		// 3 UI element background
		// 4 Hovered UI element background.
		// 5 Active / Selected UI element background.
		// 6 Subtle borders and separators.
		// 7 UI element border and focus rings
		// 8 Hovered UI element border
		// 9 Solid backgrounds.
		// 10 Hovered solid backgrounds.
		// 11 Low-contrast text.
		// 12 High-contrast text.
		colors: {
			...blackA,
			...slate,
			...blue,
			...red,
			...green,
			...violet,
		},
		// margin, margin-top, margin-right, margin-bottom, margin-left, padding, padding-top, padding-right, padding-bottom, padding-left, grid-gap, grid-column-gap, grid-row-gap
		space: {
			px: "1px",
			0.5: "0.125rem",
			1: "0.25rem",
			1.5: "0.375rem",
			2: "0.5rem",
			2.5: "0.625rem",
			3: "0.75rem",
			3.5: "0.875rem",
			4: "1rem",
			5: "1.25rem",
			6: "1.5rem",
			7: "1.75rem",
			8: "2rem",
			9: "2.25rem",
			10: "2.5rem",
			12: "3rem",
			14: "3.5rem",
			16: "4rem",
			20: "5rem",
			24: "6rem",
			28: "7rem",
			32: "8rem",
			36: "9rem",
			40: "10rem",
			44: "11rem",
			48: "12rem",
			52: "13rem",
			56: "14rem",
			60: "15rem",
			64: "16rem",
			72: "18rem",
			80: "20rem",
			96: "24rem",
		},
		// width, height, min-width, max-width, min-height, max-height
		sizes: {
			px: "1px",
			0.5: "0.125rem",
			1: "0.25rem",
			1.5: "0.375rem",
			2: "0.5rem",
			2.5: "0.625rem",
			3: "0.75rem",
			3.5: "0.875rem",
			4: "1rem",
			5: "1.25rem",
			6: "1.5rem",
			7: "1.75rem",
			8: "2rem",
			9: "2.25rem",
			10: "2.5rem",
			12: "3rem",
			14: "3.5rem",
			16: "4rem",
			20: "5rem",
			24: "6rem",
			28: "7rem",
			32: "8rem",
			36: "9rem",
			40: "10rem",
			44: "11rem",
			48: "12rem",
			52: "13rem",
			56: "14rem",
			60: "15rem",
			64: "16rem",
			72: "18rem",
			80: "20rem",
			96: "24rem",
			sm: "30rem",
			md: "48rem",
			lg: "62rem",
			xl: "80rem",
			"2xl": "96rem",
		},
		// font-size
		fontSizes: {
			xs: "8px",
			sm: "12px",
			md: "16px",
			lg: "18px",
			xl: "20px",
			"2xl": "24px",
			"3xl": "32px",
			"4xl": "40px",
			"5xl": "48px",
			"6xl": "64px",
		},
		// font-family
		fonts: {
			system: "Arial, system-ui",
			mono: "JetBrains mono, monospace",
		},
		// font-weight
		fontWeights: {
			100: 100,
			200: 200,
			300: 300,
			400: 400,
			500: 500,
			600: 600,
			700: 700,
			800: 800,
			900: 900,
		},
		// line-height
		lineHeights: {
			tiny: "0.8",
			normal: "normal",
			base: "1",
			shorter: "1.2",
			short: "1.4",
			tall: "1.6",
			taller: "2",
		},
		// letter-spacing
		letterSpacings: {
			tighter: "-0.05em",
			tight: "-0.025em",
			normal: "0",
			wide: "0.025em",
			wider: "0.05em",
			widest: "0.1em",
		},
		// border-width
		// borderWidths: {},
		// border-style
		// borderStyles: {},
		// border-radius
		radii: {
			none: "0",
			sm: "0.125rem",
			base: "0.25rem",
			md: "0.375rem",
			lg: "0.5rem",
			xl: "0.75rem",
			"2xl": "1rem",
			"3xl": "1.5rem",
			full: "9999px",
		},
		// box-shadow, text-shadow
		// shadows: {},
		// z-index
		// zIndices: {},
		// transition
		// transitions: {},
	},
	...utils,
	media: {
		sm: "30em",
		md: "48em",
		lg: "62em",
		xl: "80em",
		"2xl": "96em",
	},
});

export const darkTheme = createTheme("dark-theme", {
	colors: {
		...slateDark,
		...blueDark,
		...redDark,
		...greenDark,
		...violetDark,
	},
});
