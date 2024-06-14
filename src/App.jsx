import { Box, Button, GlobalStyles } from "@mui/material";
import { Header } from "./Componentes/Header";

import { IoIosAddCircleOutline } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";

import "./App.css";

function App() {
	return (
		<>
			<GlobalStyles
				styles={{
					"#root": {
						width: "100%",
					},
				}}
			/>

			<Box
				sx={{
					width: "100%",
					minHeight: "100vh",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					backgroundColor: "#8E8EFF",
				}}
			>
				<Header />

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
		</>
	);
}

export default App;
