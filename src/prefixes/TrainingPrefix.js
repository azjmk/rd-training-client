const MoviesPrefix = require("./collections/MoviesPrefix");
const PeoplePrefix = require("./collections/PeoplePrefix")

class TrainingPrefix {
    constructor({ graphUrl, graphServer }) {
        this.name = "training";
        this._graphUrl = graphUrl;
        this._graphServer = graphServer;

        this._movies = new MoviesPrefix({
            graphUrl,
            graphServer
        });

        this._people = new PeoplePrefix({
            graphUrl,
            graphServer
        });
    }

    async movies(...args) {
        return this._movies.find(...args);
    }

    async movies_insert(...args) {
        return this._movies.insert(...args);
    }

    async movies_remove(...args) {
        return this._movies.remove(...args);
    }

    async people(...args) {
        return this._people.find(...args);
    }

    async people_insert(...args) {
        return this._people.insert(...args);
    }

    async people_remove(...args) {
        return this._people.remove(...args);
    }
}

module.exports = TrainingPrefix;