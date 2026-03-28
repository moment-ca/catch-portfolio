import { ArrowRightIcon, PlusIcon } from "lucide-react";

export function CallToAction() {
  return (
    <div 
      className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border-y border-[#30363D] px-4 py-8"
      style={{
        backgroundImage: "radial-gradient(35% 80% at 25% 0%, rgba(255,255,255,0.08), transparent)"
      }}
    >
      <PlusIcon
        className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6 text-white"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6 text-white"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6 text-white"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6 text-white"
        strokeWidth={1}
      />

      <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l border-[#30363D]" />
      <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r border-[#30363D]" />

      <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed border-[#30363D]" />


      <div className="space-y-1">
        <h2 className="text-center text-white font-bold text-2xl">
          Time is broken.
        </h2>
        <p className="text-center text-muted-foreground">
          Too much time is lost trying to coordinate time. Plans live across calendars, chats, and booking links, while businesses deal with no-shows, empty slots, and schedules that slip out of sync. The resource we value most is still one of the hardest to manage well.
        </p>
      </div>
    </div>
  );
}
