import * as React from "react";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { Button } from "@mui/material";
import { Header } from "./Componentes/Header";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";

import {grey, deepPurple } from "@mui/material/colors";

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
									default: grey[200],
									paper: grey[800],
								},
								text: {
									primary: "#fff",
									secondary: grey[800],
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
									secondary: grey[500],
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
					<Header ColorModeContext={ColorModeContext} />

					<Box>
						<Button
							variant="contained"
							endIcon={<IoIosAddCircleOutline />}
							sx={{ margin: "5px" }}
						>
							Tarea
						</Button>
						<Button
							variant="contained"
							endIcon={<IoFilterSharp />}
							sx={{ margin: "5px" }}
						>
							Send
						</Button>
					</Box>
					<h2>Nueva Tarea</h2>
				</Box>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
