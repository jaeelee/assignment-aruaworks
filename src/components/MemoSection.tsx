import { useMemos, formatRelativeTime } from "../hooks/useMemos";
import type { Memo } from "../lib/supabase";
import like from "../assets/like.svg";
import comment from "../assets/chat.svg";

export default function MemoSection() {
  const { data: memos = [], isLoading, isError } = useMemos();

  return (
    <section className="relative overflow-hidden">
      <div className="relative z-0 bg-[#911A00] pt-[80px] px-[120px] pb-[120px]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-[10px]">
          <div className="text-center md:text-left">
            <h2 className="font-['Noto_Serif_KR'] text-white text-[32px] font-bold leading-[36px] tracking-normal mb-2">
              지금 뜨는 메모
            </h2>
            <p className="text-white/90 text-[20px] font-medium leading-[24px] tracking-[-0.02em]">
              다른 유저가 남기고 간 메모를 발견해보세요
            </p>
          </div>
          <span className="font-['Noto_Serif_KR'] text-[44px] font-bold leading-[130%] tracking-normal text-[#CC4B2F] select-none text-right md:block">
            Memo
          </span>
        </div>
      </div>

      <div className="bg-[#F5F0ED] py-10 md:py-12 ">
        <div className="relative z-10 -mt-[80px] -mx-4 md:-mx-6">
          <div className="flex animate-memo-slide pl-4 md:pl-6">
            {isLoading ? (
              <>
                <div className="flex gap-5 md:gap-6 flex-shrink-0">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-[388.67px] h-[380px] flex-shrink-0 bg-white/80 animate-pulse border border-[#F4EFEA] shadow-[-4px_4px_4px_rgba(172,121,58,0.1)]"
                    />
                  ))}
                </div>
              </>
            ) : isError ? (
              <p className="text-red-600 px-6">메모를 불러오지 못했습니다.</p>
            ) : (
              <>
                <div className="flex gap-5 md:gap-6 flex-shrink-0">
                  {memos.map((memo) => (
                    <MemoCard key={memo.id} memo={memo} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function MemoCard({ memo }: { memo: Memo }) {
  return (
    <article className="box-border flex flex-none flex-col items-start justify-start p-8 w-[388.67px] h-[380px] bg-white border border-[#F4EFEA] shadow-[-4px_4px_4px_rgba(172,121,58,0.1)]">
      <div className="flex items-center gap-5 text-sm mb-2 w-full">
        <span className="text-[14px] font-medium leading-[16px] tracking-normal text-black">
          {memo.username}
        </span>
        <span className="text-gray-500">
          {formatRelativeTime(memo.created_at)}
        </span>
      </div>
      {memo.title && (
        <h3 className="font-['Noto_Serif_KR'] text-[20px] font-bold leading-[24px] tracking-normal text-[#911A00] mb-3 line-clamp-1">
          {memo.title}
        </h3>
      )}
      <p className="text-[16px] font-normal leading-[24px] tracking-[-0.02em] text-[#A0A0A0] line-clamp-5 flex-1 min-h-0 mb-4">
        {memo.content}
      </p>
      <div className="flex items-end justify-between w-full text-sm text-gray-500 pt-2 ">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <img src={like} alt="좋아요" />
            {memo.likes_count}
          </span>
          <span className="flex items-center gap-1">
            <img src={comment} alt="댓글" />
            {memo.comments_count}
          </span>
        </div>
        <div className="text-right">
          {memo.author && (
            <div className="text-[14px] font-medium leading-[16px] tracking-normal text-[#6D6D6D]">
              {memo.author}
            </div>
          )}
          <div className="text-[#911A00] text-[14px] font-semibold leading-[16px] tracking-[-0.02em] text-right">
            『{memo.work_title}』
          </div>
        </div>
      </div>
    </article>
  );
}
