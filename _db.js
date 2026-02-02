let games = [
  {
    id: "1",
    title: "The Legend of Zelda: Breath of the Wild",
    platform: ["Nintendo Switch", "Wii U"],
  },
  {
    id: "2",
    title: "God of War",
    platform: ["PlayStation 4"],
  },
  {
    id: "3",
    title: "Halo Infinite",
    platform: ["Xbox Series X", "PC"],
  },
];

let reviews = [
  {
    id: "1",
    rating: 10,
    content: "An absolute masterpiece with stunning visuals and gameplay.",
    game_id: "1",
    author_id: "1",
  },
  {
    id: "2",
    rating: 9,
    content: "A thrilling adventure with a compelling story.",
    game_id: "2",
    author_id: "2",
  },
  {
    id: "3",
    rating: 8,
    content:
      "Great multiplayer experience but lacks depth in single-player mode.",
    game_id: "3",
    author_id: "3",
  },
];

let authors = [
  {
    id: "1",
    name: "Alice Johnson",
    verified: true,
  },
  {
    id: "2",
    name: "Bob Smith",
    verified: false,
  },
  {
    id: "3",
    name: "Charlie Brown",
    verified: true,
  },
];

export { games, reviews, authors };
