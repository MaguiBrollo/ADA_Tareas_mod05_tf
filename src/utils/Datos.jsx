import { v4 as uuidv4 } from "uuid";

export function crearTarea( tarea, categoria, fecha, estado) {
	const id = uuidv4();
	return {
		id,
		tarea,
		categoria,
		fecha,
		estado,
	};
}

export const tareasArray = [
	crearTarea(
		"DESCRIPCION DE LA TAREA",
		"VARIOS",
		"01/01/2024",
		false
	),
	/* 
	crearTarea( "COMPRAR CESPED", "VARIOS", "01/01/2024", false),
	crearTarea( "BUSCAR TORTA DIA DEL PADRE ", "ALIMENTOS", "15/07/2024", false),
	crearTarea( "SUPERMERCADO", "ALIMENTOS", "15/07/2024", false),
	crearTarea("VERDULERIA", "ALIMENTOS", "14/07/2024", true),
	crearTarea("ANSES TURNO", "TRAMITES", "14/07/2024", true),
	crearTarea("MANDAR PAPELES INSEEP", "TRAMITES", "01/01/2024", false),
	crearTarea( "REGAR LAS PLANTAS", "HOGAR", "01/01/2024", false), */
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
