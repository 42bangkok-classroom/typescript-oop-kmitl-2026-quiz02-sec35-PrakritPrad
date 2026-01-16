import axios from "axios"
import { title } from "node:process";

interface Post {
  UserId: number;
  id: number;
  title: string;
  body: string;
}

async function getEdgePosts(): Promise<{id: number, title: string}[]> {
  try {

    const res = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = res.data;
    const first = posts[0];
    const last = posts[posts.length - 1];
    return [first, last].map(p => ({
      id: p.id,
      title: p.title
    }));
  }
  catch (err) {
    throw err
  }
}

async function main() {
  const respone = getEdgePosts();
  console.log(respone);
}

main();