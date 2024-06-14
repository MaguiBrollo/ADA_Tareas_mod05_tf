import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import { GiHamburgerMenu } from "react-icons/gi";
import Container from "@mui/material/Container";
import { Button, CardMedia, MenuItem } from "@mui/material";

import ImgLogo from "../assets/LogoTarea.png";
import { Modo } from "./Modo";

const pages = ["Nueva Tarea", "Ordenar", "Filtrar"];

export const MenuBar = ({ ColorModeContext }) => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	/* ============================== */
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
						tasksINorder
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
						taskINorder
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							justifyContent: "flex-end",
						}}
					>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{
									margin: "2px",
									color: "white",
									display: "block",
									":hover": {
										color: "text.secondary",
										backgroundColor: "button.hover",
										borderRadius: "10px",
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
							onClose={handleCloseNavMenu}
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
											color: "text.secondary",
											backgroundColor: "button.hover",
										},
									}}
								>
									<Typography>{page}</Typography>
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
