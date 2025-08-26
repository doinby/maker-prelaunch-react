interface Card {
	title: string;
	description: string;
	image: string;
}

export default function Card({ title, description, image }: Card) {
	return (
		<article className='even:mt-12 flex flex-col items-center space-y-4'>
			<div className='flex items-center justify-center w-32 h-32 bg-base-200 rounded-4xl'>
				<img src={image} alt={title + ' illustration'} className='w-20' />
			</div>
			<h3>{title}</h3>
			<p className='w-56 text-neutral-400'>{description}</p>
		</article>
	);
}
