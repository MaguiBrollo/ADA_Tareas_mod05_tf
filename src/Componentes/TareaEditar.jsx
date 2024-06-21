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
import LoadingButton from "@mui/lab/LoadingButton";
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";

//fecha
import dayjs from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import { categorias } from "../utils/Datos";
import { setTareas } from "../utils/LocalStorage";

//------------------------------------
const sinAcentosMayus = (texto) => {
	if (typeof texto === "string") {
		texto = texto.replace(/[áäâà]/g, "a");
		texto = texto.replace(/[éëêè]/g, "e");
		texto = texto.replace(/[íïîì]/g, "i");
		texto = texto.replace(/[óöôò]/g, "o");
		texto = texto.replace(/[úüûù]/g, "u");
		texto = texto.toUpperCase();
	}
	return texto;
};

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

export const TareaEditar = ({
	openTareaEditar,
	setOpenTareaEditar,
	selected,
	setSelected,
	tareasEnOrden,
	setTareasEnOrden,
}) => {
	const [errorTarea, setErrorTarea] = useState(false);
	const [errorCategoria, setErrorCategoria] = useState(false);
	const [loading, setLoading] = useState(false);

	const hoy = dayjs();
	// const index = tareasEnOrden.findIndex((t) => t.id === selected[0]);

	const tareaParaEditar = tareasEnOrden.find((t) => t.id === selected[0]);

	const [datosForm, setDatosForm] = useState({
		id: tareaParaEditar.id,
		tarea: tareaParaEditar.tarea,
		categoria: tareaParaEditar.categoria,
		fecha: dayjs(tareaParaEditar.fecha),
		estado: tareaParaEditar.estado,
	});

	let { id, tarea, categoria, fecha, estado } = datosForm;
	const guardarDatos = (e) => {
		if (e.target.name === "tarea") {
			setDatosForm({
				...datosForm,
				[e.target.name]: sinAcentosMayus(e.target.value),
			});
		} else {
			setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
		}

		if (e.target.name === "tarea") {
			if (tarea.length < 5 || tarea.length > 60) {
				setErrorTarea(true);
			} else {
				setErrorTarea(false);
			}
		}
		if (e.target.name === "categoria") {
			categoria === "S" ? setErrorCategoria(true) : setErrorCategoria(false);
		}
	};

	const handleSubmitEdit = (tarea, categoria, fecha) => {
		if (tarea.length < 5 || tarea.length > 60) {
			setErrorTarea(true);
		} else {
			setErrorTarea(false);

			if (categoria === "S") {
				setErrorCategoria(true);
			} else {
				setErrorCategoria(false);

				//------ guardar EDITAR ------------------
				const nuevoTareasEnOrden = [];
				tareasEnOrden.forEach((t) => {
					if (t.id === selected[0]) {
						nuevoTareasEnOrden.push({
							id: id,
							tarea: tarea,
							categoria: categoria,
							fecha: dayjs(fecha).format("YYYY/MM/DD"),
							estado: estado,
						});
					} else {
						nuevoTareasEnOrden.push({
							id: t.id,
							tarea: t.tarea,
							categoria: t.categoria,
							fecha: t.fecha,
							estado: t.estado,
						});
					}
				});

				setSelected([]);

				setLoading(true);
				setTimeout(() => {
					setTareasEnOrden(nuevoTareasEnOrden); //Listar
					setTareas(nuevoTareasEnOrden); //LocalStorage
					setLoading(false);
					cerrarTareaEditar();
				}, 2000);
			}
		}
	};

	const cerrarTareaEditar = () => {
		setOpenTareaEditar(false);
		setErrorCategoria(false);
		setErrorTarea(false);
	};

	/* ------------------------------------- */
	return (
		<>
			<Dialog
				open={openTareaEditar}
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
					Editar Tarea
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
						Edite los datos de la tarea.
					</Typography>

					<Box
						component="form"
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
							name="tarea"
							error={errorTarea}
							value={tarea}
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
								<MenuItem value={"S"}>Seleccionar... </MenuItem>
								{categorias &&
									categorias.map((cat) => (
										<MenuItem key={cat} value={cat}>
											{cat}
										</MenuItem>
									))}
							</Select>
						</FormControl>

						{/* fecha */}
						<DemoItem>
							<MobileDatePicker
								value={datosForm.fecha}
								onChange={(nuevoValor) => {
									setDatosForm({
										...datosForm,
										fecha: nuevoValor,
									});
								}}
								label="Fecha para la tarea"
								format="DD-MM-YYYY"
								minDate={hoy}
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
							onClick={cerrarTareaEditar}
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
							onClick={() => handleSubmitEdit(tarea, categoria, fecha)}
							loading={loading}
							loadingPosition="end"
							endIcon={<MdOutlineEdit />}
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
							<span>Editar</span>
						</LoadingButton>
					</DialogActions>
				</Box>
			</Dialog>
		</>
	);
};
