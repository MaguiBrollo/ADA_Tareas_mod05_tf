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
import { IoMdAddCircleOutline } from "react-icons/io";
import LoadingButton from "@mui/lab/LoadingButton";
import { MdOutlineCancel } from "react-icons/md";

//fecha
import dayjs from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

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
	const [errorDescripcion, setErrorDescripcion] = useState(false);
	const [errorCategoria, setErrorCategoria] = useState(false);
	const [errores, setErrores] = useState(false);

	const [loading, setLoading] = useState(false);
	const [datosForm, setDatosForm] = useState({
		descripcion: "",
		categoria: " ",
		fecha: dayjs(new Date()),
	});
	const { descripcion, categoria, fecha } = datosForm;

	const guardarDatos = (e) => {
		if (e.target.name === "descripcion") {
			if (descripcion.length > 60) {
				setErrorDescripcion(true);
			} else {
				setErrorDescripcion(false);
			}
			if (descripcion === "") {
				setErrorDescripcion(true);
			} else {
				setErrorDescripcion(false);
			}
		}
		if (e.target.name === "categoria") {
			if (categoria !== "") {
				setErrorCategoria(true);
			} else {
				setErrorCategoria(false);
			}
		}
		setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
	};

	const handleSubmit = (descripcion, categoria, fecha) => {
		if (descripcion.length > 60) {
			setErrorDescripcion(true);
			setErrores(true);
		}
		if (descripcion === "") {
			setErrorDescripcion(true);
			setErrores(true);
		}
		if (categoria !== "") {
			setErrorCategoria(true);
			setErrores(true);
		}
		console.log(
			"Datos Guardando...: ",
			descripcion,
			categoria,
			new Date(fecha).toLocaleDateString()
		);

		if (errores) {
			setLoading(true);
			setTimeout(() => {
				setLoading(false);
				setOpen(false);
			}, 2000);
		}
	};

	const handleClose = () => {
		setOpen(false);
	};

	/* ============================ */
	return (
		<>
			<Dialog
				open={open}
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

				<Box sx={{ bgcolor: "background.default" }}>
					<Typography
						sx={{
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
						onSubmit={guardarDatos}
						sx={{
							"& .MuiTextField-root": {
								margin: "15px",
								width: "90%",
							},
						}}
						noValidate
						autoComplete="off"
					>
						<TextField
							id="tarea-descripcion"
							label="Descripción de la Tarea"
							type="text"
							name="descripcion"
							error={errorDescripcion}
							value={descripcion}
							onChange={guardarDatos}
							variant="outlined"
							margin="dense"
							helperText="Dato obligatorio (5-60 caracteres)"
							required
							inputProps={{
								minLength: 5,
								maxLength: 60,
							}}
						/>

						<FormControl sx={{ width: "90%", marginLeft: "15px" }}>
							<InputLabel id="tarea-categoria">
								Categoría de la tarea
							</InputLabel>
							<Select
								error={errorCategoria}
								labelId="tarea-categoria"
								name="categoria"
								value={categoria}
								onChange={guardarDatos}
								label="Categoría de la Tarea"
								fullWidth
							>
								<MenuItem value={" "}>Seleccionar... </MenuItem>
								{categorias &&
									categorias.map((cat) => (
										<MenuItem key={cat.id} value={cat.nombre}>
											{cat.nombre}
										</MenuItem>
									))}
							</Select>
						</FormControl>

						{/* fecha */}
						<DemoItem>
							<MobileDatePicker
								name="fecha"
								value={fecha}
								onChange={guardarDatos}
								label="Fecha para la tarea"
								format="DD-MM-YYYY"
								required
								closeOnSelect
								slotProps={{
									actionBar: { actions: ["today", "accept"] },
								}}
								color="text.primary"
							/>
						</DemoItem>
					</Box>
					<DialogActions>
						<Button
							autoFocus
							onClick={handleClose}
							endIcon={<MdOutlineCancel />}
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

						<LoadingButton
							onClick={() => handleSubmit(descripcion, categoria, fecha)}
							loading={loading}
							loadingPosition="end"
							endIcon={<IoMdAddCircleOutline />}
							variant="contained"
							sx={{
								color: "text.primary",
								bgcolor: "background.paper",
								":hover": {
									color: "text.secondary",
									bgcolor: "background.tableRows",
								},
							}}
						>
							<span>Guardar</span>
						</LoadingButton>
					</DialogActions>
				</Box>
			</Dialog>
		</>
	);
};
