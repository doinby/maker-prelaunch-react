import PricingCard from './PricingCard';
import pricing0 from '../assets/icon-free.svg';
import pricing1 from '../assets/icon-paid.svg';

export default function PricingSection() {
	const content = [
		{
			title: 'Dip your toe',
			description:
				'Just getting started? No problem at all! Our free plan will take you a long way.',
			price: 0,
			plan: 'monthly',
			features: [
				'Unlimited products',
				'Basic analytics',
				'Limited marketplace exposure',
				'10% fee per transaction',
			],
			image: pricing0,
		},
		{
			title: 'Dive right in',
			description:
				'Ready for the big time? Our paid plan will help you take your business to the next level.',
			price: 25,
			plan: 'monthly',
			features: [
				'Custom domain',
				'Advanced analytics and reports',
				'High marketplace visibility',
				'5% fee per transaction',
			],
			image: pricing1,
		},
	];

	return (
		<section className='space-y-12'>
			<div className='space-y-3'>
				<h2 className='text-2xl text-center'>Our pricing plans</h2>
				<p className='w-md mx-auto text-center opacity-75'>
					We only make money when our creators make money. Our plans are always
					affordable, and it&apos;s completely free to get started.
				</p>
			</div>

			<div className='flex gap-12'>
				<PricingCard props={content[0]} />
				<PricingCard props={content[1]} />
			</div>
		</section>
	);
}
