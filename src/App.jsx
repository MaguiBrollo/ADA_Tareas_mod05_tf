/* eslint-disable no-mixed-spaces-and-tabs */
import * as React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey, deepPurple } from "@mui/material/colors";
import { Box, Typography } from "@mui/material";

//Fechas
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { MenuBar } from "./Componentes/MenuBar";
import { TareasListar } from "./Componentes/TareasListar";
import { tareasArray } from "./utils/Datos";
import { setTareas } from "./utils/LocalStorage";
import { getTareas } from "./utils/LocalStorage";

import { TareaNueva } from "./Componentes/TareaNueva";
import { ModalMarcarHecho } from "./Componentes/ModalMarcarHecho";
import { TareaBorrar } from "./Componentes/TareaBorrar";
import { TareaEditar } from "./Componentes/TareaEditar";
import { ModalNoEditar } from "./Componentes/ModalNoEditar";

import "./App.css";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

/*  ============================================  */
function App() {
	const [tareasEnOrden, setTareasEnOrden] = React.useState(
		getTareas() || setTareas(tareasArray)
	);

	const [selected, setSelected] = React.useState([]); //array de seleccionados

	const [openTareaNueva, setOpenTareaNueva] = React.useState(false);
	const [openModalHecho, setOpenModalHecho] = React.useState(false);
	const [openModalBorrar, setOpenModalBorrar] = React.useState(false);
	const [openTareaEditar, setOpenTareaEditar] = React.useState(false);
	const [openNoEditar, setOpenNoEditar] = React.useState(false);
	const [tipoFiltro, setTipoFiltro] = React.useState("todas");

	React.useEffect(() => {
		//const pages = ["TODAS", "REALIZADAS", "NO REALIZADAS"]; (MenuBar.jsx)
		let nuevoTareasFiltrado = [];
		if (tipoFiltro === "REALIZADAS") {
			nuevoTareasFiltrado = tareasEnOrden.filter((t) => {
				return t.estado;
			});
		} else {
			if (tipoFiltro === "NO REALIZADAS") {
				nuevoTareasFiltrado = tareasEnOrden.filter((t) => {
					return !t.estado;
				});
			} else {
				nuevoTareasFiltrado = [...tareasEnOrden];
			}
		}
		setTareasEnOrden(nuevoTareasFiltrado);
	}, [tipoFiltro]);

	//--------------------- Modo Claro Oscuro
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

	//--------------------- Paleta de colores para Modo Claro Oscuro
	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					...(mode === "dark"
						? {
								// Valores para MODO dark

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
								error: {
									main: "#FFEB3B", //amarillo
								},
						  }
						: {
								// Valores para MODO light

								primary: {
									main: deepPurple[200], //calendario: botones inferior
								},
								secondary: {
									main: deepPurple[500],
								},

								background: {
									default: deepPurple[50],
									paper: deepPurple[800], //calendario: fondo,
									tableHead: "#5034c9",
									tableRows: "#6355E6",
								},
								text: {
									primary: "#FFFFFF", //calendario: título, nro, días
									secondary: grey[200],
									iconos: grey[600],
								},
								button: {
									textHover: grey[200],
									hover: "#2A2239",
								},
								error: {
									main: "#FFEB3B", //amarillo
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
								color: "text.iconos",
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
							selected={selected}
							setSelected={setSelected}
							tareasEnOrden={tareasEnOrden}
							setTareasEnOrden={setTareasEnOrden}
							setOpenTareaNueva={setOpenTareaNueva}
							setOpenModalHecho={setOpenModalHecho}
							setOpenModalBorrar={setOpenModalBorrar}
							setOpenTareaEditar={setOpenTareaEditar}
							setOpenNoEditar={setOpenNoEditar}
						/>

						{/* ------- Modal de Tarea Nueva ------- */}
						{openTareaNueva && (
							<TareaNueva
								openTareaNueva={openTareaNueva}
								setOpenTareaNueva={setOpenTareaNueva}
								setTareasEnOrden={setTareasEnOrden}
								setTipoFiltro={setTipoFiltro}
							/>
						)}

						{/* ------- Modal de Acepta BORRAR Tarea/s ------- */}
						{openModalBorrar && (
							<TareaBorrar
								openModalBorrar={openModalBorrar}
								setOpenModalBorrar={setOpenModalBorrar}
								selected={selected}
								setSelected={setSelected}
								tareasEnOrden={tareasEnOrden}
								setTareasEnOrden={setTareasEnOrden}
								setTipoFiltro={setTipoFiltro}
							/>
						)}

						{/* ------- Editar Tarea  -------*/}
						{openTareaEditar && (
							<TareaEditar
								openTareaEditar={openTareaEditar}
								setOpenTareaEditar={setOpenTareaEditar}
								selected={selected}
								setSelected={setSelected}
								tareasEnOrden={tareasEnOrden}
								setTareasEnOrden={setTareasEnOrden}
								setTipoFiltro={setTipoFiltro}
							/>
						)}

						{/* ------- Modal de Acepta marcar como Tarea Realizada ------- */}
						{openModalHecho && (
							<ModalMarcarHecho
								openModalHecho={openModalHecho}
								setOpenModalHecho={setOpenModalHecho}
								selected={selected}
								setSelected={setSelected}
								tareasEnOrden={tareasEnOrden}
								setTareasEnOrden={setTareasEnOrden}
								setTipoFiltro={setTipoFiltro}
							/>
						)}

						{/*  -------  Modal No se puede Editar Tarea  -------*/}
						{openNoEditar && (
							<ModalNoEditar
								openNoEditar={openNoEditar}
								setOpenNoEditar={setOpenNoEditar}
							/>
						)}
					</Box>
				</LocalizationProvider>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
