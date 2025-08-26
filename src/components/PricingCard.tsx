interface PricingCard {
	title: string;
	description: string;
	price: number;
	plan: string;
	features: string[];
}

export default function PricingCard({ props }: { props: PricingCard }) {
	const { title, description, price, plan, features } = props;
	const frequency = plan === 'monthly' ? '/ month' : '/week';
	const bgColor =
		price === 0 ? 'bg-base-200 text-white' : 'bg-accent !text-black';
	const listStyle =
		price === 0 ? 'list-image-(--check-white)' : 'list-image-(--check-black)';

	return (
		<article className={`w-sm p-8 space-y-6 rounded-lg text-base ${bgColor}`}>
			{/* <img src={image} alt={title + ' image'} className='h-22' /> */}
			<h3 className='text-2xl mb-1'>{title}</h3>
			<p className='text-sm opacity-75'>{description}</p>
			<h3 className='text-4xl font-bold'>
				${price}
				<span className='text-base opacity-75'> {frequency}</span>
			</h3>
			<ul className={`ml-4 ${listStyle}`}>
				{features.map((item, idx) => {
					const id = title.toLowerCase().split(' ').join('-');
					return <li key={id + idx}>{item}</li>;
				})}
			</ul>
		</article>
	);
}
