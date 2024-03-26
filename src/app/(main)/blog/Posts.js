import BlogCard from "@/components/blog/BlogCard";
import { FetchBlogs } from "@/libs/import/fetch.posts";

export default async function Posts() {
  const data = await FetchBlogs();
  let blog = await JSON.parse(JSON.stringify(data));
  return (
    <div>
      {blog &&
        blog.map((blog, index) => {
          return <BlogCard blog={blog} key={index} />;
        })}
    </div>
  );
}
