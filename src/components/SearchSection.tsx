import { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";
import searchIcon from "../assets/Magnifer.svg";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce(searchQuery, 400);

  useEffect(() => {
    if (debouncedQuery.trim()) {
      console.log("Search:", debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <section className="min-h-[480px] flex items-center justify-center bg-gray-900 overflow-hidden">
      <div className="w-full max-w-2xl px-4 text-center">
        <h2 className="text-white/95 mb-6 text-[32px] font-bold leading-[40px] tracking-normal text-center">
          오늘 찾아볼 희곡은 무엇인가요?
        </h2>
        <div className="flex items-center w-full max-w-[720px] h-[64px] py-[20px] px-[24px] gap-[10px] border-b-[1.4px] border-white/20 bg-transparent text-white">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && (e.target as HTMLInputElement).blur()
            }
            placeholder="검색어를 입력하세요"
            aria-label="희곡 검색"
            className="flex-1 min-w-0 bg-transparent placeholder-white/50 outline-none focus:ring-0 border-none"
          />
          <button
            type="button"
            onClick={() => {}}
            className="shrink-0 p-2 text-white/80 cursor-pointer"
            aria-label="검색"
          >
            <img src={searchIcon} alt="검색" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
