import Image from 'next/image';

interface HeaderProps {
	onThemeToggle: () => void;
	theme: string;
}

const Header: React.FC<HeaderProps> = ({ onThemeToggle, theme }) => {
	return (
		<div className='flex justify-between items-center w-full px-8 lg:px-16 pt-6 pb-16 md:rounded-bl-xl bg-cover bg-no-repeat bg-[center_top_-4rem] bg-[url("/images/mobile/bg-pattern-header.svg")] md:bg-[url("/images/tablet/bg-pattern-header.svg")] lg:bg-[url("/images/desktop/bg-pattern-header.svg")]'>
			<h1 className='text-xl text-white mt-2'>devjobs</h1>
			<div className='flex items-center'>
				<Image src={`/icons/icon-sun.svg`} width={18} height={18} alt={'sun logo'} />
				<button
					onClick={onThemeToggle}
					className={`w-10 h-5 flex items-center bg-white rounded-full p-1 mx-2 duration-300 ease-in-out ${
						theme === 'dark' ? 'justify-end' : 'justify-start'
					}`}
				>
					<div className='bg-violet w-3 h-3 rounded-full shadow-md transform duration-300 ease-in-out'></div>
				</button>
				<Image src={`/icons/icon-moon.svg`} width={16} height={16} alt={'moon logo'} />
			</div>
		</div>
	);
};

export default Header;
