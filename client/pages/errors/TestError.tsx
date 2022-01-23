import axios from 'axios';
import {useState} from 'react';
import ValidationErrors from './ValidationErrors';

export default function TestErrors() {
	const baseUrl = 'http://localhost:5000/api/'
	const [errors, setErrors] = useState(null);

	function handleNotFound() {
		axios.get(baseUrl + 'buggy/not-found').catch(err => console.log(err.response));
	}

	function handleBadRequest() {
		axios.get(baseUrl + 'buggy/bad-request').catch(err => console.log(err.response));
	}

	function handleServerError() {
		axios.get(baseUrl + 'buggy/server-error').catch(err => console.log(err.response));
	}

	function handleUnauthorised() {
		axios.get(baseUrl + 'buggy/unauthorised').catch(err => console.log(err.response));
	}

	function handleBadGuid() {
		axios.get(baseUrl + 'events/notaguid').catch(err => console.log(err.response));
	}

	function handleValidationError() {
		axios.post(baseUrl + 'events', {}).catch(err => setErrors(err));
	}

	return (
		<>
			<header>
				<h1>Test Error component</h1>
			</header>
			<section>
				<button onClick={handleNotFound}>
					Not Found
				</button>
				<button onClick={handleBadRequest}>
					Bad Request
				</button>
				<button onClick={handleValidationError}>
					Validation Error
				</button>
				<button onClick={handleServerError}>
					Server Error
				</button>
				<button onClick={handleUnauthorised}>
					Unauthorised
				</button>
				<button onClick={handleBadGuid}>
					Bad Guid
				</button>
			</section>
			{errors &&
				<ValidationErrors errors={errors}/>
			}
		</>
	)
}

