import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export const ModalNoEditar = ({ openNoEditar, setOpenNoEditar }) => {
	const handleCloseNoEditar = () => {
		setOpenNoEditar(false);
	};

	return (
		<React.Fragment>
			<Dialog
				open={openNoEditar}
				TransitionComponent={Transition}
				keepMounted
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle>{"Editar Tarea"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						Las tareas marcadas como Realizadas no se pueden editar.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={handleCloseNoEditar}
						sx={{
							margin: "2px",
							":hover": {
								color: "button.textHover",
								backgroundColor: "button.hover",
								borderRadius: "5px",
							},
						}}
					>
						Aceptar
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
};
