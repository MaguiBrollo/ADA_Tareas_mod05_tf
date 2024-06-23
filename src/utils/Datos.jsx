import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

export function crearTarea(tarea, categoria, fecha, estado) {
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
		"DESCRIPCIÓN DE LA TAREA",
		"VARIOS",
		dayjs().format("YYYY/MM/DD"),
		false
	),
];

export const categorias = [
	"EDUCACION",
	"FAMILIA Y AMIGOS",
	"HOGAR",
	"SALUD",
	"TRAMITES",
	"VARIOS",
];
