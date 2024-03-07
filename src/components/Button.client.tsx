'use client';
import React from 'react';

interface ButtonProps {
	ctaText: string;
	type: string;
	fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ ctaText, fullWidth, type = 'primary' }) => {
	let style = `text-base border-2 border-violet rounded-md px-6 py-3 hover:bg-lightviolet hover:border-lightviolet font-bold ${
		fullWidth ? 'w-full' : ''
	} ${
		type === 'primary'
			? 'bg-violet border-violet hover:bg-lightviolet hover:border-lightviolet'
			: 'bg-darkgray border-darkgray hover:bg-gray hover:border-gray'
	}`;

	return (
		<button className={style} onClick={() => console.log('button clicked')}>
			{ctaText}
		</button>
	);
};

export default Button;
