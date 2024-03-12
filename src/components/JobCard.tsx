import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface JobCardProps {
	company: string;
	logo: string;
	logoBackground: string;
	position: string;
	postedAt: string;
	contract: string;
	location: string;
}

const JobCard: React.FC<JobCardProps> = ({
	company,
	logo,
	logoBackground,
	position,
	postedAt,
	contract,
	location,
}) => {
	return (
		<div className='bg-white dark:bg-verydarkblue text-gray dark:text-darkgray text-base rounded-md p-8 pl-6 relative min-w-80'>
			<div
				className={`w-14 h-14 rounded-xl flex items-center justify-center p-2 absolute -top-7`}
				style={{ backgroundColor: logoBackground }}
			>
				<Image
					src={logo}
					alt={`${company} main logo`}
					width={100}
					height={100}
					className='object-contain w-10 h-10'
				/>
			</div>
			<p>
				{postedAt} <span className='font-bold text-xl'> . </span> {contract}
			</p>
			<Link href={''}>
				<h3 className='text-xl text-verydarkblue dark:text-white hover:text-gray dark:hover:text-gray py-1'>
					{position}
				</h3>
			</Link>
			<p className=' pb-8'>{company}</p>
			<span className='text-sm text-violet font-bold'>{location}</span>
		</div>
	);
};

export default JobCard;
