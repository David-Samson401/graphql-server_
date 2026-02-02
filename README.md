# GraphQL Server Example

A simple GraphQL server built with Apollo Server for managing games, reviews, and authors.

## Installation

```bash
npm install
```

## Running the Server

```bash
# Using node
node index.js

# Using nodemon (for development)
nodemon index
```

The server will start at `http://localhost:4000`

## GraphQL Schema

### Types

- **Game** - id, title, platform, reviews
- **Review** - id, rating, content, game, author
- **Author** - id, name, verified, reviews

## Example Queries

### Get all games

```graphql
query {
  games {
    id
    title
    platform
  }
}
```

### Get a single game with reviews

```graphql
query {
  game(id: "1") {
    title
    platform
    reviews {
      rating
      content
    }
  }
}
```

### Get all authors

```graphql
query {
  authors {
    id
    name
    verified
  }
}
```

### Get all reviews

```graphql
query {
  reviews {
    id
    rating
    content
  }
}
```

## Example Mutations

### Add a new game

```graphql
mutation AddGame($game: AddGameInput!) {
  addGame(game: $game) {
    id
    title
    platform
  }
}
```

Variables:

```json
{
  "game": {
    "title": "A new game",
    "platform": ["switch", "ps5"]
  }
}
```

### Delete a game

```graphql
mutation {
  deleteGame(id: "1") {
    id
    title
  }
}
```

## Tech Stack

- Node.js
- Apollo Server
- GraphQL
