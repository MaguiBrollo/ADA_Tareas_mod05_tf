import * as React from "react";

import { Box, IconButton, Tooltip, useTheme } from "@mui/material";

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
			<Tooltip title="Cambiar Modo Claro/Oscuro">
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
			</Tooltip>
		</Box>
	);
};
