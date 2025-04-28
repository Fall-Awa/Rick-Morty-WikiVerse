import { Suspense } from "react";
import { Await, NavLink, useAsyncValue, useLoaderData } from "react-router-dom";
import Spinner from "../Spinner";

export default function Blog() {
  const { posts } = useLoaderData();
  console.log(posts);

  return (
    <>
      <h1>Mon blog</h1>
      <Suspense fallback={<Spinner />}>
        <Await resolve={posts}>
          <PostList />
        </Await>
      </Suspense>
    </>
  );
}

function PostList() {
  const posts = useAsyncValue();

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <NavLink to={post.id}>{post.title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
