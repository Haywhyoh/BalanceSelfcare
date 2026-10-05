import Image from "next/image";
import Link from "next/link";
import { getPayloadClient } from "@/lib/payload";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import type { Media } from "@/payload-types";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Reflections on self-care, burnout, boundaries, and culturally responsive mental health from the Balance Self-Care team.",
  path: "/blog",
});

export const revalidate = 60;

function heroUrl(heroImage: Media | number | null | undefined) {
  if (!heroImage || typeof heroImage === "number") return null;
  return heroImage.sizes?.card?.url ?? heroImage.url ?? null;
}

export default async function BlogPage() {
  const payload = await getPayloadClient();
  const { docs: posts } = await payload.find({
    collection: "posts",
    where: { _status: { equals: "published" } },
    overrideAccess: false,
    sort: "-publishedAt",
    depth: 1,
    limit: 50,
  });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Blog
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-[var(--brand)] md:text-5xl">
          Reflections on self-care
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ink-muted)]">
          Notes on burnout, boundaries, and culturally responsive mental health
          from the Balance Self-Care team.
        </p>

        {posts.length === 0 ? (
          <p className="mt-16 text-base text-[var(--ink-muted)]">
            New articles are on the way — check back soon.
          </p>
        ) : (
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const image = heroUrl(post.heroImage);
              return (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                  {image ? (
                    <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--bg-deep)]">
                      <Image
                        src={image}
                        alt={post.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  ) : null}
                  {post.publishedAt ? (
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                      {new Date(post.publishedAt).toLocaleDateString("en-CA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  ) : null}
                  <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-[var(--brand)] transition group-hover:text-[var(--brand-soft)]">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                    {post.excerpt}
                  </p>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
