import Link from 'next/link'
import ScrollAnimation from '../../components/ScrollAnimation'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { formatDate } from '../../lib/utils'
import { blogs } from '@/lib/appConstant'

export default function Blogs() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <ScrollAnimation>
          <h1 className="text-5xl font-bold text-center mb-4 text-pink-600">Our Blog</h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Insights, tutorials, and updates from our team
          </p>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto space-y-8">
          {blogs.map((blog) => (
            <ScrollAnimation key={blog.id}>
              <article className="bg-muted rounded-xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(blog.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {blog.author}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors text-pink-600">
                      <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </h2>
                    <p className="text-muted-foreground mb-4">{blog.excerpt}</p>
                    <Link
                      href={`/blogs/${blog.id}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-blue-500"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </ScrollAnimation>
          ))}
        </div>
      </section>
    </main>
  )
}