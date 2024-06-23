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
	crearTarea(
		"DESCRIPCIÓN DE LA TAREA 222",
		"VARIOS",
		dayjs().format("YYYY/MM/DD"),
		true
	),
	crearTarea(
		"DESCRIPCIÓN DE LA TAREA 3333",
		"VARIOS",
		dayjs().format("YYYY/MM/DD"),
		false
	),
	crearTarea(
		"DESCRIPCIÓN DE LA TAREA 444 ",
		"VARIOS",
		dayjs().format("YYYY/MM/DD"),
		true
	),
	crearTarea(
		"DESCRIPCIÓN DE LA TAREA 555",
		"VARIOS",
		dayjs().format("YYYY/MM/DD"),
		false
	),
	crearTarea(
		"DESCRIPCIÓN DE LA TAREA 666 ",
		"VARIOS",
		dayjs().format("YYYY/MM/DD"),
		true
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
