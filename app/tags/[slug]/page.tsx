import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getTags } from "@/lib/microcms"

export async function generateStaticParams() {
  const tags = await getTags();
  return tags.map((tag) => ({
    slug: tag.id,
  }));
}

export default function TagPosts({ params }: { params: { slug: string } }) {
  // Dummy data for tag posts (replace with actual API call to microCMS)
  const posts = [
    { id: 1, title: "Post with Tag", excerpt: "This is a post with the tag.", tag: params.slug },
    { id: 2, title: "Another Tagged Post", excerpt: "This is another post with the tag.", tag: params.slug },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Posts tagged with {params.slug}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>Tag: {post.tag}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/posts/${post.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}