import React from 'react';
import Image from 'next/image';

import Button from './Button.client';

interface FooterProps {
	companyName: string;
	jobTitle: string;
}

const Footer: React.FC<FooterProps> = ({ companyName, jobTitle }) => {
	return (
		<div className='flex flex-col p-6 lg:px-70 bg-white dark:bg-verydarkblue text-base w-full mt-12 md:flex-row md:items-center md:justify-between rounded-t-md'>
			<div className='flex flex-col items-center md:flex-row hidden md:block'>
				<div className='md:flex md:flex-col justify-center text-center md:text-left'>
					<h3 className='text-xl text-verydarkblue dark:text-white hover:text-gray py-1'>
						{jobTitle}
					</h3>
					<p className='text-lg text-darkgray mt-2'>{companyName}</p>
				</div>
			</div>
			<Button ctaText={'Apply Now'} onClick={() => console.log('Clicked')} />
		</div>
	);
};

export default Footer;
