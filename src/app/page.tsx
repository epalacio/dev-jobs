import type { Metadata } from 'next';

import JobContainer from '@/components/JobContainer';

export const metadata: Metadata = {
	title: 'DevJobs',
	description: 'A jobs board that pulls data from a local JSON file',
};

export default function Home() {
	return (
		<main>
			<JobContainer />
		</main>
	);
}
