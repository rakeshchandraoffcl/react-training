import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const USERNAME = 'abc';
const PASSWORD = 'test123';

export const LoginForm = ({ onLoginSuccess }) => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [errorUserName, setErrorUserName] = useState('');
	const [errorPassword, setErrorPassword] = useState('');
	const [mainError, setMainError] = useState(null);

	const onButtonClick = () => {
		if (!userName) {
			setErrorUserName('username required');
			return;
		} else {
			setErrorUserName('');
		}
		if (!password) {
			setErrorPassword('username required');
			return;
		} else {
			setErrorPassword('');
		}

		if (userName === USERNAME && password === PASSWORD) {
			setMainError(null);
			onLoginSuccess(true);
			// Do something
		} else {
			setMainError('Invalid credentials');
		}
	};
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				width: 500,
			}}
		>
			<TextField
				error={!!errorUserName}
				helperText={errorUserName}
				label="Username"
				variant="outlined"
				value={userName}
				onChange={(e) => setUserName(e.target.value)}
			/>
			<Box mt="1rem" sx={{ width: '100%' }}>
				<TextField
					error={!!errorPassword}
					helperText={errorPassword}
					label="Password"
					variant="outlined"
					type="password"
					fullWidth
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</Box>
			{mainError && <Typography color="error">{mainError}</Typography>}
			<Box mt="1rem" sx={{ width: '100%' }}>
				<Button variant="contained" onClick={onButtonClick}>
					Submit
				</Button>
			</Box>
		</Box>
	);
};
