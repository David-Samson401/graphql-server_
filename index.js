import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { games, reviews, authors } from "./_db.js";

const resolvers = {
  Query: {
    games() {
      return games;
    },
    game(_, args) {
      return games.find((game) => game.id === args.id);
    },
    authors() {
      return authors;
    },
    author(_, args) {
      return authors.find((author) => author.id === args.id);
    },
    reviews() {
      return reviews;
    },
    review(_, args) {
      return reviews.find((review) => review.id === args.id);
    },
  },
  Game: {
    reviews(parent) {
      return reviews.filter((r) => r.game_id === parent.id);
    },
  },
  Author: {
    reviews(parent) {
      return reviews.filter((r) => r.author_id === parent.id);
    },
  },
  Review: {
    author(parent) {
      return authors.find((author) => author.id === parent.author_id);
    },
    game(parent) {
      return games.find((game) => game.id === parent.game_id);
    },
  },
  Mutation: {
    deleteGame(_, args) {
      const index = games.findIndex((game) => game.id === args.id);
      if (index !== -1) {
        games.splice(index, 1);
      }
      return games;
    },
  },
};

//server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//starting the server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
