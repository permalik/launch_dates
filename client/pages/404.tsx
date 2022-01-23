import Link from "next/link";

const Custom404Page = () => {
	return (
		<section>
			<header>
				<h1>We were unable to find what you were looking for</h1>
			</header>
			<Link
				href={'/eventDashboard'}
				passHref>
				<button>
					Return to events page
				</button>
			</Link>
		</section>
	);
};

export default Custom404Page;