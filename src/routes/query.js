import _ from 'lodash';

export async function get({ request }) {
	return {
		status: 200,
		body: _.capitalize('hello world')
	};
}
