import React from "react";
import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import BlogList from "../../components/BlogList";
import PreviewBlogList from "../../components/PreviewBlogList";

export const revalidate = 60
const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

async function HomePage() {
  if (previewData()) {
    return (<PreviewSuspense fallback={
      <div role="status">
        <p className="text-center text-lg animate-pulse text-[#f7ab07]">
          Loading Preview Data
        </p>
      </div>
    }><PreviewBlogList query={query}/></PreviewSuspense>)
  }

  const posts = await client.fetch(query)
  
  return (
    <div>
      <h1 className="text-4xl">
        <BlogList posts={posts} />
      </h1>
    </div>
  );
}

export default HomePage;
