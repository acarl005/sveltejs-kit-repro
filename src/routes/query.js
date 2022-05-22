import _ from 'lodash';
import { parse } from 'pgsql-parser';

export async function get({ request }) {
	return {
		status: 200,
		body: _.capitalize('hello world')
	};
}
