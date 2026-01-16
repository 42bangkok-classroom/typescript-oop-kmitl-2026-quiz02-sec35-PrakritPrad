import axios from "axios";

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export async function countCommentsByPost(): Promise<Record<number, number>> {
  try {
    const res = await axios.get<Comment[]>(
      "https://jsonplaceholder.typicode.com/comments"
    );
    

    return res.data.reduce<Record<number, number>>((acc, comment) => {
      if (comment.postId === null) {
            return acc;

    }
      acc[comment.postId] = (acc[comment.postId] ?? 0) + 1;
      return acc;
    }, {});
  } catch {
    return {};
  }
}



//asdasdasasdjsdfaldjfhkjlasdfhkadhfkjasdfhkadsjfkadjfhlkadsjhalksjdfalkjdsfhaksdjh
//asdasdasasdjsdfaldjfhkjlasdfhkadhfkjasdfhkadsjfkadjfhlkadsjhalksjdfalkjdsfhaksdjh
//asdasdasasdjsdfaldjfhkjlasdfhkadhfkjasdfhkadsjfkadjfhlkadsjhalksjdfalkjdsfhaksdjh
//asdasdasasdjsdfaldjfhkjlasdfhkadhfkjasdfhkadsjfkadjfhlkadsjhalksjdfalkjdsfhaksdjh
//asdasdasasdjsdfaldjfhkjlasdfhkadhfkjasdfhkadsjfkadjfhlkadsjhalksjdfalkjdsfhaksdjh
//asdasdasasdjsdfaldjfhkjlasdfhkadhfkjasdfhkadsjfkadjfhlkadsjhalksjdfalkjdsfhaksdjh