'use client';
import { usePathname } from 'next/navigation';
import data from '../../../data/data.json';
import CompanyBanner from '@/components/CompanyBanner';
import Footer from '@/components/Footer';
import Button from '@/components/Button.client';

const CompanyPage = () => {
	const pathName = usePathname();
	const companyId = pathName.split('/')[2];

	const companyData = data.filter((company) => company.id.toString() === companyId)[0];
	const {
		company,
		apply,
		logo,
		logoBackground,
		position,
		requirements,
		role,
		postedAt,
		contract,
		location,
	} = companyData;
	console.log(companyData);

	return (
		<div className='bg-lightgray dark:bg-midnight'>
			<div className='flex flex-col grow items-center justify-between grow w-full bg-lightgray dark:bg-midnight lg:px-56'>
				<CompanyBanner
					imageBackgroundColor={logoBackground}
					imageUrl={logo}
					companyName={company}
					companyUrl={apply}
				/>
				<div className='text-left rounded-md w-11/12 p-10 bg-white dark:bg-verydarkblue'>
					<div className='flex justify-between items-center'>
						<div>
							<p className='text-darkgray'>
								{postedAt} <span className='font-bold text-xl'> . </span> {contract}
							</p>
							<h3 className='font-bold text-xl text-verydarkblue dark:text-white hover:text-gray dark:hover:text-gray py-2'>
								{position}
							</h3>
							<span className='text-sm text-violet font-bold'>{location}</span>
						</div>
						<Button ctaText={'Apply Now'} onClick={() => console.log('Apply Now')} />
					</div>
					<h4 className='text-lg font-bold mb-4 mt-10 text-verydarkblue dark:text-white'>
						Requirements
					</h4>
					<p className='text-darkgray'>{requirements.content}</p>
					<ul className='list-disc px-4 py-2 text-darkgray'>
						{requirements.items.map((item) => {
							return (
								<li className='pl-8' key={item}>
									{item}
								</li>
							);
						})}
					</ul>

					<h4 className='text-lg font-bold mb-4 mt-10 text-verydarkblue dark:text-white'>
						What You Will Do
					</h4>
					<p className='text-darkgray'>{role.content}</p>
					<ul className='list-disc px-4 py-2 text-darkgray'>
						{role.items.map((item) => {
							return (
								<li className='pl-8' key={item}>
									{item}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<Footer companyName={company} jobTitle={position} />
		</div>
	);
};

export default CompanyPage;
