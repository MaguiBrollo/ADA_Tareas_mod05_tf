import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import {
	Box,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableSortLabel,
	TableRow,
	Switch,
	Toolbar,
	Typography,
	Paper,
	Checkbox,
	IconButton,
	Tooltip,
	FormControlLabel,
} from "@mui/material";

import { MdDelete } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { RiTaskLine } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import { MdOutlineAddBox } from "react-icons/md";

import dayjs from "dayjs";

//----------------------------------------------------
function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

//----------------------------------------------------
function getComparator(order, orderBy) {
	return order === "desc"
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

//----------------------------------------------------
function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index]);

	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);

		if (order !== 0) {
			return order;
		}
		return a[1] - b[1];
	});

	return stabilizedThis.map((el) => el[0]);
}

//----------------------------------------------------
const headCells = [
	{
		//los "id", tienen que ser igual a cada campo de Array de Tarea
		id: "tarea",
		numeric: false,
		disablePadding: true,
		label: "TAREA",
	},
	{
		id: "categoria",
		numeric: false,
		disablePadding: false,
		label: "CATEGORIA",
	},
	{
		id: "fecha",
		numeric: false,
		disablePadding: false,
		label: "FECHA",
	},
	{
		id: "estado",
		numeric: false,
		disablePadding: false,
		label: "ESTADO",
	},
];

//----------------------------------------------------
function EnhancedTableHead(props) {
	const {
		onSelectAllClick,
		order,
		orderBy,
		numSelected,
		rowCount,
		onRequestSort,
	} = props;

	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead sx={{ bgcolor: "background.tableHead" }}>
			<TableRow>
				<TableCell padding="checkbox">
					<Checkbox
						color="primary"
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{
							"aria-label": "select all desserts",
						}}
					/>
				</TableCell>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? "left" : "center"}
						padding={headCell.disablePadding ? "none" : "normal"}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : "asc"}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{/* {orderBy === headCell.id ? (
								<Box component="span">
									{order === "desc" ? "(Desc)" : "(Asc)"}
								</Box>
							) : null} */}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

EnhancedTableHead.propTypes = {
	numSelected: PropTypes.number.isRequired,
	onRequestSort: PropTypes.func.isRequired,
	onSelectAllClick: PropTypes.func.isRequired,
	order: PropTypes.oneOf(["asc", "desc"]).isRequired,
	orderBy: PropTypes.string.isRequired,
	rowCount: PropTypes.number.isRequired,
};

//----------------------------------------------------
function EnhancedTableToolbar({
	selected,
	numSelected,
	tareasEnOrden,
	setOpenTareaNueva,
	setOpenModalHecho,
	setOpenModalBorrar,
	setOpenTareaEditar,
	setOpenNoEditar,
}) {
	const nuevaTarea = () => {
		setOpenTareaNueva(true);
	};

	const editarTareaSeleccionada = () => {
		const tareaParaEditar = tareasEnOrden.find((t) => t.id === selected[0]);
		if (tareaParaEditar.estado) {
			setOpenNoEditar(true); //No se edita si está Marcada Realizada
		} else {
			setOpenTareaEditar(true);
		}
	};

	const marcarComoHecho = () => {
		setOpenModalHecho(true);
	};

	const marcarBorrar = () => {
		setOpenModalBorrar(true);
	};

	return (
		<Toolbar
			sx={{
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 },
				...(numSelected > 0 && {
					bgcolor: (theme) =>
						alpha(
							theme.palette.primary.main,
							theme.palette.action.activatedOpacity
						),
				}),
			}}
		>
			{numSelected > 0 ? (
				<Typography
					sx={{ flex: "1 1 100%" }}
					color="inherit"
					variant="subtitle1"
					component="div"
				>
					{numSelected} tarea/s seleccionada/s
				</Typography>
			) : (
				<Typography
					sx={{ flex: "1 1 100%" }}
					variant="h6"
					id="tableTitle"
					component="div"
				>
					TAREAS
				</Typography>
			)}

			<Tooltip title="Agregar una tareas">
				<IconButton onClick={nuevaTarea} sx={{ color: "text.primary" }}>
					<MdOutlineAddBox />
				</IconButton>
			</Tooltip>
			{numSelected > 0 ? (
				<>
					{numSelected === 1 ? (
						<Tooltip title="Editar una tarea">
							<IconButton
								onClick={editarTareaSeleccionada}
								sx={{ color: "text.primary" }}
							>
								<BiSolidEdit />
							</IconButton>
						</Tooltip>
					) : (
						<Tooltip>
							<IconButton sx={{ color: "text.iconos" }}>
								<BiSolidEdit />
							</IconButton>
						</Tooltip>
					)}
					<Tooltip title="Marcar como Tarea Realizada">
						<IconButton
							onClick={marcarComoHecho}
							sx={{ color: "text.primary" }}
						>
							<RiTaskLine />
						</IconButton>
					</Tooltip>
					<Tooltip title="Eliminar tarea/s seleccionada/s">
						<IconButton onClick={marcarBorrar} sx={{ color: "text.primary" }}>
							<MdDelete />
						</IconButton>
					</Tooltip>
				</>
			) : (
				<>
					<Tooltip>
						<IconButton sx={{ color: "text.iconos" }}>
							<BiSolidEdit />
						</IconButton>
					</Tooltip>
					<Tooltip>
						<IconButton sx={{ color: "text.iconos" }}>
							<RiTaskLine />
						</IconButton>
					</Tooltip>
					<Tooltip>
						<IconButton sx={{ color: "text.iconos" }}>
							<MdDelete />
						</IconButton>
					</Tooltip>
				</>
			)}
		</Toolbar>
	);
}

