//import React from 'react'
import { Box, CardMedia, Typography } from "@mui/material";

import ImgLogo from "../assets/LogoTarea.png";
import { Modo } from "./Modo";

export const Header = ({ ColorModeContext }) => {
	return (
		<Box
			sx={{
				width: "95%",
				bgcolor: "background.paper",
				display: "flex",
				flexDirection: "row",
				borderRadius: "5px",
				boxShadow: "0px 0px 20px 1px gray",
				margin: "10px",
			}}
		>
			<CardMedia
				component="img"
				image={ImgLogo}
				alt="Logo Tareas"
				sx={{
					bgcolor: "background.paper",
					width: "10%",
					margin: "10px",
				}}
			/>

			<Typography
				sx={{
					bgcolor: "background.paper",
					color: "white",
					display: "flex",
					alignItems: "center",
					margin: "10px",
					fontSize: "2rem",
				}}
			>
				tasksINorder
			</Typography>
			<Box
				sx={{
					display: "flex",
					justifyContent: "flex-end",
					width: "100%",
				}}
			>
				<Modo ColorModeContext={ColorModeContext} />
			</Box>
		</Box>
	);
};
