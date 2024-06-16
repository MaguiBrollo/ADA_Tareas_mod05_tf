import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	FormControl,
	FormHelperText,
	MenuItem,
	Select,
	Paper,
	TextField,
} from "@mui/material";
import { useState } from "react";
import Draggable from "react-draggable";
import { IoMoveSharp } from "react-icons/io5";

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
	const [age, setAge] = useState("");
	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	/* ============================ */
	return (
		<>
			<Dialog
				open={open}
				/* 	onClose={handleClose} */
				PaperComponent={PaperComponent}
				aria-labelledby="draggable-dialog-title"
			>
				<DialogTitle
					style={{
						cursor: "move",
						display: "flex",
						justifyContent: "space-between",
					}}
					id="draggable-dialog-title"
				>
					Nueva Tarea
					<Box component="span">
						<IoMoveSharp />
					</Box>
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Ingrese los datos de la nueva tarea.
					</DialogContentText>
				</DialogContent>
				<Box
					component="form"
					sx={{
						"& .MuiTextField-root": { m: 1, width: "60ch" },
					}}
					noValidate
					autoComplete="off"
				>
               
					<TextField id="outlined-basic" label="Descripción de la tarea" variant="outlined" />

					<FormControl sx={{ m: 1, minWidth: 100 }}>
						<Select
							value={age}
							onChange={handleChange}
							displayEmpty
							inputProps={{ "aria-label": "Without label" }}
						>
							<MenuItem value="">
								<em>Seleccionar categoría...</em>
							</MenuItem>
							<MenuItem value="ALIMENTOS">ALIMENTOS</MenuItem>
							<MenuItem value="HOGAR">HOGAR</MenuItem>
							<MenuItem value="SALUD">SALUD</MenuItem>
							<MenuItem value="TRAMITES">TRAMITES</MenuItem>
							<MenuItem value="VARIOS">VARIOS</MenuItem>
						</Select>
						
					</FormControl>
				</Box>
				<DialogActions>
					<Button autoFocus onClick={handleClose}>
						Cancelar
					</Button>
					<Button onClick={handleClose}>Guardar Tarea</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
