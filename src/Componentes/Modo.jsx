import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

/*  ============================================  */
export const Modo = ({ ColorModeContext }) => {
	const theme = useTheme();
	const colorMode = React.useContext(ColorModeContext);

	//-----------------------------------------
	return (
		<Box
			sx={{
				color: "text.primary",
			}}
		>
			<IconButton
				sx={{
					margin: "10px",
					color: "text.primary",
					":hover": {
						color: "button.textHover",
						backgroundColor: "button.hover",
					},
				}}
				aria-label="Cambiar Modo Claro Oscuro"
				onClick={colorMode.toggleColorMode}
			>
				{theme.palette.mode === "dark" ? <FaRegMoon /> : <FaRegSun />}
			</IconButton>
		</Box>
	);
};
