const { query } = require('@simpleview/sv-graphql-client');
const Movies = require('./collections/Movies');
const People = require('./collections/People');

class TrainingPrefix {
	constructor({ graphUrl, graphServer }) {
		this.name = 'training';
		this._graphUrl = graphUrl;
		this._graphServer = graphServer;

		this.movies = new Movies({
			graphUrl,
			graphServer
		});

		this.people = new People({
			graphUrl,
			graphServer
		});
	}

	async test_data_clear({ fields = `success message`, context, filter, headers } = {}) {
		const response = await query({
			query: `
				mutation {
					training {
						test_data_clear {
							${fields}
						}
					}
				}
			`,
			url: this._graphUrl,
			headers,
			key: 'training.test_data_clear',
			clean: true
		});

		return response;
	}

	async test_data_reset({ fields = `success message`, context, input, headers } = {}) {
		const response = await query({
			query: `
				mutation {
					training {
						test_data_reset {
							${fields}
						}
					}
				}
			`,
			url: this._graphUrl,
			headers,
			key: 'training.test_data_reset',
			clean: true
		});

		return response;
	}
}

module.exports = TrainingPrefix;