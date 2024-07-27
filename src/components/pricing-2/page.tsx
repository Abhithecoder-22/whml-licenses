"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import React, { useContext, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import './page.css'
import { CountryTrackContext } from "@/context/countryTrack"
import axios from "axios"

type PricingSwitchProps = {
  onSwitch: (value: string) => void
}

type PricingCardProps = {
  isYearly?: boolean
  title: string
  monthlyPrice?: number
  yearlyPrice?: number
  description: string
  features: string[]
  actionLabel: string
  popular?: boolean
  exclusive?: boolean
}

const PricingHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <section className="text-center">
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="text-xl pt-1">{subtitle}</p>
    <br />
  </section>
)

const PricingSwitch = ({ onSwitch }: PricingSwitchProps) => (
  <Tabs defaultValue="0" className="w-40 mx-auto" onValueChange={onSwitch}>
    <TabsList className="py-6 px-2">
      <TabsTrigger value="0" className="text-base">
        Monthly
      </TabsTrigger>
      <TabsTrigger value="1" className="text-base">
        Yearly
      </TabsTrigger>
    </TabsList>
  </Tabs>
)

const PricingCard = ({ isYearly, title, monthlyPrice, yearlyPrice, description, features, actionLabel, popular, exclusive }: PricingCardProps) => (
  <Card
    className={cn(`w-72 flex flex-col justify-between py-1 ${popular ? "border-rose-400" : "border-zinc-700"} mx-auto sm:mx-0`, {
      "animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors":
        exclusive,
    })}>
    <div>
      <CardHeader className="pb-8 pt-4">
        {isYearly && yearlyPrice && monthlyPrice ? (
          <div className="flex justify-between">
            <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">{title}</CardTitle>
            <div
              className={cn("px-2.5 rounded-xl h-fit text-sm py-1 bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white", {
                "bg-gradient-to-r from-orange-400 to-rose-400 dark:text-black ": popular,
              })}>
              Save ${monthlyPrice * 12 - yearlyPrice}
            </div>
          </div>
        ) : (
          <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">{title}</CardTitle>
        )}
        <div className="flex gap-0.5">
          <h3 className="text-3xl font-bold">{monthlyPrice}</h3>
          <span className="flex flex-col justify-end text-sm mb-1">/month</span>
        </div>
        <CardDescription className="pt-1.5 h-12">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {features.map((feature: string) => (
          <CheckItem key={feature} text={feature} />
        ))}
      </CardContent>
    </div>
    <CardFooter className="mt-2">
      <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-black text-white dark:bg-white px-6 font-medium  dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
        {actionLabel}
      </Button>
    </CardFooter>
  </Card>
)

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-2">
    <CheckCircle2 size={18} className="my-auto text-green-400" />
    <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
  </div>
)

