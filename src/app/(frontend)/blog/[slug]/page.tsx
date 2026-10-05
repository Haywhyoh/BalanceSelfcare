import Image from "next/image";
import { notFound } from "next/navigation";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { getPayloadClient } from "@/lib/payload";
import { buildMetadata } from "@/lib/metadata";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import type { Media } from "@/payload-types";

export const revalidate = 60;

type Props = {
  params: Promise<{ slug: string }>;
};

function mediaUrl(media: Media | number | null | undefined, size?: "og" | "card") {
  if (!media || typeof media === "number") return null;
  if (size) return media.sizes?.[size]?.url ?? media.url ?? null;
  return media.url ?? null;
}

async function getPost(slug: string) {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "posts",
    where: {
      slug: { equals: slug },
      _status: { equals: "published" },
    },
    overrideAccess: false,
    depth: 1,
    limit: 1,
  });
  return docs[0] ?? null;
}

export async function generateStaticParams() {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "posts",
    where: { _status: { equals: "published" } },
    overrideAccess: false,
    depth: 0,
    limit: 200,
  });
  return docs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const description = post.meta?.description || post.excerpt;
  const image =
    mediaUrl(post.meta?.image, "og") ?? mediaUrl(post.heroImage, "card") ?? undefined;

  return buildMetadata({
    title: post.meta?.title || post.title,
    description,
    path: `/blog/${post.slug}`,
    image: image ?? undefined,
    type: "article",
    publishedTime: post.publishedAt ?? undefined,
    modifiedTime: post.updatedAt,
    authors: [post.authorName || "Balance Self-Care Team"],
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const hero = mediaUrl(post.heroImage, "card");
  const name = post.authorName || "Balance Self-Care Team";
  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-CA", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <>
      <JsonLd
        data={blogPostingSchema({
          title: post.title,
          description: post.meta?.description || post.excerpt,
          slug: post.slug,
          image: hero ?? undefined,
          authorName: name,
          publishedAt: post.publishedAt ?? post.createdAt,
          updatedAt: post.updatedAt,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />

      <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Blog
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-tight text-[var(--brand)] md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm font-medium uppercase tracking-wider text-[var(--ink-muted)]">
          {name}
          {publishedDate ? ` · ${publishedDate}` : null}
        </p>

        {hero ? (
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[2rem] bg-[var(--bg-deep)]">
            <Image
              src={hero}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        ) : null}

        <div className="prose-balance mt-10 max-w-none text-base leading-relaxed text-[var(--ink-muted)] md:text-lg [&_h2]:mt-10 [&_h2]:font-[family-name:var(--font-display)] [&_h2]:text-2xl [&_h2]:text-[var(--brand)] [&_h3]:mt-8 [&_h3]:font-[family-name:var(--font-display)] [&_h3]:text-xl [&_h3]:text-[var(--brand)] [&_a]:text-[var(--brand)] [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-[var(--accent)] [&_blockquote]:pl-5 [&_blockquote]:italic [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_strong]:font-semibold [&_strong]:text-[var(--ink)]">
          <RichText data={post.content} />
        </div>
      </article>
    </>
  );
}
