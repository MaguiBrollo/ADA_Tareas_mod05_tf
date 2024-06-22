import React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import { setTareas } from "../utils/LocalStorage";
import { getTareas } from "../utils/LocalStorage";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

//================================
export const ModalMarcarHecho = ({
	openModalHecho,
	setOpenModalHecho,
	selected,
	setSelected,
	tareasEnOrden,
	setTareasEnOrden,
	setTipoFiltro,
}) => {
	const handleClose = () => {
		setOpenModalHecho(false);
	};

	const handleCloseMarcar = () => {
		setTareasEnOrden(getTareas()); //por si está filtrado
		const nuevoTareasEnOrden = tareasEnOrden.map((t) => {
			if (selected.some((s) => s === t.id)) {
				return {
					id: t.id,
					tarea: t.tarea,
					categoria: t.categoria,
					fecha: t.fecha,
					estado: !t.estado,
				};
			} else {
				return {
					id: t.id,
					tarea: t.tarea,
					categoria: t.categoria,
					fecha: t.fecha,
					estado: t.estado,
				};
			}
		});

		setTareasEnOrden(nuevoTareasEnOrden); //Listar
		setTareas(nuevoTareasEnOrden); //LocalStorage
		setTipoFiltro("TODAS");
		setOpenModalHecho(false);
		setSelected([]);
	};

	return (
		<React.Fragment>
			<Dialog
				open={openModalHecho}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle>{"TAREAS SELECCIONADAS"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						¿Desea MARCAR como Tarea Realizada a la/s tarea/s seleccionada/s?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancelar</Button>
					<Button onClick={handleCloseMarcar}>Marcar</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
};
