import FetchPosts from "@/libs/import/fetch.posts";
import Card from "@/components/cardList/Card";

export default async function Posts() {
  const data = await FetchPosts('almashinuv');
  let post = await JSON.parse(JSON.stringify(data));   
  return (
    <div>
      {post &&
        post.map((post, index) => {          
          return( <Card post={post} key={index} />);
        })}
    </div>
  );
}
