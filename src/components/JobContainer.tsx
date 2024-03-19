'use client';
import { useState } from 'react';
import data from '../data/data.json';

import SearchBar from './SearchBar';
import JobCard from './JobCard';
import Button from './Button.client';

const JobContainer = () => {
	const [visibleJobs, setVisibleJobs] = useState(12);

	const loadMoreJobs = () => {
		setVisibleJobs((prevVisibleJobs) => prevVisibleJobs + 9);

		setTimeout(() => {
			window.scrollTo({
				top: document.body.scrollHeight,
				behavior: 'smooth',
			});
		}, 100);
	};
	return (
		<div className='flex flex-col grow items-center justify-between grow w-full bg-lightgray dark:bg-midnight px-8 lg:px-48'>
			<div className='w-full mx-auto -mt-24 lg:-mt-20 flex justify-center'>
				<SearchBar />
			</div>
			<div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 justify-items-stretch'>
				{data
					.slice(0, visibleJobs)
					.map(
						({
							id,
							company,
							logo,
							logoBackground,
							position,
							postedAt,
							contract,
							location,
						}) => {
							return (
								<JobCard
									key={id}
									companyId={id}
									company={company}
									logo={logo}
									logoBackground={logoBackground}
									position={position}
									postedAt={postedAt}
									contract={contract}
									location={location}
								/>
							);
						}
					)}
			</div>
			<div className='py-12'>
				{visibleJobs < data.length && (
					<Button ctaText={'Load More'} onClick={loadMoreJobs} />
				)}
			</div>
		</div>
	);
};

export default JobContainer;
