import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { formatDate } from "../../../lib/utils";
import Link from "next/link";
import { blogs } from "@/lib/appConstant";


export function generateStaticParams() {
    return blogs.map((blog) => ({
      id: blog.id,
    }))
  }
export default async function BlogDetail({ params }: { params:  Promise<{ id: string }> }) {
    const { id } = await params
    const blog = blogs.find((b) => b.id === id)
  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <article className="container mx-auto px-4 py-20 max-w-4xl">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blogs
        </Link>

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-xl mb-8"
        />

        <div className="flex items-center gap-6 text-muted-foreground mb-6">
          <span className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            {formatDate(blog.date)}
          </span>
          <span className="flex items-center gap-2">
            <User className="h-5 w-5" />
            {blog.author}
          </span>
        </div>

        <h1 className="text-5xl font-bold mb-8 text-pink-600">{blog.title}</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
        />
      </article>
    </main>
  );
}
