import axios from "axios"
import { title } from "node:process";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function getEdgePosts(userId: number): Promise<{ id: number, title: string }[]> {
  try {

    const res = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return res.data
      .filter(post => post.userId === userId)
      .map(post => ({
        id: post.id,
        title: post.title
      }));
  }
  catch (err) {
    throw err
  }
}

