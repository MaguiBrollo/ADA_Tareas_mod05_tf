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
	setTareasEnOrden,
	setTipoFiltro,
}) => {
	const handleClose = () => {
		setOpenModalHecho(false);
	};

	const handleCloseMarcar = () => {
		const aux = [...getTareas()]; //Para tener el Array completo del LS
		const nuevoTareasEnOrden = aux.map((t) => {
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

		//Guarda en LocalStorage y en set para listar
		setTareasEnOrden(setTareas(nuevoTareasEnOrden)); //Listar

		setTipoFiltro("TODAS");
		setOpenModalHecho(false);
		setSelected([]);
		setTipoFiltro("TODAS"); //solo para mostrar el texto
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
					<Button
						onClick={handleClose}
						sx={{
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
					<Button
						onClick={handleCloseMarcar}
						sx={{
							margin: "2px",
							":hover": {
								color: "button.textHover",
								backgroundColor: "button.hover",
								borderRadius: "5px",
							},
						}}
					>
						Marcar
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
};
