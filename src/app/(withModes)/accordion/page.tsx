import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants/accordion";
import React from "react";

const page = () => {
  return (
    <div className="p-10">
      {faqs.map((faq, index) => (
        <Accordion key={index} type="multiple">
          <AccordionItem value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default page;
