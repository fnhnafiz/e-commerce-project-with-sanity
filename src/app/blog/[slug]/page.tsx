import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";

export default async function WatchDetailsPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const query = `*[_type == "products" && slug.current == "${slug}"]{
  Title, Paragraph, image, content
}[0]`;
  const data = await client.fetch(query);
  console.log(data);
  return (
    <div className="mt-12 mb-24 px-4 sm:px-12 flex flex-col gap-y-8">
      {/* Product Title */}
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white">
        {data?.Title}
      </h1>

      {/* Product Image */}
      <Image
        src={urlFor(data?.image).url()}
        width={600}
        height={600}
        alt={data?.Title}
        className="rounded-lg shadow-lg"
      />

      {/* Specifications */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Desclimer
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          {data?.Paragraph}
        </p>
      </section>
      {/* Product Description */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Description
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <PortableText value={data?.content} />
        </p>
      </section>
      {/* Price & Purchase Button */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <span className="text-2xl sm:text-3xl font-bold text-indigo-600">
          $299.99
        </span>
        <button className="px-6 py-2 bg-indigo-600 text-white text-lg font-medium rounded-md hover:bg-indigo-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
