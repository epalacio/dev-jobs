'use client';
import React from 'react';

interface ButtonProps {
	ctaText: string;
	primaryType?: boolean;
	fullWidth?: boolean;
	onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ ctaText, fullWidth, primaryType = true, onClick }) => {
	let style = `text-base border-2 rounded-md px-4 py-2 font-bold ${fullWidth ? 'w-full' : ''} ${
		primaryType
			? 'bg-violet border-violet hover:bg-lightviolet hover:border-lightviolet'
			: 'bg-darkgray border-darkgray hover:bg-gray hover:border-gray '
	}`;

	return (
		<button className={style} onClick={onClick}>
			{ctaText}
		</button>
	);
};

export default Button;
