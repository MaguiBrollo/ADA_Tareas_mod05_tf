/* eslint-disable no-mixed-spaces-and-tabs */
import * as React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { Box, Typography } from "@mui/material";

import { MenuBar } from "./Componentes/MenuBar";
import { TareasListar } from "./Componentes/TareasListar";

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
								// Valores para MDOD light

								primary: {
									main: grey[200],
								},
								secondary: {
									main: grey[900],
								},
								background: {
									default: grey[500],
									paper: grey[800],
									table: grey[700],
								},
								text: {
									primary: "#FFFFFF", //blanco
									secondary: grey[900],
								},
								button: {
									textHover: grey[200],
									hover: grey[900],
								},
						  }
						: {
								// Valores para MDOD dark

								primary: {
									main: "#2A2239",
								},
								secondary: {
									main: "#6355E6",
								},

								background: {
									default: "#8E8EFF",
									paper: "#262654",
									table: "#6355E6",
								},
								text: {
									primary: "#FFFFFF", //blanco
									secondary: grey[900],
								},
								button: {
									textHover: grey[200],
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
							color: "text.primary",
							display: "flex",
							alignItems: "center",
							margin: "10px",
							fontSize: "2rem",
						}}
					>
						Administrador de Tareas
					</Typography>

					{/*  ----  TAREAS LISTAR TODAS  -------*/}
					<TareasListar />
				</Box>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
