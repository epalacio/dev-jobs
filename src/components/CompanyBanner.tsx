import React from 'react';
import Image from 'next/image';

import Button from './Button.client';

interface CompanyBannerProps {
	imageBackgroundColor: string;
	imageUrl: string;
	companyName: string;
	companyUrl: string;
}

const CompanyBanner: React.FC<CompanyBannerProps> = ({
	imageBackgroundColor,
	imageUrl,
	companyName,
	companyUrl,
}) => {
	const imageContainer = `w-14 bg-[${imageBackgroundColor}] rounded-xl flex items-center justify-center p-2 absolute -top-8 md:rounded-none md:rounded-bl-md md:static md:top-0 md:p-6 md:w-40 md:h-full`;

	return (
		<div className='flex flex-col bg-white dark:bg-verydarkblue text-base rounded-md p-8 pl-6 relative w-11/12 my-12 md:flex-row md:items-center md:justify-between md:p-0 md:pr-8 md:rounded-tl-none'>
			<div className='flex flex-col items-center md:flex-row'>
				<div className={imageContainer}>
					<Image
						src={imageUrl}
						alt={''}
						width={100}
						height={100}
						className='object-contain w-10 h-10 md:w-24 md:h-24'
					/>
				</div>
				<div className='md:flex md:flex-col justify-center text-center md:text-left  md:pl-8'>
					<h3 className='text-xl text-verydarkblue dark:text-white hover:text-gray py-1'>
						{companyName}
					</h3>
					<p className=' pb-8 dark:text-darkgray md:pb-0'>{companyUrl}</p>
				</div>
			</div>
			<Button ctaText={'Company Site'} primaryType={false} />
		</div>
	);
};

export default CompanyBanner;
