'use client';

import { useState } from 'react';

import Button from '@/components/Button.client';
import CompanyBanner from '@/components/CompanyBanner';
import Footer from '@/components/Footer';
import Header from '@/components/Header.client';
import JobCard from '@/components/JobCard';

export default function Home() {
	const [theme, setTheme] = useState('dark');

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<main className={`${theme === 'dark' ? 'dark' : ''}`}>
			<div className='flex flex-col grow items-center justify-between grow w-full bg-lightgray dark:bg-midnight'>
				<Header onThemeToggle={toggleTheme} theme={theme} />
				<CompanyBanner
					imageBackgroundColor='hsl(36,87%,49%)'
					imageUrl='/logos/blogr.svg'
					companyName='Blogr'
					companyUrl='blogr.com'
				/>
				<Button ctaText={'Load More'} />
				<JobCard />
				<Footer companyName={'Blogr'} jobTitle={'Senior Software Engineer'} />
			</div>
		</main>
	);
}
