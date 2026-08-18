"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Wifi, Plus, ArrowRight, Info } from "lucide-react";

export default function Page() {
  return (
    <ImposterHome
      onCreateRoom={() => console.log("create room")}
      onJoinRoom={() => console.log("join room")}
    />
  );
}

interface ImposterHomeProps {
  onCreateRoom?: () => void;
  onJoinRoom?: () => void;
}

function ImposterHome({ onCreateRoom, onJoinRoom }: ImposterHomeProps) {
  return (
     
    <div className="min-h-screen w-full bg-[#FAF9F6] flex items-start justify-center px-4 py-8">
      <div className="w-full max-w-sm">
        {/* Top bar: profile avatar with game-info popover */}
        <div className="flex items-center justify-between mb-5">
          <ProfileBadge />
          <span className="text-[11px] font-semibold tracking-[0.14em] text-gray-400 uppercase">
            Imposter
          </span>
        </div>

        {/* Hero banner */}
        <div className="relative overflow-hidden rounded-[28px] bg-[#E31C25] px-6 py-8">
          <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/5" />
          <div className="absolute -right-2 bottom-2 h-16 w-16 rounded-full bg-white/5" />

          <p className="relative text-[11px] font-semibold tracking-[0.18em] text-white/60 uppercase mb-2">
            Social deduction
          </p>
          <h1 className="relative text-white font-extrabold text-[28px] leading-[1.1] tracking-tight">
            Find the
            <br />
            Imposter
          </h1>
        </div>

        {/* Single mode: play online (locked in, no selection needed) */}
        <div className="mt-4 rounded-2xl border border-[#E31C25]/20 bg-white px-4 py-4 flex items-center gap-3 transition-all hover:border-[#E31C25]/40 hover:bg-[#E31C25]/5 hover:-translate-y-0.5 hover:shadow-sm cursor-pointer">
          <div className="h-11 w-11 rounded-xl bg-[#E31C25]/10 flex items-center justify-center shrink-0">
            <Wifi className="h-5 w-5 text-[#E31C25]" strokeWidth={2.2} />
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-[15px] text-gray-900">Play online</p>
            <p className="text-[13px] text-gray-500 leading-snug">
              Play together from anywhere
            </p>
          </div>
          <div className="ml-auto h-2 w-2 rounded-full bg-[#E31C25]" />
        </div>

        {/* Helper copy */}
        <p className="mt-6 text-center text-[15px] text-gray-700">
          Create a room, share the code, play with friends anywhere.
        </p>

        {/* Actions */}
        <div className="mt-4 flex flex-col gap-3">
       <Link
  href="/Host"
  onClick={onCreateRoom}
  className="w-full flex items-center justify-center gap-2 rounded-full bg-black py-4 text-white font-semibold text-[15px] transition-transform active:scale-[0.98] hover:opacity-90"
>
  <Plus className="h-5 w-5" strokeWidth={2.5} />
  Create Room
</Link>
      
          <Link href="/Host"
            type="button"
            onClick={onJoinRoom}
            className="w-full flex items-center justify-center gap-2 rounded-full border border-gray-200 py-4 text-gray-900 font-semibold text-[15px] transition-transform active:scale-[0.98] hover:bg-gray-50"
          >
            Join with a code
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </div>
  );
}

/** Circular profile avatar, top-left. Click toggles a popover with game info. */
function ProfileBadge() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="About this game"
        className="h-14 w-14 rounded-full overflow-hidden ring-2 ring-[#E31C25]/20 hover:ring-[#E31C25]/45 transition-shadow"
      >
        <Image
          src="/Gaurab.png"
          alt="Profile"
          width={56}
          height={56}
          className="h-14 w-14 object-cover"
        />
      </button>
      <button className="bg-black text-white p-2 rounded-lg">
     <Link
    href="/test"
  >
    Go to Test database connection
     </Link>
   </button>

      {open && (
        <div className="absolute left-0 top-[calc(100%+12px)] z-10 w-64 rounded-2xl border border-gray-100 bg-white p-4 shadow-lg">
          <div className="flex items-center gap-2 mb-1.5">
            <Info className="h-4 w-4 text-[#E31C25]" strokeWidth={2.2} />
            <p className="font-semibold text-[13px] text-gray-900">About Imposter</p>
          </div>
          <p className="text-[13px] text-gray-500 leading-relaxed">
            One player is secretly the imposter. Everyone else gets a shared
            word, the imposter doesn&apos;t. Talk, vote, and catch them before
            they blend in.
          </p>
        </div>
      )}
    
    </div>
 
  );
}
