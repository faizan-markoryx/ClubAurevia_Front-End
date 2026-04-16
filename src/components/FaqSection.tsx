import { useState } from "react";
import AccordionItem from "./AccordionItem";
import AnimateSection from "./AnimateSection";

const faqs = [
  {
    title: "Can my friends or family travel using my membership?",
    content:
      "Yes. Your Club Aurevia membership allows you to share your travel privileges with close family members or friends, making it easier to enjoy memorable experiences together.",
  },
  {
    title: "Can I carry forward my unused nights to the next year?",
    content:
      "Yes. Unused nights can be carried forward to the following year, allowing you greater flexibility in planning your travels.",
  },
  {
    title: "Can I gift my nights to family members or friends?",
    content:
      "Yes. You can gift your available nights to family members or friends, allowing them to enjoy the same luxury travel experience.",
  },
  {
    title: "Can I split my nights across different destinations?",
    content:
      "Yes. Your nights can be divided across multiple destinations, giving you the freedom to explore different locations during your membership period.",
  },
  {
    title: "Can I easily book stays through your website?",
    content:
      "Yes. Our website is designed to provide a seamless booking experience, allowing you to browse destinations, explore hotels, and reserve your stays effortlessly.",
  },
  {
    title: "Is customer support available during travel?",
    content:
      "Yes. Our travel assistance team is available to support you throughout your journey.",
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f4f4f4] pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-0 sm:gap-12">

          <AnimateSection duration={0.9}>
            {/* LEFT SIDE */}
            <div className="flex flex-col justify-between items-start py-5">
              <h2 className="font-display text-[28px] sm:text-4xl md:text-5xl text-primary sm:mb-6">
                Need Help? <br /> We’ve Got Answers
              </h2>

              {/* <div className="hidden sm:block mt-4 sm:mt-20">
              <h3 className="font-display text-[28px] sm:text-4xl md:text-5xl text-primary mb-3">
                Still Have A Question?
              </h3>

              <p className="text-primary text-sm sm:text-base max-w-sm">
                Find out everything from parking to pet policy,
                so you can book with total peace of mind.
              </p>
            </div> */}
            </div>
          </AnimateSection>

          <AnimateSection duration={1.3} delay={0.6}>
            {/* RIGHT SIDE ACCORDION */}
            <div>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  title={faq.title}
                  content={faq.content}
                  isOpen={openIndex === index}
                  onClick={() => toggleAccordion(index)}
                />
              ))}
            </div>
          </AnimateSection>

          {/* <div className="sm:hidden block mt-6 sm:mt-20">
            <h3 className="font-display text-[28px] sm:text-4xl md:text-5xl text-primary mb-3">
              Still Have A Question?
            </h3>

            <p className="text-primary text-sm sm:text-base max-w-sm">
              Find out everything from parking to pet policy,
              so you can book with total peace of mind.
            </p>
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default FaqSection;