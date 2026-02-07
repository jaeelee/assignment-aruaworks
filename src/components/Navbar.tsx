import alert from "../assets/alert.svg";
import mail from "../assets/mail.svg";
import protile from "../assets/profile.svg";
import logo from "../assets/logo.svg";
import downArrow from "../assets/down-arrow.svg";

export default function Navbar() {
  const menuItems = [
    { name: "희곡 DB" },
    { name: "작가 DB" },
    { name: "멤버십" },
    { name: "프로그램", list: ["프로그램1", "프로그램2", "프로그램3"] },
    { name: "커뮤니티", list: ["커뮤니티1", "커뮤니티2", "커뮤니티3"] },
    { name: "인스크립트" },
    { name: "문의" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-15 py-6 bg-[#FAF8F6] border-b">
      <a href="/" className="text-xl font-bold tracking-tight text-gray-900">
        <img src={logo} alt="INSCRIPT" className="w-40 h-9" />
      </a>
      <ul className="hidden md:flex items-center gap-10 text-sm text-gray-600">
        {menuItems.map((item) => (
          <li key={item.name} className="relative group flex items-center">
            <a
              href="#"
              className="hover:text-gray-900 text-base font-semibold leading-[1.5] tracking-[-0.02em]"
            >
              {item.name}
            </a>
            {item.list && item.list.length > 0 && (
              <>
                <img src={downArrow} alt="" className="w-6 h-6" aria-hidden />
                <ul className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[120px] bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                  {item.list.map((sub: string) => (
                    <li key={sub}>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        {sub}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <a href="#" aria-label="알림">
          <img src={alert} alt="알림" className="w-6 h-6" />
        </a>
        <a href="#" aria-label="메일">
          <img src={mail} alt="메일" className="w-6 h-6" />
        </a>
        <a href="#" aria-label="프로필">
          <img src={protile} alt="프로필" className="w-6 h-6" />
        </a>
      </div>
    </nav>
  );
}
