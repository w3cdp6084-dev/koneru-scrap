import { client } from "../../src/libs/client";

export default function BlogId({ koneruscrap }) {
  return (
    <main>
      <h1>{koneruscrap.title}</h1>
      <p>{koneruscrap.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${koneruscrap.body}`,
        }}
      />
    </main>
  );
}


export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "koneruscrap" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};


export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "koneruscrap", contentId: id });

  return {
    props: {
        koneruscrap: data,
    },
  };
};