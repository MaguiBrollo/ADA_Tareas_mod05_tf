import { v4 as uuidv4 } from "uuid";

function createData(id, tarea, categoria, fecha, estado) {
	return {
		id,
		tarea,
		categoria,
		fecha,
		estado,
	};
}

export const tareasArray = [
	createData(uuidv4(), "DESCRIPCION DE LA TAREA", "VARIOS", "01/01/2024", false),
	/* 
	createData(uuidv4(), "COMPRAR CESPED", "VARIOS", "01/01/2024", false),
	createData(uuidv4(), "BUSCAR TORTA DIA DEL PADRE ", "COMIDA", "15/07/2024", false),
	createData(uuidv4(), "SUPERMERCADO", "COMIDA", "15/07/2024", false),
	createData(uuidv4(), "VERDULERIA", "COMIDA", "14/07/2024", true),
	createData(uuidv4(), "ANSES TURNO", "TRAMITES", "14/07/2024", true),
	createData(uuidv4(), "MANDAR PAPELES INSEEP", "TRAMITES", "01/01/2024", false),
	createData(uuidv4(), "REGAR LAS PLANTAS", "HOGAR", "01/01/2024", false), */
];
