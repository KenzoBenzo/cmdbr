import Head from "next/head";
import { styled } from "../stitches.config";
import { CommandBarLogo } from "../components/commandbar-logo";
import CommandMenu from "@components/organisms/command-pallette";

const Box = styled("div", {});

const Text = styled("p", {
	fontFamily: "$system",
	color: "$slate12",
});

const Link = styled("a", {
	fontFamily: "$system",
	textDecoration: "none",
	color: "$violet10",
});

const KBD = styled("kbd", {
	fontFamily: "$mono",
	backgroundColor: "$slate4",
	color: "$slate11",
	px: "$2",
	br: "$md",
});

const Container = styled("div", {
	mx: "auto",
	px: "$4",
	maxWidth: "$sm",
});

export default function Home() {
	return (
		<Box css={{ paddingY: "$6" }}>
			<Head>
				<title>CommandBar animation prototype</title>
			</Head>
			<Container>
				<CommandBarLogo />
				<Text as="h1">
					Press <KBD>⌘</KBD> + <KBD>k</KBD> to open the CommandBar.
				</Text>
				<Text>
					For more information on installing, visit{" "}
					<Link href="https://www.commandbar.com/">CommandBar.com</Link>.
				</Text>
				<CommandMenu />
			</Container>
		</Box>
	);
}
