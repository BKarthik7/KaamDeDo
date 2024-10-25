import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import  companies  from "../data/companies.json";
import faqs from "../data/faqs.json";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const LandingPage = () => {
  return <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
    <section className="text-center">
      <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl py-4 tracking-tighter">Find Your Dream Job{" "}
        <span className="flex items-center gap-2 sm:gap-6">
          aur KaamDeDo😭
        </span>
      </h1>
      <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
        Explore thousands of jobs and internships from top companies and startups or find perfect candidates.
      </p>
    </section>
    <div className="mt-5 flex gap-6 justify-center">
      <Link to = "/jobs">
        <Button variant='blue' size='xl'>Find Jobs</Button>
      </Link>
      <Link to = "/post-job">
        <Button variant='destructive' size='xl'>Post a Job</Button>
      </Link>
    </div>

    <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

    <img src="/banner.jpg" alt="Banner" className="w-full h-96 object-cover rounded-lg" />
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and more
          </CardContent>
        </Card>
    </section>
    <Accordion type="single" className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>

  </main>;
}

export default LandingPage