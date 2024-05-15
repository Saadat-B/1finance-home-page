import Image from "next/image";
import { MacbookScroll } from "./components/ui/Macbook-scroll";
import { PlaceholdersAndVanishInput } from "./components/ui/PlaceholdersAndVanishInputDemo.jsx";
import { HoverBorderGradient } from "./components/ui/HoverBorder";
import { HeroHighlight, Highlight } from "./components/ui/HeroHighlight";
import { InfiniteMovingCards } from "./components/ui/InfiniteMovingCards";

export default function Home() {
  const placeholders = [
    "How much emergency fund should I have for rainy days?",
    "What if I lose my job - do I have enough savings to sustain?",
    "If interest rates rise, can I still afford my high EMIs?",
    "How can I reduce taxable income from house property?",
    "Should I invest in tax-free bonds or ELSS mutual funds?",
    "Should I go for term or whole life insurance plan?",
    "What should be my equity:debt asset allocation?",
    "What tax saving options under 80C should I invest in this year?",
    "Should I invest in PPF, NSC or other small savings schemes?",
    "Do I need health insurance beyond what my employer provides?",
    "How will I fund my retirement expenses after leaving my job?",
  ];

  const testimonials = [
    {
      quote: `Just took financial advice from 
        @1FinanceHQ, a SEBI RIA
        Really happy with the advice I got! Download the "1Finance" app and book a call with them
        I understand that they're offering services for free right now
        P.S. This is not a paid promo but a genuine shout out :)`,
      name: "Kanan Bahl",
      title: "@BahlKanan",
    },
    {
      quote: `When I started earning money, one truth never stopped chasing me.
      Unsolicited advice.
      "Mutual funds, real estate, crypto & more”
      All I needed at that point was a trusted financial strategy, no high commissions & no misled info.
      Good thing that 
      @1FinanceHQ
      , doing exactly that.`,
      name: "Ranveer Allahbadia",
      title: "@BeerBicepsGuy",
    },
    {
      quote:
        "Be it Finance or Life, there are very few people who are looking out for your interests. In my entire life, I have fallen for numerous ill advised financial schemes. But glad now there are platforms like 1Finance, great initiative 👍",
      name: "Boman Irani",
      title: "@bomanirani",
    },
    {
      quote: `Mis-selling of financial products is an unfortunate reality. Great to see a brand raising awareness about such an issue which is widespread but rarely spoken about …
        @1FinanceHQ`,
      name: "Neha Nagar",
      title: "@nehanagarr",
    },
    {
      quote:
        "Having worked in a bank for 11 years, I can relate to this feeling - that we are selling what the bank wants us to sell. It should be about the customer, not the seller. Great video. Funny too. #1finance",
      name: "Chetan Bhagat",
      title: "@chetan_bhagat",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <HeroHighlight>
        <div className="flex flex-col justify-center items-center h-svh w-full gap-3">
          {/* <MacbookScroll /> */}
          <div className="font-sans">All-in-one financial advisory app</div>
          <div className="font-serif text-5xl text-center leading-tight">
            Get
            <br />
            <Highlight>Tax</Highlight>
            <br />
            Planning
          </div>
          <div className="flex justify-center items-center w-full">
            <PlaceholdersAndVanishInput placeholders={placeholders} />
          </div>
          <div className="flex justify-center text-center cursor-pointer">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-black text-white flex items-center space-x-2 cursor-pointer"
            >
              <span className="font-sans">Download the app</span>
            </HoverBorderGradient>
          </div>
          <div className="w-screen overflow-x-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
        {/* <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"> */}

        {/* </div> */}
      </HeroHighlight>
    </div>
  );
}
