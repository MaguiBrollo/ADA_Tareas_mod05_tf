import React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import { setTareas } from "../utils/LocalStorage";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

//================================
export const ModalMarcarHecho = ({
	openModalHecho,
	setOpenModalHecho,
	selected,
	tareasEnOrden,

	setSelected,
}) => {
	/* const [open, setOpen] = React.useState(false); */

	/* const handleClickOpen = () => {
		setOpenModalHecho(true);
	}; */

	const handleClose = () => {
		setOpenModalHecho(false);
	};

	const handleCloseAcept = () => {
		selected.forEach((sel) => {
			const index = tareasEnOrden.findIndex((t) => t.id === sel);
			tareasEnOrden[index].estado = true;
		});
		setOpenModalHecho(false);
		setSelected([]);
		setTareas(tareasEnOrden); //LocalStorage
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
						¿Desea marcar como TAREA REALIZADA a la/s tarea/s seleccionada/s?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancelar</Button>
					<Button onClick={handleCloseAcept}>Aceptar</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
};
