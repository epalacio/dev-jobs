import { useState } from 'react';
import Image from 'next/image';
import Button from './Button.client';

const SearchBar = () => {
	const [filters, setFilters] = useState({ title: '', location: '', fullTime: false });

	const handleFilterChange = (e: any) => {
		const { name, value, checked, type } = e.target;

		setFilters((prevFilters) => ({
			...prevFilters,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	return (
		<div className='flex p-6 bg-white dark:bg-verydarkblue w-11/12 my-12 rounded-lg items-center justify-between'>
			<label htmlFor='title-input' className='flex items-center justify-start grow'>
				<Image
					src={`/icons/icon-search.svg`}
					width={18}
					height={18}
					alt={'search logo'}
					className='object-contain hidden md:block'
				/>
				<input
					id='title-input'
					type='text'
					className='block w-full border-0 outline-none ring-0 py-1.5 px-2 text-midnight dark:text-white placeholder:text-gray sm:text-md sm:leading-6 focus:ring-0 focus:ring-offset-0 focus:border-transparent outline-none bg-transparent'
					value={filters.title}
					onChange={handleFilterChange}
					placeholder='Filter by title...'
					name='title'
				/>
				<div
					className='block md:hidden bg-violet p-3 rounded-md cursor-pointer'
					onClick={() => console.log('search clicked')}
				>
					<Image
						src={`/icons/icon-search-mobile.svg`}
						width={18}
						height={18}
						alt={'search logo'}
						className='object-contain'
					/>
				</div>
			</label>
			<label
				htmlFor='location-input'
				className='flex items-center justify-start grow  hidden md:flex'
			>
				<Image
					src={`/icons/icon-location.svg`}
					width={14}
					height={14}
					alt={'location logo'}
					className='object-contain'
				/>
				<input
					id='title-input'
					type='text'
					className='block w-full border-0 outline-none ring-0 py-1.5 px-2 text-midnight dark:text-white placeholder:text-gray sm:text-md sm:leading-6 focus:ring-0 focus:ring-offset-0 focus:border-transparent outline-none bg-transparent'
					value={filters.location}
					onChange={handleFilterChange}
					placeholder='Filter by location...'
					name='location'
				/>
			</label>
			<label
				htmlFor='fulltime-input'
				className='flex items-center justify-end grow hidden md:flex gap-2'
			>
				<input
					id='fulltime-input'
					type='checkbox'
					className='w-6 h-6 accent-violet'
					checked={filters.fullTime}
					onChange={handleFilterChange}
					placeholder='Filter by location...'
					name='fullTime'
				/>
				<p className='font-bold text-md text-verydarkblue dark:text-white'>
					Full Time Only
				</p>
				<Button ctaText={'Search'} />
			</label>
		</div>
	);
};

export default SearchBar;
