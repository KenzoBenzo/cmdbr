import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { keyframes, styled } from "@stitches/react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@components/atoms/button";

const IconButton = styled("button", {
	all: "unset",
	fontFamily: "inherit",
	borderRadius: "100%",
	height: 25,
	width: 25,
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	color: "$violet11",
	position: "absolute",
	top: 10,
	right: 10,

	"&:hover": { backgroundColor: "violet4" },
	"&:focus": { boxShadow: `0 0 0 2px ${"violet7"}` },
});

const overlayShow = keyframes({
	"0%": { opacity: 0 },
	"100%": { opacity: 1 },
});

const contentShow = keyframes({
	"0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
	"100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const DialogOverlay = styled(DialogPrimitive.Overlay, {
	backgroundColor: "$blackA9",
	position: "fixed",
	inset: 0,
	"@media (prefers-reduced-motion: no-preference)": {
		animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
	},
});

const StyledContent = styled(DialogPrimitive.Content, {
	backgroundColor: "white",
	borderRadius: 6,
	boxShadow:
		"hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
	position: "fixed",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "90vw",
	maxWidth: "450px",
	maxHeight: "85vh",
	padding: 25,
	"@media (prefers-reduced-motion: no-preference)": {
		animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
		willChange: "transform",
	},
	"&:focus": { outline: "none" },
});

export const DialogTitle = styled(DialogPrimitive.Title, {
	fontFamily: "$system",
	fontSize: "$3xl",
	margin: 0,
	fontWeight: 500,
	color: "$slate12",
});

const Root = ({ children, ...props }) => {
	return (
		<DialogPrimitive.Root {...props}>
			<DialogOverlay />
			<DialogContent>{children}</DialogContent>
		</DialogPrimitive.Root>
	);
};

export const DialogRoot = Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogDescription = DialogPrimitive.Description;
export const DialogContent = StyledContent;
export const DialogClose = DialogPrimitive.Close;

const Dialog = ({ /*children,*/ ...props }) => (
	<DialogPrimitive.Root {...props}>
		<DialogTrigger asChild>
			<Button variant="ghostViolet">⌘+k or Click me</Button>
		</DialogTrigger>
		<DialogOverlay />
		<DialogContent>
			<DialogTitle>Hello world</DialogTitle>
			<DialogPrimitive.Description />
			<DialogClose asChild>
				<IconButton>
					<Cross2Icon />
				</IconButton>
			</DialogClose>
			{/* {children} */}
		</DialogContent>
	</DialogPrimitive.Root>
);

export default Dialog;
