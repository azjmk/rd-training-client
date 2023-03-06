const { query } = require("@simpleview/sv-graphql-client");

const defaultFields = `
    success
    message
`;

class MoviesPrefix {
    constructor({ graphUrl, graphServer }) {
        this.name = "movies";
        this._graphUrl = graphUrl;
        this._graphServer = graphServer;
    }

    async find({ fields = defaultFields, context, filter, headers }) {
        const response = await query({
            query: `
                query ($filter: training_movies_find_input) {
                    training {
                        training_movies_find(filter: $filter) {
                            ${fields}
                        }
                    }
                }
            `,
            variables: { filter },
            url: this._graphUrl,
            headers,
            key: "training.training_movies_find",
            clean: true // automatically run nullToUndefined on the result set
        });

        return response;
    }

    async insert({ fields = defaultFields, context, input, headers }) {
        const response = await query({
            query: `
                mutation ($input: [training_movies_insert_input!]!) {
                    training {
                        training_movies_insert(input: $input) {
                            ${fields}
                        }
                    }
                }
            `,
            variables: { input },
            url: this._graphUrl,
            headers,
            key: "training.training_movies_insert",
            clean: true // automatically run nullToUndefined on the result set
        });

        return response;
    }

    async remove({ fields = defaultFields, context, filter, headers }) {
        const response = await query({
            query: `
                mutation ($filter: training_movies_remove_input) {
                    training {
                        training_movies_remove(filter: $filter) {
                            ${fields}
                        }
                    }
                }
            `,
            variables: { filter },
            url: this._graphUrl,
            headers,
            key: "training.training_movies_remove",
            clean: true // automatically run nullToUndefined on the result set
        });

        return response;
    }
}

module.exports = MoviesPrefix;