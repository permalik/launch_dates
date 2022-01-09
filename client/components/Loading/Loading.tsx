interface Props {
	content: string;
	inverted?: boolean;
}

export default function Loading({
																	content = 'Loading...',
																	inverted = true
																}: Props) {
	return (
		<section>
			<p>
				{content}
			</p>
		</section>
	);
}