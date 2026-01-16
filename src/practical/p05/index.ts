import axios from "axios";

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export async function safeFetchComment(
  commentId: number
): Promise<{ id: number; body: string } | null> {
  try {
    const res = await axios.get<Comment>(
      `https://jsonplaceholder.typicode.com/comments/${commentId}`
    );

    return {
      id: res.data.id,
      body: res.data.body
    };
  } catch {
    return null;
  }
}



