import React, {
	createContext,
	memo,
	ReactNode,
	useContext,
	useEffect,
	useMemo,
	useRef,
} from "react";
import {
	Command,
	CommandInput,
	CommandItem,
	CommandList,
	useCommand,
	usePages,
	CommandGroup,
} from "cmdk";
import { DialogRoot } from "@components/molecules/dialog";
import { useRouter } from "next/router";
import tinykeys from "@lib/tinykeys";
import { Button } from "@components/atoms/button";

const CommandData = createContext({});
const useCommandData = () => useContext(CommandData);

const CommandMenu = memo(() => {
	const listRef = useRef();
	const commandRef = useRef();
	const heightRef = useRef();
	const [open, setOpen] = React.useState(false);
	const router = useRouter();
	const commandProps = useCommand({
		label: "Site Navigation",
	});
	const [pages, setPages] = usePages(commandProps);

	const { search } = commandProps;
	const Items = pages[pages.length - 1];

	const keymap = useMemo(() => {
		return {
			"Meta+k": () => {
				setOpen(true);
			},
		};
	}, [router, setPages]);

	// Register the keybinds globally
	useEffect(() => {
		const unsubs = [tinykeys(window, keymap)];
		return () => {
			unsubs.forEach((unsub) => unsub());
		};
	}, [keymap]);

	// useEffect(() => {
	// 	setPages([DefaultItems]);
	// }, [setPages]);

	return (
		<>
			{/* Dialog */}
			<Button variant="ghostViolet" onClick={() => setOpen(!open)}>
				⌘+k or Click me
			</Button>
			<DialogRoot open={open} onOpenChange={setOpen}>
				<Command {...commandProps} ref={commandRef}>
					<CommandInput placeholder="Type a command or search..." />

					<div ref={heightRef}>
						<CommandList ref={listRef}>
							<CommandData.Provider value={{ pages, search, setPages, keymap }}>
								<Item value="Themes" keybind="t" closeOnCallback={false} />

								<Group title="Collection">
									<Item value="Reading" keybind="g r" />
									<Item value="Design" keybind="g d" />
									<Item value="Keyboards" keybind="g k" />
									<Item value="Music" keybind="g m" />
									<Item value="Projects" keybind="g p" />
									<Item value="Quotes" keybind="g q" />
									<Item value="Words" keybind="g w" />
									<Item value="Ideas" keybind="g i" />
								</Group>

								<Group title="Navigation">
									<Item value="Home" keybind="g h" />
									<Item value="Contact" keybind="g c" />
								</Group>

								<Group title="Social">
									<Item
										value="GitHub"
										callback={() =>
											window.open("https://github.com/pacocoursey", "_blank")
										}
									/>
									<Item value="Twitter" keybind="g t" />
								</Group>
							</CommandData.Provider>
						</CommandList>
					</div>
				</Command>
			</DialogRoot>
		</>
	);
});

CommandMenu.displayName = "CommandMenu";
export default CommandMenu;

type ItemProps = {
	value: string;
	icon?: ReactNode;
	children?: any;
	callback?: () => void;
	closeOnCallback?: boolean;
	keybind?: string;
	props?: any;
};

const Item = ({
	icon,
	children,
	callback,
	closeOnCallback = true,
	keybind,
	value,
	...props
}: ItemProps) => {
	// @ts-ignore
	const { keymap } = useCommandData();

	const cb = () => {
		if (callback) {
			callback();
		} else {
			keymap[keybind]?.();
		}

		// if (closeOnCallback) {
		// 	setOpen(false);
		// }
	};

	return (
		<CommandItem {...props} callback={cb}>
			<div>
				<div>{icon}</div>
				{children || value}
			</div>

			{keybind && (
				<span>
					{keybind.includes(" ") ? (
						keybind.split(" ").map((key, i) => {
							return <kbd key={`keybind-${key}-${i}`}>{key}</kbd>;
						})
					) : (
						<kbd>{keybind}</kbd>
					)}
				</span>
			)}
		</CommandItem>
	);
};

const Label = ({ title }: { title: string }) => {
	return <div aria-hidden>{title}</div>;
};

const Group = ({ children, title }) => {
	return (
		<CommandGroup heading={<Label title={title} />}>{children}</CommandGroup>
	);
};
