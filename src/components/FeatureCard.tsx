interface FeatureCard {
	title: string;
	description: string;
	image: string;
}

export default function FeatureCard({
	title,
	description,
	image,
}: FeatureCard) {
	return (
		<article className='w-50 even:mt-12 space-y-3'>
			<div className='mx-auto mb-8 flex items-center justify-center w-32 h-32 bg-base-200 rounded-4xl'>
				<img src={image} alt={title + ' illustration'} className='w-18' />
			</div>
			<h3 className='text-lg'>{title}</h3>
			<p className='text-justify opacity-75'>{description}</p>
		</article>
	);
}
