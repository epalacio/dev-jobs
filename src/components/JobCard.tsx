import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const JobCard = () => {
	return (
		<div className='bg-white dark:bg-verydarkblue text-gray dark:text-darkgray text-base rounded-md p-8 pl-6 relative'>
			<div className='w-14 h-14 bg-[hsl(36,87%,49%)] rounded-xl flex items-center justify-center p-2 absolute -top-7'>
				<Image
					src={'/logos/scoot.svg'}
					alt={''}
					width={100}
					height={100}
					className='object-contain w-10 h-10'
				/>
			</div>
			<p>
				5h ago <span className='font-bold text-xl'> . </span> Full Time
			</p>
			<Link href={''}>
				<h3 className='text-xl text-verydarkblue dark: text-white hover:text-gray py-1'>
					Senior Software Engineer
				</h3>
			</Link>
			<p className=' pb-8'>Scoot</p>
			<span className='text-sm text-violet font-bold'>United States</span>
		</div>
	);
};

export default JobCard;
