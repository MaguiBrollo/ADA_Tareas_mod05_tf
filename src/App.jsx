import * as React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey, deepPurple } from "@mui/material/colors";
import { Box, Typography } from "@mui/material";

import { MenuBar } from "./Componentes/MenuBar";

import "./App.css";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
	const [mode, setMode] = React.useState("light");
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[]
	);
	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					...(mode === "light"
						? {
								// palette values for light mode
								primary: grey,
								divider: grey[200],
								background: {
									default: grey[500],
									paper: grey[800],
								},
								text: {
									primary: "#fff",
									secondary: grey[200],
								},
								button: {
									hover: grey[900],
								},
						  }
						: {
								// palette values for dark mode
								primary: deepPurple,
								divider: deepPurple[700],
								background: {
									default: "#8E8EFF",
									paper: "#262654",
								},
								text: {
									primary: "#fff",
									secondary: grey[200],
								},
								button: {
									hover: "#2A2239",
								},
						  }),
				},
			}),
		[mode]
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<Box
					sx={{
						width: "100%",
						minHeight: "100vh",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						bgcolor: "background.default", //"#8E8EFF",
					}}
				>
					{/*  ----  NavBar  -------*/}
					<MenuBar ColorModeContext={ColorModeContext} />

					{/*  ----  Título  -------*/}
					<Typography
						sx={{
							color: "text.secondary",
							display: "flex",
							alignItems: "center",
							margin: "10px",
							fontSize: "2rem",
						}}
					>
						Administrador de Tareas
					</Typography>
				</Box>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
