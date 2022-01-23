import { observer } from 'mobx-react-lite';
import {useStore} from '../stores/store';

const ServerError = () => {
	const {commonStore} = useStore();

	return (
		<section>
			<header>
				<h1>
					Server Error
				</h1>
				<h2>
					{commonStore.error?.message}
				</h2>
			</header>
			{commonStore.error?.details &&
          <div>
              <header>
                  <h3>
                      Stack Trace
                  </h3>
                  <code>
										{commonStore.error.details}
                  </code>
              </header>
          </div>
			}
		</section>
	);
};

export default observer(ServerError);