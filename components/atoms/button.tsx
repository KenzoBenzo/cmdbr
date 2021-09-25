import { styled } from "@stitches/react";

const StyledButton = styled("button", {
	all: "unset",
	fontFamily: "$system",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	borderRadius: "$md",
	padding: "$3 $4",
	lineHeight: "$base",
	fontWeight: 500,

	variants: {
		variant: {
			ghostViolet: {
				backgroundColor: "$violet3",
				color: "$violet11",
				boxShadow: `0 2px 10px $blackA7`,
				"&:hover": { backgroundColor: "$violet4" },
				"&:focus": { backgroundColor: "$violet5" },
			},
			violet: {
				backgroundColor: "$violet9",
				color: "white",
				boxShadow: `0 2px 10px $blackA7`,
				"&:hover": { backgroundColor: "$violet10" },
				"&:focus": { backgroundColor: "$violet11" },
			},
		},
	},

	defaultVariants: {
		variant: "violet",
	},
});

export const Button = ({ children, variant, ...props }) => (
	<StyledButton variant={variant} {...props}>
		{children}
	</StyledButton>
);
