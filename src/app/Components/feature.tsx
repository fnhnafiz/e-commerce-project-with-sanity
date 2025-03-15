import React from "react";

function Feature() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            WHY CHOOSE SHOPNEST?
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Premium Shopping Experience, Unmatched Convenience
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Fast & Secure Checkout */}
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 6V3m0 3a9 9 0 110 18M12 6v3" />
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Fast & Secure Checkout
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Enjoy seamless, one-click checkout with encrypted security to
                  protect your payments.
                </p>
              </div>
            </div>
          </div>

          {/* Exclusive Deals & Discounts */}
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx={12} cy={12} r={9} />
                    <path d="M16 12h-8m4-4v8" />
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Exclusive Deals & Discounts
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Get unbeatable discounts, flash sales, and exclusive coupon
                  codes only on ShopNest.
                </p>
              </div>
            </div>
          </div>

          {/* 24/7 Customer Support */}
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15a2 2 0 01-2 2h-4l-3 3-3-3H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v9z" />
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  24/7 Customer Support
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Our dedicated support team is available round-the-clock to
                  assist with any inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
