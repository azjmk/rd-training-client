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

	async clearTestData({ fields = `success message`, context, filter, headers } = {}) {
		const response = await query({
			query: `
				mutation {
					training {
						training_test_clear_data {
							${fields}
						}
					}
				}
			`,
			url: this._graphUrl,
			headers,
			key: 'training.training_test_clear_data',
			clean: true
		});

		return response;
	}

	async resetTestData({ fields = `success message`, context, input, headers } = {}) {
		const response = await query({
			query: `
				mutation {
					training {
						training_test_reset_data {
							${fields}
						}
					}
				}
			`,
			url: this._graphUrl,
			headers,
			key: 'training.training_test_reset_data',
			clean: true
		});

		return response;
	}
}

module.exports = TrainingPrefix;