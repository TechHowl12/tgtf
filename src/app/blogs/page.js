import Link from "next/link";
import { getAllPosts } from "./posts";

export const metadata = {
    title: "Blogs | TGTF",
    description: "Browse all blog posts and articles.",
};

export default function BlogsPage() {
    const posts = getAllPosts();

    return (
        <section className="blog-banner">
            <main className="mx-auto max-w-7xl px-4 pt-32 pb-14">
                <header className="mb-8 sm:mb-10">
                    <h1 className="tracking-tight text-white font-semibold">
                        Blogs
                    </h1>
                </header>

                {posts.length === 0 ? (
                    <p className="text-sm text-zinc-400">No posts published yet.</p>
                ) : (
                    <ul data-aos="zoom-out" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 cursor-pointer">
                        {posts.map((post) => (
                            <li
                                key={post.slug}
                                className="group rounded-xl bg-slate-50 shadow-2xl px-4 py-5 relative h-64 xl:h-72"
                            >
                                <article>
                                    <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                                        <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                                            <Link
                                                href={`/blogs/${post.slug}`}
                                                className=""
                                            >
                                                {post.title}
                                            </Link>
                                        </h2>
                                    </header>

                                    <time
                                        dateTime={post.date}
                                        className="text-xs text-zinc-500 sm:text-sm"
                                    >
                                        {new Date(post.date).toLocaleDateString("en-GB", {
                                            year: "numeric",
                                            month: "short",
                                            day: "2-digit",
                                        })}
                                    </time>

                                    <div className="mt-3">
                                        <Link
                                            href={`/blogs/${post.slug}`}
                                            className="inline-flex items-center text-xs font-medium text-blue sm:text-sm absolute bottom-3"
                                        >
                                            Read more
                                            <span aria-hidden="true" className="ml-1">
                                                →
                                            </span>
                                        </Link>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                )}
            </main>
        </section>
    );
}
