import db from './_db.js'

export const resolvers = {
	Query: {
		games() {
			return db.games
		},
		game(_, args) {
			return db.games.find(game => game.id === args.id)
		},
		reviews() {
			return db.reviews
		},
		review(_, args) {
			return db.reviews.find(review => review.id === args.id)
		},
		authors() {
			return db.authors
		},
		author(_, args) {
			return db.authors.find(author => author.id === args.id)
		},
	},
	// related resolvers
	Game: {
		reviews(parent) {
			return db.reviews.filter(r => r.game_id === parent.id)
		},
	},
	Review: {
		author(parent) {
			return db.authors.find(a => a.id === parent.author_id)
		},
		game(parent) {
			return db.games.find(g => g.id === parent.game_id)
		},
	},
	Author: {
		reviews(parent) {
			return db.reviews.filter(r => r.author_id === parent.id)
		},
	},

	Mutation: {
		addGame(_, args) {
			let game = {
				...args.game,
				id: Math.floor(Math.random() * 10000).toString(),
			}
			db.games.push(game)

			return game
		},
		deleteGame(_, args) {
			db.games = db.games.filter(g => g.id !== args.id)

			return db.games
		},
		updateGame(_, args) {
			db.games = db.games.map(g => {
				if (g.id === args.id) {
					return { ...g, ...args.edits }
				}

				return g
			})

			return db.games.find(g => g.id === args.id)
		},
	},
}
