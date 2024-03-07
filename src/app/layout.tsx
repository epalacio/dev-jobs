import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'DevJobs',
	description: 'A jobs board that pulls data from a local JSON file',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
