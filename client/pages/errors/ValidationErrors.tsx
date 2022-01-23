interface Props {
	errors: string[] | null;
}

const ValidationErrors = ({errors}: Props) => {
	return (
		<ul>
			{errors.map((err: any, i) => (
				<li key={i}>
					{err}
				</li>
			))}
		</ul>
	);
};

export default ValidationErrors;