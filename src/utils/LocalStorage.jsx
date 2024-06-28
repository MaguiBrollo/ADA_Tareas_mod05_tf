export const getTareas = () => {
	if (localStorage.getItem("tareas") !== null) {
		if (JSON.parse(localStorage.getItem("tareas")).length > 0) {
			return JSON.parse(localStorage.getItem("tareas"));
		}else{
         return false;
      }
	}
	return false;
};

export const setTareas = (tareas) => {
	localStorage.setItem("tareas", JSON.stringify(tareas));
	return JSON.parse(localStorage.getItem("tareas"));
};
