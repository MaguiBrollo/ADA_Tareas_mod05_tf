import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
	FormControl,
	Grid,
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
				/* 	onClose={handleClose} */
				PaperComponent={PaperComponent}
				aria-labelledby="tarea-nueva-titulo-ventana"
			>
				<Box
					sx={{
						bgcolor: "background.default",
						color: "text.secondary",
					}}
				>
					<DialogTitle
						style={{
							cursor: "move",
							display: "flex",
							justifyContent: "space-between",
						}}
						sx={{
							color: "text.primary",
							bgcolor: "background.paper",
							padding: "5px 5px 5px 15px",
						}}
						id="tarea-nueva-titulo-ventana"
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
							"& .MuiTextField-root": { m: 1 },
						}}
						noValidate
						autoComplete="off"
					>
						<Grid container direction="row" spacing={3}>
							<Grid item>
								<TextField
									error={false}
									type="text"
									name="descripcion"
									margin="dense"
									id="tarea-descripcion"
									label="Descripción de la Tarea"
									variant="outlined"
									helperText="Dato obligatorio"
									sx={{ minWidth: 295 }}
								/>
							</Grid>
						</Grid>

						<Grid item xs={12} sm={12} lg={12} xl={12}>
							<FormControl
								sx={{ width: "100%", m: 1, color: "text.secondary" }}
							>
								<InputLabel id="tarea-categoria">
									Categoría de la tarea
								</InputLabel>
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
						</Grid>
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
				</Box>
			</Dialog>
		</>
	);
};
