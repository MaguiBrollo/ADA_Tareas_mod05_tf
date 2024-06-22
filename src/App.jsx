/* eslint-disable no-mixed-spaces-and-tabs */
import * as React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { Box, Typography } from "@mui/material";

//Fechas
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { MenuBar } from "./Componentes/MenuBar";
import { TareasListar } from "./Componentes/TareasListar";
import { tareasArray } from "./utils/Datos";
import { setTareas } from "./utils/LocalStorage";
import { getTareas } from "./utils/LocalStorage";

import "./App.css";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

/*  ============================================  */
function App() {
	const [tareasEnOrden, setTareasEnOrden] = React.useState(
		getTareas() || setTareas(tareasArray)
	);
	const [tipoFiltro, setTipoFiltro] = React.useState("todas");

	const [mode, setMode] = React.useState(
		localStorage.getItem("modoClaroOscuro") || "light"
	);

	localStorage.setItem("modoClaroOscuro", mode);
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
					...(mode === "dark"
						? {
								// Valores para MDOD dark

								primary: {
									main: grey[200],
								},
								secondary: {
									main: grey[900],
								},
								background: {
									default: grey[500],
									paper: grey[800],
									tableRows: grey[600],
									tableHead: grey[700],
								},
								text: {
									primary: "#FFFFFF", //blanco
									secondary: grey[200],
									iconos: grey[800],
								},
								button: {
									textHover: grey[200],
									hover: grey[900],
								},
						  }
						: {
								// Valores para MDOD light

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
									tableRows: "#6355E6",
									tableHead: "#5034c9",
								},
								text: {
									primary: "#FFFFFF", //blanco
									secondary: grey[200],
									iconos: grey[800],
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

	//----------------------------------------
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<Box
						sx={{
							width: "100%",
							minHeight: "100vh",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							bgcolor: "background.default",
						}}
					>
						{/*  ----  NavBar  -------*/}
						<MenuBar
							ColorModeContext={ColorModeContext}
							setTipoFiltro={setTipoFiltro}
							setTareasEnOrden={setTareasEnOrden}
						/>
						{/*  ----  Título  -------*/}
						<Typography
							sx={{
								color: "text.primary",
								display: "flex",
								alignItems: "center",
								margin: "10px",
								fontSize: "1.5rem",
							}}
						>
							Tareas: {tipoFiltro.toUpperCase()}
						</Typography>
						{/*  ----  TAREAS LISTAR TODAS  -------*/}
						<TareasListar
							tareasEnOrden={tareasEnOrden}
							setTareasEnOrden={setTareasEnOrden}
							tipoFiltro={tipoFiltro}
							setTipoFiltro={setTipoFiltro}
						/>
					</Box>
				</LocalizationProvider>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
