async function getPost(slug: string) {}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  return <article className="container mx-auto px-4 py-8"></article>;
}
