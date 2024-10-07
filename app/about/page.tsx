import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About Our Blog</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Welcome to our Jamstack blog! We&apos;re passionate about sharing knowledge and insights on various topics.</p>
        <p className="mt-4">Our blog is built using cutting-edge technologies:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Next.js for server-side rendering and routing</li>
          <li>Tailwind CSS for beautiful, responsive designs</li>
          <li>microCMS for content management</li>
        </ul>
      </CardContent>
    </Card>
  );
}