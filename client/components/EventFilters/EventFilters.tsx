import Calendar from "react-calendar";

const EventFilters = () => {
	return (
		<div>
			<section>
				<header>
					<h2>Filters</h2>
					<div>All Events</div>
					<div>I&#39;m Hosting</div>
					<div>I&#39;m Going</div>
				</header>
			</section>
			<section>
				<h2>Calendar</h2>
				<Calendar/>
			</section>
		</div>
	);
};

export default EventFilters;