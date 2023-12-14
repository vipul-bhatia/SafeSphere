import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Is SafeSphere free to use?",
    answer: "SafeSphere offers both free and premium plans. You can get started with our free plan or explore our premium options for additional features.",
  },
  {
    question: "Can I use SafeSphere for my commercial business?",
    answer: "Absolutely! SafeSphere is designed to cater to both personal and commercial use. Choose a plan that suits your business needs.",
  },
  {
    question: "What is SafeSphere's refund policy?",
    answer:
      "We stand by our product. If you're dissatisfied within 30 days of your purchase, contact us for a full refund. Your satisfaction is our priority.",
  },
  {
    question: "Is technical support included with SafeSphere?",
    answer:
      "Yes, SafeSphere offers technical support. Free plan users can access community forums, while premium plan subscribers enjoy personalized support for 6 months.",
  },
];


export default Faq;