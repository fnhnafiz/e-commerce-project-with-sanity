import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "@/sanity/lib/image";

const Hero = ({ product }: { data: Product }) => {
  // console.log(product, "I am from hero compents");
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 ">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="w-full h-48 object-cover"
                src={urlFor(product.image).url()}
                alt={product.Title}
                width={500} // Set a higher width
                height={300} // Set a higher height
                priority
              />

              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {product?.Title}
                </h1>
                <p className="leading-relaxed mb-3">{product?.Paragraph}</p>
                <div className="flex items-center flex-wrap ">
                  <Link
                    href={`/blog/${product.slug}`}
                    className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    View Details
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
