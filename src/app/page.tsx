'use client';
import { useState } from 'react';
import data from '../data/data.json';

import Header from '@/components/Header.client';
import JobCard from '@/components/JobCard';
import SearchBar from '@/components/SearchBar';
import Button from '@/components/Button.client';

export default function Home() {
	const [theme, setTheme] = useState('dark');
	const [visibleJobs, setVisibleJobs] = useState(12);

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
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
		<main className={`${theme === 'dark' ? 'dark' : ''}`}>
			<div className='bg-lightgray dark:bg-midnight'>
				<Header onThemeToggle={toggleTheme} theme={theme} />
			</div>
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
		</main>
	);
}
