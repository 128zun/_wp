import { DB } from "https://deno.land/x/sqlite/mod.ts";

const db = new DB("test.db");

db.query(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    time TEXT,
    name TEXT,
    body TEXT
  )
`);

const posts = [
  {
    time: "2025-05-26 10:00:00",
    name: "Alice",
    body: "Hi!",
  },
  {
    time: "2025-05-26 11:00:00",
    name: "Jack",
    body: "Hello!",
  },
  {
    time: "2025-05-26 12:00:00",
    name: "Ann",
    body: "Good morning.",
  },
];

for (const post of posts) {
  db.query(
    "INSERT INTO posts (time, name, body) VALUES (?, ?, ?)",
    [post.time, post.name, post.body],
  );
}

for (const [id, time, name, body] of db.query(
  "SELECT id, time, name, body FROM posts",
)) {
  console.log(`ID: ${id}, Time: ${time}, Name: ${name}, Post: ${body}`);
}

db.close();
