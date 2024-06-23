import * as React from "react";

import {
	AppBar,
	Box,
	Container,
	Menu,
	Toolbar,
	IconButton,
	Typography,
	Tooltip,
	Button,
	CardMedia,
	MenuItem,
} from "@mui/material";

import { GiHamburgerMenu } from "react-icons/gi";

import ImgLogo from "../assets/LogoTarea.png";
import { Modo } from "./Modo";
import { getTareas } from "../utils/LocalStorage";

//Si se cambia aquí, cambiar en TareasListar.jsx
const pages = ["TODAS", "REALIZADAS", "NO REALIZADAS"];

/*  ============================================  */
export const MenuBar = ({
	ColorModeContext,
	setTipoFiltro,
	setTareasEnOrden,
}) => {
	//, setOpen
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = (e) => {
		setAnchorElNav(null);
		setTareasEnOrden(getTareas());
		setTipoFiltro(e.target.innerText.trim());
	};

	/* ------------------------------------ */
	return (
		<AppBar position="static" sx={{ bgcolor: "background.paper" }}>
			<Container
				maxWidth="xl"
				sx={{
					paddingLeft: "5px",
					paddingRight: "5px",
				}}
			>
				<Toolbar disableGutters>
					<CardMedia
						component="img"
						image={ImgLogo}
						alt="Logo de Tareas en Orden"
						aria-label="Logo de la aplicación"
						sx={{
							width: "10%",
							maxWidth: "80px",
							margin: "10px",
						}}
					/>

					<Typography
						variant="h4"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							color: "text.primary",
							textDecoration: "none",
						}}
					>
						tasks IN order
					</Typography>

					<Typography
						variant="h5"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							color: "text.primary",
							textDecoration: "none",
						}}
					>
						task IN order
					</Typography>

					{/* Menú horizontal */}
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							justifyContent: "flex-end",
						}}
					>
						<Typography
							sx={{
								display: { xs: "none", md: "flex" },
								alignItems: "center",
								paddingRight: "5px",
								color: "text.primary",
							}}
						>
							Filtrar Tareas:
						</Typography>

						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{
									margin: "2px",
									color: "white",
									display: "block",
									":hover": {
										color: "button.textHover",
										backgroundColor: "button.hover",
										borderRadius: "5px",
									},
								}}
							>
								{page}
							</Button>
						))}
					</Box>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
							justifyContent: "flex-end",
						}}
					>
						<Tooltip title="Filtrar Tareas">
							<IconButton
								sx={{
									color: "text.primary",
									size: "large",
								}}
								aria-label="Menu de la Aplicación"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
							>
								<GiHamburgerMenu />
							</IconButton>
						</Tooltip>

						{/* Menú Vertical desplegable */}
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClick={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem
									key={page}
									onClick={handleCloseNavMenu}
									sx={{
										":hover": {
											color: "button.textHover",
											backgroundColor: "button.hover",
										},
									}}
								>
									<Typography>{page} </Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					{/* Modo: permite seleccionar entre MODO claro/oscuro */}
					<Modo ColorModeContext={ColorModeContext} />
				</Toolbar>
			</Container>
		</AppBar>
	);
};