/*  ============================================  */
/*  ============================================  */
export const TareasListar = ({
	selected,
	setSelected,
	tareasEnOrden,
	setAuxTareas,
	setOpenTareaNueva,
	setOpenModalHecho,
	setOpenModalBorrar,
	setOpenTareaEditar,
	setOpenNoEditar,
}) => {
	const [order, setOrder] = React.useState("asc");
	const [orderBy, setOrderBy] = React.useState("estado");
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [page, setPage] = React.useState(0);
	const [dense, setDense] = React.useState(false);
	
	//-------------------------------------------------
	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	//---------------- Seleccionan TODAS las Tareas de una vez
	const handleSelectAllClick = (event) => {
		if (event.target.checked) {
			const newSelected = tareasEnOrden.map((n) => n.id);
			setSelected(newSelected);
			return;
		}
		setSelected([]);
	};

	//---------------- Seleccionan de a UNA Tarea
	const handleClick = (event, id) => {
		const selectedIndex = selected.indexOf(id);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1)
			);
		}
		setSelected(newSelected);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleChangeDense = (event) => {
		setDense(event.target.checked);
	};

	const isSelected = (id) => selected.indexOf(id) !== -1;

	// Evita un salto de diseño al llegar a la última página con filas vacías.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tareasEnOrden.length) : 0;

	const visibleRows = React.useMemo(
		() =>
			stableSort(tareasEnOrden, getComparator(order, orderBy)).slice(
				page * rowsPerPage,
				page * rowsPerPage + rowsPerPage
			),
		[order, orderBy, page, rowsPerPage, tareasEnOrden]
	);

	/* ---------------------------------------------- */
	return (
		<Box sx={{ width: "95%", maxWidth: "900px" }}>
			<Paper sx={{ width: "100%", mb: 2 }}>
				<EnhancedTableToolbar
					selected={selected}
					numSelected={selected.length}
					tareasEnOrden={tareasEnOrden}
					setAuxTareas={setAuxTareas}
					setOpenTareaNueva={setOpenTareaNueva}
					setOpenModalHecho={setOpenModalHecho}
					setOpenModalBorrar={setOpenModalBorrar}
					setOpenTareaEditar={setOpenTareaEditar}
					setOpenNoEditar={setOpenNoEditar}
				/>
				<TableContainer>
					<Table
						sx={{ minWidth: 500, bgcolor: "background.tableRows" }}
						aria-labelledby="tableTitle"
						size={dense ? "small" : "medium"}
					>
						<EnhancedTableHead
							numSelected={selected.length}
							order={order}
							orderBy={orderBy}
							onSelectAllClick={handleSelectAllClick}
							onRequestSort={handleRequestSort}
							rowCount={tareasEnOrden.length}
						/>
						<TableBody>
							{visibleRows.map((row, index) => {
								const isItemSelected = isSelected(row.id);
								const labelId = `enhanced-table-checkbox-${index}`;

								return (
									<TableRow
										hover
										onClick={(event) => handleClick(event, row.id)}
										role="checkbox"
										aria-checked={isItemSelected}
										tabIndex={-1}
										key={row.id}
										selected={isItemSelected}
										sx={{ cursor: "pointer" }}
									>
										<TableCell padding="checkbox">
											<Checkbox
												color="primary"
												checked={isItemSelected}
												inputProps={{
													"aria-labelledby": labelId,
												}}
											/>
										</TableCell>

										<TableCell align="left">{row.tarea}</TableCell>
										<TableCell align="center">{row.categoria}</TableCell>
										<TableCell align="center">
											{dayjs(row.fecha).format("DD/MM/YYYY")}
										</TableCell>
										<TableCell align="center">
											{row.estado ? (
												<RiTaskLine color="black" />
											) : (
												<GoQuestion />
											)}
										</TableCell>
									</TableRow>
								);
							})}
							{emptyRows > 0 && (
								<TableRow
									style={{
										height: (dense ? 33 : 53) * emptyRows,
									}}
								>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={tareasEnOrden.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
			<FormControlLabel
				control={
					<Switch
						checked={dense}
						onChange={handleChangeDense}
						color="secondary"
					/>
				}
				label="Expandir"
			/>
		</Box>
	);
};
