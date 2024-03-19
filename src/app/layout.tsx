'use client';
import { useState } from 'react';
import './globals.css';
import Header from '@/components/Header.client';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [theme, setTheme] = useState('dark');
	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};
	return (
		<html lang='en'>
			<body className={`${theme === 'dark' ? 'dark' : ''}`}>
				<div className='bg-lightgray dark:bg-midnight'>
					<Header onThemeToggle={toggleTheme} theme={theme} />
				</div>
				{children}
			</body>
		</html>
	);
}
