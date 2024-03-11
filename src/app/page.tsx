import Button from '@/components/Button.client';
import CompanyBanner from '@/components/CompanyBanner';
import Footer from '@/components/Footer';
import JobCard from '@/components/JobCard';

export default function Home() {
	return (
		<main className='flex flex-col items-center justify-between dark:bg-midnight grow min-h-screen'>
			<CompanyBanner
				imageBackgroundColor='hsl(254,71%,45%)'
				imageUrl='/logos/blogr.svg'
				companyName='Blogr'
				companyUrl='blogr.com'
			/>
			<Button ctaText={'Load More'} />
			<JobCard />
			<Footer companyName={'Blogr'} jobTitle={'Senior Software Engineer'} />
		</main>
	);
}
