import { styled } from "@stitches/react";

export const Button = styled("button", {
	all: "unset",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	borderRadius: 4,
	padding: "0 15px",
	fontSize: 15,
	lineHeight: 1,
	fontWeight: 500,
	height: 35,

	variants: {
		variant: {
			ghostIndigo: {
				backgroundColor: "$violet9",
				color: "white",
				boxShadow: `0 2px 10px $blackA7`,
				"&:hover": { backgroundColor: "$violet10" },
				// "&:focus": { boxShadow: `0 0 0 2px black` },
			},
			// green: {
			// 	backgroundColor: green.green4,
			// 	color: green.green11,
			// 	"&:hover": { backgroundColor: green.green5 },
			// 	"&:focus": { boxShadow: `0 0 0 2px ${green.green7}` },
			// },
		},
	},

	defaultVariants: {
		variant: "ghostIndigo",
	},
});
