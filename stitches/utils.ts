export const utils = {
	utils: {
		// Margin short hands
		m: (value) => ({
			margin: value,
		}),
		mt: (value) => ({
			marginTop: value,
		}),
		mr: (value) => ({
			marginRight: value,
		}),
		mb: (value) => ({
			marginBottom: value,
		}),
		ml: (value) => ({
			marginLeft: value,
		}),
		mx: (value) => ({
			marginLeft: value,
			marginRight: value,
		}),
		my: (value) => ({
			marginTop: value,
			marginBottom: value,
		}),
		// Padding short hands
		p: (value) => ({
			padding: value,
		}),
		pt: (value) => ({
			paddingTop: value,
		}),
		pr: (value) => ({
			paddingRight: value,
		}),
		pb: (value) => ({
			paddingBottom: value,
		}),
		pl: (value) => ({
			paddingLeft: value,
		}),
		px: (value) => ({
			paddingLeft: value,
			paddingRight: value,
		}),
		py: (value) => ({
			paddingTop: value,
			paddingBottom: value,
		}),
		// A property for applying width/height together
		size: (value) => ({
			width: value,
			height: value,
		}),
		// An abbreviated property for border-radius
		br: (value) => ({
			borderRadius: value,
		}),
	},
};
