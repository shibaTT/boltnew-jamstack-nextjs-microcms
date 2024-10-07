import { notFound } from 'next/navigation';
import { getPostById, getAllPosts } from '@/lib/microcms';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);

  if (!post) {
    notFound();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <p className="mt-4">カテゴリー: {post.category?.title}</p>
      </CardContent>
    </Card>
  );
}