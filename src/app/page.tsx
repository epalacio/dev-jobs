import Button from '@/components/Button.client';
import JobCard from '@/components/JobCard';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<Button ctaText={'Load More'} />
			<JobCard />
		</main>
	);
}
