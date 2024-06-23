import { forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import { setTareas } from "../utils/LocalStorage";

const TransitionBorrar = forwardRef(function Transition(props, ref2) {
	return <Slide direction="up" ref={ref2} {...props} />;
});

//================================

export const TareaBorrar = ({
	openModalBorrar,
	setOpenModalBorrar,
	selected,
	setSelected,
	setTareasEnOrden,
	auxTareas,
	setTipoFiltro,
}) => {
	const handleCloseB = () => {
		setOpenModalBorrar(false);
	};
	const handleCloseBorrar = () => {
		//auxTareas: array que tiene lo último del LS, se lo setea antes de abrir esta modal
		const nuevoArrayTareas = auxTareas.filter((t) => !selected.includes(t.id));

		setTareas(nuevoArrayTareas); //LocalStorage
		setTareasEnOrden(nuevoArrayTareas); //Listar
		setOpenModalBorrar(false);
		setSelected([]);

		setTipoFiltro("TODAS"); //solo para mostrar el texto
	};

	return (
		<>
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
					<Button
						onClick={handleCloseB}
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
						onClick={handleCloseBorrar}
						sx={{
							margin: "2px",
							":hover": {
								color: "button.textHover",
								backgroundColor: "button.hover",
								borderRadius: "5px",
							},
						}}
					>
						Borrar
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
