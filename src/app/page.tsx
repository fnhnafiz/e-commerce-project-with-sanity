import React from "react";
import Hero from "./Components/hero";
import { client } from "@/sanity/lib/client";

const Homepage = async () => {
  const query = `*[_type == "products"] | order(_updatedAt asc)
{ Title, Paragraph, "slug":slug.current, image }`;

  const data: Product[] = await client.fetch(query);
  // console.log(data);
  return (
    <div className="container mx-auto px-5 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.map((product: Product) => (
          <Hero product={product} key={product.slug} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
