//import React from 'react'
import { Box, CardMedia, Typography } from "@mui/material";

import ImgLogo from "../assets/LogoTarea.png";

export const Header = () => {
	return (
		<Box
			sx={{
				width: "95%",
				bgcolor: "#262654",
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
					bgcolor: "#262654",
					width: "5%",
					margin: "10px",
				}}
			/>

			<Typography
				sx={{
					bgcolor: "#262654",
					color: "white",
					display: "flex",
					alignItems: "center",
					margin: "10px",
					fontSize: "2rem",
				}}
			>
				Tareas
			</Typography>
		</Box>
	);
};
