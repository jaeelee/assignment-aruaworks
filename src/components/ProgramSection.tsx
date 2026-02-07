import programImage from "../assets/program.png";

export default function ProgramSection() {
  return (
    <section className="relative px-[120px] py-[80px] bg-gray-50 overflow-hidden gap-[80px]">
      <div className=" mx-auto ">
        <div className="flex items-start justify-between gap-4 mb-[80px]">
          <div>
            <h2 className="font-['Noto_Serif_KR'] text-[32px] font-bold leading-[36px] tracking-normal text-[#911A00] mb-2">
              지금 신청할 수 있는 프로그램
            </h2>
            <p className="font-['Pretendard'] text-[20px] font-medium leading-[24px] tracking-[-0.02em] text-[#2a2a2a]">
              인스크립트 프로그램에 참여하세요
            </p>
          </div>
          <span className="font-['Noto_Serif_KR'] text-[44px] font-bold leading-[130%] tracking-normal text-[#F4E4D6] select-none">
            Programme
          </span>
        </div>

        <img
          src={programImage}
          alt="program"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}
