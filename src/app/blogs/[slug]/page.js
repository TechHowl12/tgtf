import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "../posts";

// ✅ params is async in Next 15
export async function generateStaticParams() {
    const slugs = getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

// ✅ must await params here too
export async function generateMetadata({ params }) {
    const { slug } = await params;

    const post = getPostBySlug(slug);

    if (!post) {
        return { title: "Post not found" };
    }

    return {
        title: `${post.title}`,
        description: post.excerpt,
    };
}

function RenderContent({ post }) {
    return (
        <section className="space-y-4 text-sm leading-relaxed sm:text-base sm:leading-loose">
            {post.content.map((block, index) => {
                if (block.type === "text") {
                    return (
                        <p key={index} className="text-black leading-6" dangerouslySetInnerHTML={{ __html: block.text }}/>
                    );
                }

                if (block.type === "heading") {
                    const Tag =
                        block.level === 1 ? "h2" : block.level === 3 ? "h3" : "h2";

                    const styles =
                        block.level === 1
                            ? "blog-heading text-pink text-2xl sm:text-3xl font-semibold tracking-tight mt-6"
                            : block.level === 3
                                ? "blog-heading text-pink text-lg sm:text-xl font-semibold mt-5"
                                : "blog-heading text-pink text-xl sm:text-2xl font-semibold mt-6";

                    return (
                        <Tag key={index} className={styles}>
                            {block.text}
                        </Tag>
                    );
                }

                if (block.type === "list") {
                    return (
                        <ul key={index} className="list-disc pl-6 space-y-1 text-zinc-800">
                            {block.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    );
                }

                if (block.type === "image") {
                    const src = post.images?.[block.key];
                    if (!src) return null;

                    return (
                        <figure key={index} className="w-full">
                            <div className="relative w-full aspect-video">
                                <Image
                                    src={src}
                                    alt={block.alt || block.key}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 900px"
                                    priority={block.key === "cover"}
                                />
                            </div>
                            {block.caption && (
                                <figcaption className="mt-2 text-center text-sm text-zinc-600">
                                    {block.caption}
                                </figcaption>
                            )}
                        </figure>
                    );
                }

                if (block.type === "link") {
                    return (
                        <p key={index}>
                            <a
                                href={block.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline underline-offset-4 hover:text-blue-800"
                            >
                                {block.text}
                            </a>
                        </p>
                    );
                }

                return null;
            })}
        </section>
    );
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;

    const post = getPostBySlug(slug);
    if (!post) notFound();

    return (
        <main className="mx-auto max-w-5xl px-4 pt-32 pb-10">
            <article>
                <header className="mb-6 sm:mb-8">
                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        {post.title}
                    </h1>
                    <time
                        dateTime={post.date}
                        className="mt-2 block text-sm text-zinc-500"
                    >
                        {new Date(post.date).toLocaleDateString("en-GB", {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                        })}
                    </time>
                </header>

                <RenderContent post={post} />
            </article>
        </main>
    );
}
