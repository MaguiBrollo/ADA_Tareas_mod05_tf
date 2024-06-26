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

import { useEffect, useState } from "react";
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
import { crearTarea } from "../utils/Datos";
import { setTareas } from "../utils/LocalStorage";
import { getTareas } from "../utils/LocalStorage";

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

/*  ============================================  */
export const TareaNueva = ({
	openTareaNueva,
	setOpenTareaNueva,
	setTareasEnOrden,
	setTipoFiltro,
}) => {
	const [errorTarea, setErrorTarea] = useState(false);
	const [errorCategoria, setErrorCategoria] = useState(false);
	const [loading, setLoading] = useState(false);

	const hoy = dayjs();
	const [datosForm, setDatosForm] = useState({
		tarea: "",
		categoria: "S",
		fecha: hoy,
	});
	const { tarea, categoria, fecha } = datosForm;

	useEffect(() => {
		if (tarea.trim() !== "") {
			if (tarea.length < 5 || tarea.length > 65) {
				setErrorTarea(true);
			} else {
				setErrorTarea(false);
			}
			categoria === "S" ? setErrorCategoria(true) : setErrorCategoria(false);
		}
	}, [datosForm]);

	const guardarDatos = (e) => {
		if (e.target.name === "tarea") {
			setDatosForm({
				...datosForm,
				[e.target.name]: sinAcentosMayus(e.target.value),
			});
		} else {
			setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
		}
	};

	//---- Para guardar en el LS y actualizar el array de la tabla
	const handleSubmit = (tarea, categoria, fecha) => {
		if (tarea.trim() !== "") {
			if (tarea.length < 5 || tarea.length > 65) {
				setErrorTarea(true);
			} else {
				setErrorTarea(false);
				if (categoria === "S") {
					setErrorCategoria(true);
				} else {
					setErrorCategoria(false);

					//------ guardar ------------------
					const nuevoArrayTareas = [...getTareas()]; //Para tener el Array completo del LS
					const nuevaFecha = dayjs(fecha).format("YYYY/MM/DD");
					const nuevaTarea = crearTarea(tarea.trim(), categoria, nuevaFecha, false);

					nuevoArrayTareas.push(nuevaTarea);

					setLoading(true);
					setTimeout(() => {
						//Guarda en LocalStorage y en set para listar
						setTareasEnOrden(setTareas(nuevoArrayTareas));

						setLoading(false);
						cerrarTareaNueva();
						setTipoFiltro("TODAS"); //solo para mostrar el texto
					}, 2000);
				}
			}
		} else {
			setErrorTarea(true);
			setErrorCategoria(true);
		}
	};

	const cerrarTareaNueva = () => {
		setOpenTareaNueva(false);
		setErrorCategoria(false);
		setErrorTarea(false);
		setDatosForm({
			tarea: "",
			categoria: "S",
			fecha: hoy,
		});
	};

	/* ------------------------------------- */
	return (
		<>
			<Dialog
				open={openTareaNueva}
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

				<Box sx={{ bgcolor: "background.tableRows" }}>
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
						sx={{
							"& .MuiTextField-root": {
								margin: "15px",
								width: "90%",
							},
						}}
						noValidate
						autoComplete="off"
					>
						<FormControl sx={{ width: "100%" }}>
							<TextField
								autoComplete="off"
								id="tarea-descripcion"
								label="Descripción de la Tarea"
								type="text"
								name="tarea"
								error={errorTarea}
								value={tarea}
								onChange={guardarDatos}
								variant="outlined"
								margin="dense"
								helperText="Dato obligatorio (5-65 caracteres)"
								required
								inputProps={{
									minLength: 5,
									maxLength: 65,
								}}
							/>
						</FormControl>

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
						<DialogActions>
							<Button
								autoFocus
								onClick={cerrarTareaNueva}
								endIcon={<MdOutlineCancel />}
								sx={{
									color: "text.primary",
									bgcolor: "background.paper",
									margin: "2px",
									":hover": {
										color: "button.textHover",
										backgroundColor: "button.hover",
										borderRadius: "5px",
									},
								}}
							>
								Cancelar
							</Button>

							<LoadingButton
								onClick={() => handleSubmit(tarea, categoria, fecha)}
								loading={loading}
								loadingPosition="end"
								endIcon={<IoMdAddCircleOutline />}
								variant="contained"
								sx={{
									color: "text.primary",
									bgcolor: "background.paper",
									margin: "2px",
									":hover": {
										color: "button.textHover",
										backgroundColor: "button.hover",
										borderRadius: "5px",
									},
								}}
							>
								<span>Guardar</span>
							</LoadingButton>
						</DialogActions>
					</Box>
				</Box>
			</Dialog>
		</>
	);
};
