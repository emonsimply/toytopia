import React from "react";

const FAQs = () => {
  return (
    <section className="max-w-4xl mx-auto space-y-3 my-12">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl text-pink-600 text-center font-bold mb-6">
          Frequently Asked Question
        </h1>
      </div>

      <div className="collapse collapse-arrow bg-white border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          How do I buy toys from ToyTopia?
        </div>
        <div className="collapse-content text-sm">
          You can browse toys, check details, and click 'Try Now' or contact the
          seller. Login is required for detailed pages.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-white border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          Is ToyTopia safe for kids?
        </div>
        <div className="collapse-content text-sm">
          Yes! All sellers are verified local toy sellers and toys are sourced
          from trusted shops.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-white border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          How does the Try Now feature work?
        </div>
        <div className="collapse-content text-sm">
          Just fill the short form on the toy details page, and you will get a
          confirmation popup. No data is stored.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-white border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          Do I need an account to view toy details?
        </div>
        <div className="collapse-content text-sm">
          Yes, toy details page is a protected route. You must login using
          email/password or Google.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-white border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          Can I reset my password?
        </div>
        <div className="collapse-content text-sm">
          Yes! Use the 'Forgot Password' link on the login page. Enter your
          email and you will be redirected to Gmail.
        </div>
      </div>
    </section>
  );
};

export default FAQs;
