export const typeDefs = `#graphql 
type Game {
	id: ID!
	title: String
	platform: [String]
}

type Review {
	id: ID
	raring: Int
	content: String
}

type Author {
	id: ID!
	name: String
	verified: Boolean
}

type Query {
	reviews: [Review]
	games: [Game]
	authors: [Author]
}
`