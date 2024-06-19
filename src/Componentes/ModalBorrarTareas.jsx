import React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import { setTareas } from "../utils/LocalStorage";

const TransitionBorrar = React.forwardRef(function Transition(props, ref2) {
	return <Slide direction="up" ref={ref2} {...props} />;
});

//================================

export const ModalBorrarTareas = ({
	openModalBorrar,
	setOpenModalBorrar,
	selected,
	setSelected,
	tareasEnOrden,
	setTareasEnOrden,
}) => {
	const handleCloseB = () => {
		setOpenModalBorrar(false);
	};

	const handleCloseBorrar = () => {
		const nuevoTareasEnOrden = tareasEnOrden.filter(
			(t) => !selected.includes(t.id)
		);
		setOpenModalBorrar(false);
		setSelected([]);
		setTareas(nuevoTareasEnOrden); //LocalStorage
		setTareasEnOrden(nuevoTareasEnOrden); //Listar
	};

	return (
		<React.Fragment>
			<Dialog
				open={openModalBorrar}
				TransitionComponent={TransitionBorrar}
				keepMounted
				aria-describedby="alert-dialog-slide-description-b"
			>
				<DialogTitle>{"TAREAS SELECCIONADAS"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description-b">
						¿Desea ELIMINAR DEFINITIVAMENTE la/s tarea/s seleccionada/s?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseB}>Cancelar</Button>
					<Button onClick={handleCloseBorrar}>Borrar</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
};
