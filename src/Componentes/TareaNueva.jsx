import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
	FormControl,
	MenuItem,
	Select,
	Paper,
	TextField,
	Typography,
	InputLabel,
} from "@mui/material";
import { useState } from "react";
import Draggable from "react-draggable";
import { IoMoveSharp } from "react-icons/io5";

import { categorias } from "../utils/Datos";

//------------------------------------
function PaperComponent(props) {
	return (
		<Draggable
			handle="#draggable-dialog-title"
			cancel={'[class*="MuiDialogContent-root"]'}
		>
			<Paper {...props} />
		</Draggable>
	);
}

/*  --------------------------------------------------   */
export const TareaNueva = ({ setOpen, open }) => {
	const [categoria, setCategoria] = useState("");
	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = (event) => {
		setCategoria(event.target.value);
	};

	/* ============================ */
	return (
		<>
			<Dialog
				open={open}
				onClose={handleClose}
				PaperComponent={PaperComponent}
				aria-labelledby="draggable-dialog-title"
				maxWidth="sm"
				fullWidth
			>
				<DialogTitle
					style={{ cursor: "move" }}
					id="draggable-dialog-title"
					sx={{
						color: "text.primary",
						bgcolor: "background.paper",
						padding: "5px 5px 5px 15px",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					Nueva Tarea
					<Box component="span">
						<IoMoveSharp />
					</Box>
				</DialogTitle>

				<Typography
					sx={{
						color: "text.secondary",
						display: "flex",
						alignItems: "center",
						margin: "15px",
						fontSize: "1rem",
					}}
				>
					Ingrese los datos de la nueva tarea.
				</Typography>

				<Box
					component="form"
					sx={{
						"& .MuiTextField-root": { m: 1, width: "95%" },
					}}
					noValidate
					autoComplete="off"
				>
					<TextField
						error={false}
						type="text"
						name="descripcion"
						margin="dense"
						id="tarea-descripcion"
						label="Descripción de la Tarea"
						variant="outlined"
						helperText="Dato obligatorio"
					/>

					<FormControl sx={{ width: "95%", m: 1, color: "text.secondary" }}>
						<InputLabel id="tarea-categoria">Categoría de la tarea</InputLabel>
						<Select
							name="categoria"
							value={categoria}
							onChange={handleChange}
							label="Categoría de la Tarea"
							sx={{ color: "text.secondary" }}
							fullWidth
						>
							{categorias &&
								categorias.map((cat) => (
									<MenuItem key={cat.id} value={cat.nombre}>
										{cat.nombre}
									</MenuItem>
								))}
						</Select>
					</FormControl>
				</Box>

				<DialogActions>
					<Button
						autoFocus
						onClick={handleClose}
						sx={{
							color: "text.primary",
							bgcolor: "background.paper",
							":hover": {
								color: "text.secondary",
								bgcolor: "background.tableRows",
							},
						}}
					>
						Cancelar
					</Button>
					<Button
						onClick={handleClose}
						sx={{
							color: "text.primary",
							bgcolor: "background.paper",
							":hover": {
								color: "text.secondary",
								bgcolor: "background.tableRows",
							},
						}}
					>
						Guardar
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
