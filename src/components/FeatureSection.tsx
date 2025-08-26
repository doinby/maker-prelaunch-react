import FeatureCard from './FeatureCard';
import illustration0 from '../assets/illustration-passions.svg';
import illustration1 from '../assets/illustration-financial-freedom.svg';
import illustration2 from '../assets/illustration-lifestyle.svg';
import illustration3 from '../assets/illustration-work-anywhere.svg';

export default function FeatureSection() {
	const content = [
		{
			title: 'Indulge your passions',
			description: `Your passions shouldn't be just for the weekend. Earn
		a living doing what you love.`,
			image: illustration0,
		},
		{
			title: 'Gain financial freedom',
			description: `Start making money
		work for you. There's nothing quite like earning while you sleep.`,
			image: illustration1,
		},
		{
			title: 'Choose your lifestyle',
			description: 'Fancy a lie-in? Go for it! Take charge of your week.',
			image: illustration2,
		},
		{
			title: 'Work from anywhere',
			description:
				'Selling online means not being pinned down. Want to work AND travel? Go for it!',
			image: illustration3,
		},
	];

	return (
		<section id='feature' className='flex flex-wrap gap-12'>
			<FeatureCard
				title={content[0].title}
				description={content[0].description}
				image={content[0].image}
			/>
			<FeatureCard
				title={content[1].title}
				description={content[1].description}
				image={content[1].image}
			/>
			<FeatureCard
				title={content[2].title}
				description={content[2].description}
				image={content[2].image}
			/>
			<FeatureCard
				title={content[3].title}
				description={content[3].description}
				image={content[3].image}
			/>
		</section>
	);
}
