import { getAllPosts } from '@/lib/microcms';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

function extractTextFromHtml(htmlString: string) {
  // HTMLタグを除去
  let text = htmlString.replace(/<[^>]*>/g, '');

  // HTMLエンティティをデコード
  text = text.replace(/&nbsp;/g, ' '); // スペース
  text = text.replace(/&amp;/g, '&'); // アンパサンド
  text = text.replace(/&lt;/g, '<'); // 小なり
  text = text.replace(/&gt;/g, '>'); // 大なり
  text = text.replace(/&quot;/g, '"'); // ダブルクォート
  text = text.replace(/&#39;/g, "'"); // シングルクォート

  // 連続する空白文字を1つのスペースに置換
  text = text.replace(/\s+/g, ' ');

  // 先頭と末尾の空白を削除
  return text.trim();
}

export default async function Home() {
  const posts = await getAllPosts();
  const generateExcerpt = (content: string) => {
    const htmlString = extractTextFromHtml(content);
    return htmlString.substring(0, 40) + '...';
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post: any) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.category?.title}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{generateExcerpt(post.content)}</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href={`/posts/${post.id}`}>続きを読む</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