export default function PricingShad() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isYearly, setIsYearly] = useState(false)
  const togglePricingPeriod = (value: string) => setIsYearly(parseInt(value) === 1)
  const country=useContext(CountryTrackContext)
  const c=useContext(CountryTrackContext)
  const coutryLocation=async()=>{
    const response= await axios.get('https://ipapi.co/json/').then((data)=>{
      if(data.data.country_name==="India")
        {
          console.log("india");
          
            c.setCountryTrack(true)
        }
        else{

        
         
          
          c.setCountryTrack(false)
          console.log(c.countryTrack);
          
        }
    
     
    })
    // console.log(response);
    

    // if(response.data.country_name==="India")
    //   {
    //     c.setCountryTrack(true)
    //   }
    //   else{
    //     c.setCountryTrack(false)
    //   }
    
    
  }

  console.log(c.countryTrack);
  


  useEffect(()=>{
    
     coutryLocation()
     
  },[])
  


  
  
  
  
  const plans = [
    {
      title: "Level - 1",
      monthlyPrice: country.countryTrack ? Number('₹2000') : Number("$25"),
      yearlyPrice: 100,
      description: "Price list for resellers : (Level 1)",
      features: country.countryTrack ? [
        "cPanel (VPS) : 250Rs",
        "cPanel (Dedicated) : 330Rs",
        "LiteSpeed 2X : 165Rs",
        "LiteSpeed 4X : 250Rs",
        "LiteSpeed 8X : 335Rs",
        "LiteSpeed X  : 415Rs",
        "CloudLinux   : 335Rs",
        "JetBackup    : 8Rs",
        "Imunify360   : 85Rs",
        "WHMReseller  : 85Rs",
        "Plesk VPS    : 165Rs",
        "Plesk Dedicated : 250Rs",
        "Softaculous  : 85Rs",
        "Virtualizor  : 250Rs",
        "WHMCS        : 2503Rs",
        "SitePad      : 125Rs",
        "Webuzo V3 Business: 250Rs"
      ] : [
        "cPanel (VPS) : 3$",
        "cPanel (Dedicated) : 4$",
        "LiteSpeed 2X : 2$",
        "LiteSpeed 4X : 3$",
        "LiteSpeed 8X : 4$",
        "LiteSpeed X  : 5$",
        "CloudLinux   : 4$",
        "JetBackup    : 1$",
        "Imunify360   : 1.5$",
        "WHMReseller  : 1$",
        "Plesk VPS    : 2$",
        "Plesk Dedicated : 3$",
        "Softaculous  : 1$",
        "Virtualizor  : 3$",
        "WHMCS        : 3$",
        "SitePad      : 1.5$",
        "Webuzo V3 Business: 3$"
      ],
      actionLabel: "Get Started"
    },
    {
      title: "Level - 2",
      monthlyPrice: country.countryTrack ? Number('₹35') :Number( '$39'),
      yearlyPrice: 100,
      description: "Price list for resellers : (Level 1)",
      features: country.countryTrack ? [
        "cPanel (VPS) : 2930Rs",
        "cPanel (Dedicated) : 250Rs",
        "LiteSpeed 2X : 165Rs",
        "LiteSpeed 4X : 165Rs",
        "LiteSpeed 8X : 250Rs",
        "LiteSpeed X  : 335Rs",
        "CloudLinux   : 250Rs",
        "JetBackup    : 60Rs",
        "Imunify360   : 85Rs",
        "WHMReseller  : 60Rs",
        "Plesk VPS    : 125Rs",
        "Plesk Dedicated : 165Rs",
        "Softaculous  : 60Rs",
        "Virtualizor  : 165Rs",
        "WHMCS        : 165Rs",
        "SitePad      : 125Rs",
        "Webuzo V3 Business: 165Rs"
      ] : [
        "cPanel (VPS) : 2$",
        "cPanel (Dedicated) : 3$",
        "LiteSpeed 2X : 1.5$",
        "LiteSpeed 4X : 2$",
        "LiteSpeed 8X : 3$",
        "LiteSpeed X  : 4$",
        "CloudLinux   : 3$",
        "JetBackup    : 0.7$",
        "Imunify360   : 1$",
        "WHMReseller  : 0.7$",
        "Plesk VPS    : 1.5$",
        "Plesk Dedicated : 2$",
        "Softaculous  : 0.7$",
        "Virtualizor  : 2$",
        "WHMCS        : 2$",
        "SitePad      : 1.5$",
        "Webuzo V3 Business: 2$"
      ],
      actionLabel: "Get Started"
    },
    {
      title: "Level - 3",
      monthlyPrice: country.countryTrack ? Number('₹3767') : Number('$45'),
      yearlyPrice: 100,
      description: "Price list for resellers : (Level 1)",
      features: country.countryTrack ? [
        "cPanel (VPS) : 125Rs",
        "cPanel (Dedicated) : 165Rs",
        "LiteSpeed 2X : 90Rs",
        "LiteSpeed 4X : 125Rs",
        "LiteSpeed 8X : 165Rs",
        "LiteSpeed X  : 225Rs",
        "CloudLinux   : 165Rs",
        "JetBackup    : 45Rs",
        "Imunify360   : 45Rs",
        "WHMReseller  : 45Rs",
        "Plesk VPS    : 90Rs",
        "Plesk Dedicated : 125Rs",
        "Softaculous  : 45Rs",
        "Virtualizor  : 90Rs",
        "WHMCS        : 125Rs",
        "SitePad      : 45Rs",
        "Webuzo V3 Business: 125Rs"
      ] : [
        "cPanel (VPS) : 1.5$",
        "cPanel (Dedicated) : 2$",
        "LiteSpeed 2X : 1$",
        "LiteSpeed 4X : 1.5$",
        "LiteSpeed 8X : 2$",
        "LiteSpeed X  : 3$",
        "CloudLinux   : 2$",
        "JetBackup    : 0.5$",
        "Imunify360   : 0.5$",
        "WHMReseller  : 0.5$",
        "Plesk VPS    : 1$",
        "Plesk Dedicated : 1.5$",
        "Softaculous  : 0.5$",
        "Virtualizor  : 1$",
        "WHMCS        : 1.5$",
        "SitePad      : 0.5$",
        "Webuzo V3 Business: 1.5$"
      ],
      actionLabel: "Get Started"
    }
  ];
  
  
  return (
    <div className="py-8">
      <PricingHeader title="Pricing Plans" subtitle="Choose the plan that's right for you" />
      {/* <PricingSwitch onSwitch={togglePricingPeriod} /> */}
      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
        
        {plans.map((plan) => {
          return <PricingCard key={plan.title} {...plan} isYearly={isYearly} />
        })}
      </section>
    </div>
  )
}