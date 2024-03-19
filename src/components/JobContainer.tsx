'use client';
import { useState, useEffect, SetStateAction } from 'react';
import data from '../data/data.json';

import SearchBar from './SearchBar';
import JobCard from './JobCard';
import Button from './Button.client';

const JobContainer = () => {
	const [visibleJobs, setVisibleJobs] = useState(12);
	const [jobs, setJobs] = useState(data); // Store the job data in state
	const [filters, setFilters] = useState({ title: '', location: '', fullTime: false });

	useEffect(() => {
		// Filter job data based on the filters
		const filteredJobs = data.filter((job) => {
			return (
				(filters.title === '' ||
					job.position.toLowerCase().includes(filters.title.toLowerCase())) &&
				(filters.location === '' ||
					job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
				(!filters.fullTime || job.contract === 'Full Time')
			);
		});

		setJobs(filteredJobs);
		setVisibleJobs(12); // Reset visible jobs count on filter change
	}, [filters]); // Re-filter when filters change

	const handleFilterChange = (
		newFilters: SetStateAction<{ title: string; location: string; fullTime: boolean }>
	) => {
		setFilters(newFilters);
	};

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
				<SearchBar onSearch={handleFilterChange} />
			</div>
			<div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 justify-items-stretch'>
				{jobs
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
				{visibleJobs < jobs.length && (
					<Button ctaText={'Load More'} onClick={loadMoreJobs} />
				)}
			</div>
		</div>
	);
};

export default JobContainer;
