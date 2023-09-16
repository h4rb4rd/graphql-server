export const typeDefs = `#graphql 
# queries
type Game {
	id: ID!
	title: String
	platform: [String]
	reviews: [Review!]
}

type Review {
	id: ID
	raring: Int
	content: String
	author: Author!
  game: Game!
}

type Author {
	id: ID!
	name: String
	verified: Boolean
	reviews: [Review!]
}

type Query {
	reviews: [Review]
	review(id: ID!): Review
	games: [Game]
	game(id: ID!): Game
	authors: [Author]
	author(id: ID!): Author
}

# mutations
input AddGameInput {
  title: String!,
  platform: [String!]!
}

input EditGameInput {
  title: String,
  platform: [String!]
}

type Mutation {
  addGame(game: AddGameInput!): Game
  deleteGame(id: ID!): [Game]
  updateGame(id: ID!, edits: EditGameInput): Game
}
`
