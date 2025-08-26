import scrollIcon from '../assets/icon-scroll.svg';
import HeroImageLeft from '../assets/illustration-hero-left.svg';
import HeroImageRight from '../assets/illustration-hero-right.svg';

export default function HeroSection() {
	return (
		<section id='hero' className='relative h-[468px] w-full flex'>
			<article className='w-lg h-full m-auto px-6 flex flex-col gap-6 items-center justify-center text-center bg-base-100 z-1'>
				<h2 className='text-4xl'>
					Get paid for the work you <span className='text-accent'>love</span> to
					do.
				</h2>
				<p className='text-neutral-400'>
					The 9-5 grind is so last century. We believe in living life on your
					own terms. Whether you&quot;re looking to escape the rat race or set
					up a side hustle, we&quot;ve got you covered.
				</p>

				<img src={scrollIcon} alt='Scroll Down Icon' className='w-6' />
			</article>

			<img
				src={HeroImageLeft}
				alt='Hero Image Left'
				className='absolute top-0 z-0'
			/>
			<img
				src={HeroImageRight}
				alt='Hero Image Right'
				className='absolute top-0 right-0 z-0'
			/>
		</section>
	);
}
