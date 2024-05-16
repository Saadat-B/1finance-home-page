import Image from "next/image";
import { MacbookScroll } from "./components/ui/Macbook-scroll";
import { PlaceholdersAndVanishInput } from "./components/ui/PlaceholdersAndVanishInputDemo.jsx";
import { HoverBorderGradient } from "./components/ui/HoverBorder";
import { HeroHighlight, Highlight } from "./components/ui/HeroHighlight";
import { InfiniteMovingCards } from "./components/ui/InfiniteMovingCards";
import moneySign from "../../public/moneysign.png";
import { HeroText } from "./components/ui/HeroText";
import { StickyScroll } from "./components/ui/StickyScroll";
import { SparklesCore } from "./components/ui/Sparkles";

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

  const heroPlaceholders = [
    "Tax",
    "Emergency",
    "Retirement",
    "Investment",
    "Insurance",
    "Liablity",
    "Asset",
    "Financial",
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

  const content = [
    {
      title: "Understanding you",
      description: (
        <span className="flex flex-col gap-4">
          Get your MoneySign® - A Patented Financial Personality Assessment
          <br />
          <span>Your demographic profile</span>
        </span>
      ),
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Assess
        </div>
      ),
    },
    {
      title: "Consultations",
      description: (
        <span className="flex flex-col gap-2">
          1st call for financial data gathering with our advisor
          <br />
          <span>
            2nd call with our qualified financial advisor for a holistic
            financial plan
          </span>
          <span>On demand assistance</span>
          <span>Quarterly review of your finances</span>
        </span>
      ),
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          {/* <Image
            // src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            // alt="linear board demo"
          /> */}
          Analyse
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col bg-black">
      <div className="flex flex-col justify-center items-center h-screen">
        <HeroHighlight>
          <div className="flex flex-col justify-center items-center h-svh w-full gap-3">
            {/* <MacbookScroll /> */}
            <div className="font-sans">All-in-one financial advisory app</div>
            <div className=" font-serif text-5xl text-center leading-tight text-white">
              Get
              {/* <br /> */}
              {/* <Highlight> */}
              <HeroText placeholders={heroPlaceholders} />
              {/* </Highlight> */}
              {/* <br /> */}
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
      {/* <div className="flex flex-col justify-start"> */}
      <div className="sm:h-[1500px]">
        <MacbookScroll
          src={moneySign}
          title={"Your first step towards financial well-being."}
        />
      </div>
      {/* </div>  */}
      <div className="mt-10 h-[8rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-3xl lg:text-5xl font-bold text-center text-white relative z-20">
          How it works?
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <StickyScroll content={content} />
    </div>
  );
}
