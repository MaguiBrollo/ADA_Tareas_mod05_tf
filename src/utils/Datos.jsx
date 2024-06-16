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
	createData(
		uuidv4(),
		"DESCRIPCION DE LA TAREA",
		"VARIOS",
		"01/01/2024",
		false
	),
	/* 
	createData(uuidv4(), "COMPRAR CESPED", "VARIOS", "01/01/2024", false),
	createData(uuidv4(), "BUSCAR TORTA DIA DEL PADRE ", "ALIMENTOS", "15/07/2024", false),
	createData(uuidv4(), "SUPERMERCADO", "ALIMENTOS", "15/07/2024", false),
	createData(uuidv4(), "VERDULERIA", "ALIMENTOS", "14/07/2024", true),
	createData(uuidv4(), "ANSES TURNO", "TRAMITES", "14/07/2024", true),
	createData(uuidv4(), "MANDAR PAPELES INSEEP", "TRAMITES", "01/01/2024", false),
	createData(uuidv4(), "REGAR LAS PLANTAS", "HOGAR", "01/01/2024", false), */
];

export const categorias = [
	{
		id: uuidv4(),
		nombre: "ALIMENTOS",
	},
	{
		id: uuidv4(),
		nombre: "HOGAR",
	},
	{
		id: uuidv4(),
		nombre: "EDUCACION",
	},
	{
		id: uuidv4(),
		nombre: "SALUD",
	},
	{
		id: uuidv4(),
		nombre: "TRAMITES",
	},
	{
		id: uuidv4(),
		nombre: "VARIOS",
	},
];
