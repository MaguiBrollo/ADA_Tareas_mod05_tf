import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

export const Modo = ({ ColorModeContext }) => {
	const theme = useTheme();
	const colorMode = React.useContext(ColorModeContext);
	return (
		<Box
			sx={{
				display: "flex",
				width: "8%",
				alignItems: "center",
				justifyContent: "center",
				bgcolor: "background.paper",
				color: "text.primary",
				borderRadius: 1,
				p: 3,
			}}
		>
			Modo {theme.palette.mode}
			<IconButton
				sx={{ ml: 1 }}
				onClick={colorMode.toggleColorMode}
				color="inherit"
			>
				{theme.palette.mode === "dark" ? <FaRegMoon /> : <FaRegSun />}
			</IconButton>
		</Box>
	);
};
