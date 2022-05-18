import { Box, Paper } from '@mui/material';

import React from 'react';

export const SuccessMessage = () => {
	return (
		<Paper elevation={10}>
			<Box
				sx={{
					padding: '1rem',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<h1 style={{ color: 'green' }}>
					You logged in successfully !!
				</h1>
			</Box>
		</Paper>
	);
};
