export default function Footer() {
  return (
    <footer className="bg-[#EBE1DF] text-gray-300 py-[44px] px-[120px] flex gap-[240px] opacity-100">
      <div className="flex max-w-7xl px-6 text-[#911A00] gap-8">
        <span className="inline-block mb-6 font-['Noto_Serif_KR'] text-[28px] font-bold leading-[32px] tracking-normal">
          인스크립트
        </span>
        <div className="font-normal text-[16px] leading-6 tracking-[-0.02em]">
          <div className="flex flex-wrap gap-x-1 gap-y-1">
            <span>대표 권주영 |</span>
            <span>사업자 등록번호 874-52-00865 |</span>
            <span>주소 서울 종로구 율곡로 225 3층</span>
          </div>
          <div className="flex flex-wrap gap-x-1 gap-y-1 mt-1">
            <span>이메일 inscript2023@gmail.com |</span>
            <span>전화 010-5862-1203 |</span>
            <span>인스타그램 @inscriptbooks</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
