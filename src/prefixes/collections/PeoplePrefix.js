const { query } = require('@simpleview/sv-graphql-client');

class PeoplePrefix {
	constructor({ graphUrl, graphServer }) {
		this.name = 'people';
		this._graphUrl = graphUrl;
		this._graphServer = graphServer;
	}

	async find({ fields, context, filter, headers }) {
		const variables = {
			filter
		}

		const response = await query({
			query: `
				query ($filter: training_people_find_input) {
					training {
						training_people_find(filter: $filter) {
							${fields}
						}
					}
				}
			`,
			variables,
			url: this._graphUrl,
			headers,
			key: 'training.training_people_find',
			clean: true
		});

		return response;
	}

	async insert({ fields, context, input, headers }) {
		const variables = {
			input
		}

		const response = await query({
			query: `
				mutation ($input: [training_people_insert_input!]!) {
					training {
						training_people_insert(input: $input) {
							${fields}
						}
					}
				}
			`,
			variables,
			url: this._graphUrl,
			headers,
			key: 'training.training_people_insert',
			clean: true
		});

		return response;
	}

	async remove({ fields, context, filter, headers }) {
		const variables = {
			filter
		}

		const response = await query({
			query: `
				mutation ($filter: training_people_remove_input) {
					training {
						training_people_remove(filter: $filter) {
							${fields}
						}
					}
				}
			`,
			variables,
			url: this._graphUrl,
			headers,
			key: 'training.training_people_remove',
			clean: true
		});

		return response;
	}
}

module.exports = PeoplePrefix;