import { Plug, ClockArrowUp, Bot, LayersPlus, CalendarCheck2, Waypoints, ShieldCheck, BadgeDollarSign, Brain } from "lucide-react";
import { GridItem } from "@/components/dark-grid";

export const WHY_NOW_ITEMS: GridItem[] = [
  {
    title: "Timing",
    icon: ClockArrowUp,
    desc: "As work moves faster, timing matters more - Services, Teams, and Automation move with greater speed. Better outcomes depend on things happening at exactly the right moment.",
  },
  {
    title: "Action",
    icon: Plug,
    desc: "AI is moving into action - Agents are beginning to act in the real world, but they still lack a timeline to coordinate with people and systems.",
  },
  {
    title: "Fragmentation",
    icon: LayersPlus,
    desc: "The tools are still fragmented - Calendars, Booking systems, and Messaging platforms operate in isolation, making coordination harder than it should be.",
  }
];

export const SOLUTION_ITEMS: GridItem[] = [
{
    title: "Time Intelligence",
    icon: Brain,
    desc: "Catch assigns every event a confidence score from multiple signals to predict how likely it is to happen successfully. Plan around real outcomes, not just open time slots.",
   },  
   {
    title: "Availability",
    icon: CalendarCheck2,
    desc: "A shared view of availability across calendars and services, designed to prevent conflicts before they happen.",
   },
   {
    title: "Coordination",
    icon: Waypoints,
    desc: "Real-time scheduling with friends, service providers and entities — all in one place.",
   },
   {
    title: "Reliability",
    icon: ShieldCheck,
    desc: "Catch resolves conflicts so timing becomes more dependable.",
   },
   {
    title: "Monetization",
    icon: BadgeDollarSign,
    desc: "Users can turn selected calendar slots into paid opportunities and run their time as a service. Creators, advisors, and service providers can offer bookable time directly from their timeline.",
   },
   {
    title: "Agent Access",
    icon: Bot,
    desc: "AI agents can interact with Catch through secure APIs, making real-world coordination part of automated workflows.",
   }
];