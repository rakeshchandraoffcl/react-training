import React, { useState } from 'react';

import { Box } from '@mui/material';
import { LoginForm } from '../../components/login-form';
import { SuccessMessage } from '../../components/success-message';

export const LoginPage = () => {
	const [showSuccess, setShowSuccess] = useState(false);

	return (
		<div style={{ padding: '1rem' }}>
			{showSuccess ? (
				<SuccessMessage />
			) : (
				<Box mt="2rem">
					<LoginForm onLoginSuccess={setShowSuccess} />
				</Box>
			)}
		</div>
	);
};
