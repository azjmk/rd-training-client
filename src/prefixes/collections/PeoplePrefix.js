const { query } = require("@simpleview/sv-graphql-client");

class PeoplePrefix {
    constructor({ graphUrl, graphServer }) {
        this.name = "people";
        this._graphUrl = graphUrl;
        this._graphServer = graphServer;
    }

    async find({ fields, context, filter, headers }) {
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
            variables: { filter },
            url: this._graphUrl,
            headers,
            key: "training.training_people_find",
            clean: true // automatically run nullToUndefined on the result set 
        });

        return response;
    }

    async insert({ fields, context, input, headers }) {
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
            variables: { input },
            url: this._graphUrl,
            headers,
            key: "training.training_people_insert",
            clean: true // automatically run nullToUndefined on the result set
        });

        return response;
    }

    async remove({ fields, context, filter, headers }) {
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
            variables: { filter },
            url: this._graphUrl,
            headers,
            key: "training.training_people_remove",
            clean: true // automatically run nullToUndefined on the result set
        });

        return response;
    }
}

module.exports = PeoplePrefix;