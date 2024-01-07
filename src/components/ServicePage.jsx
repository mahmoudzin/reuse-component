export default function ServicePage() {
  return (
    <div>
      {/* Head */}
      <Head />
      {/* Banner */}
      <Baaner />
      {/* Servie People*/}
      <ServicePeople />
      {/* Reuse Conact Section in Home page */}
    </div>
  );
}

const servicePeopleData = [1, 2, 3, 4];
function ServicePeople() {
  return (
    <div>
      <h3 className="text-white text-center text-2xl font-semibold mb-[96px]">
        شركاء هذة الخدمة
      </h3>
      <div className="flex gap-6">
        {servicePeopleData.map((item) => (
          <div className="w-[170px] h-[72px]  bg-white">{item}</div>
        ))}
      </div>
    </div>
  );
}

const ServiceBannerData = {
  imgSrc: "",
  intro:
    "أداة تسويق متطورة بين يديكطور من أدوات تسويقك لمنتجاتك وخدماتك وصمم تطبيق هاتف مميز سهل الاستخدام، لتوفير أفضل خدمة لعملائك ومشاركتهم كل جديد. سواء متجر او موقع خدمات أو غيرها يمكنك تحويله لتطبيق هاتف بكفاءة وسرعة عالية لبناء علامة تجارية قوية وناجحة.",
  headlines: [
    "فريق مبرمجين بكافة لغات البرمجة المناسبة لتطبيقك",
    "تصميمات عصرية مميزة تناسب نوع التطبيق",
    "تطوير وتحديث التطبيقات بأحدث التقنيات",
    "تصميم تطبيق هاتف يجعلك على مسافة قريبة من عملائك دائماً، ويزيد من ولاء العملاء ويعزز قيمة علامتك.",
  ],
};
function Baaner() {
  const { imgSrc, intro, headlines } = ServiceBannerData;
  return (
    <div className="w-full h-[529px] rounded-[8px] border-2 border-[#00C1AC] px-[59px] py-4 flex">
      {/* Image */}
      <BanerImage imgSrc="imgSrc" />
      {/* content */}
      <BanerContent {...{ intro, headlines }} />
    </div>
  );
}

function BanerImage() {
  return (
    <div className="w-[680px] h-[510px] bg-slate-600 ">Image PAlceholder</div>
  );
}
function BanerContent({ intro, headlines }) {
  return (
    <div className="w-[646px]">
      {/* intro */}
      <p className="text-white text-2xl font-semibold">{intro}</p>
      {/* headlines */}
      <div>
        {headlines.map((item) => (
          <div key={item} className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17 9L9.99998 16L6.99994 13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="url(#paint0_linear_145_1819)"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_145_1819"
                  x1="21"
                  y1="3"
                  x2="1.75862"
                  y2="21"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#089FDA" />
                  <stop offset="0.9999" stop-color="#02D39C" />
                  <stop offset="1" stop-color="#089FDA" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <p className="text-white text-base font-semibold">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Head() {
  return (
    <div className="mb-[70px]">
      <h1 className="text-white text-4xl font-semibold mb-4">
        برمجة تطبيق الهاتف
      </h1>
      <p className="text-[#E6E6E6] text-base font-semibold leading-[1.33] tracking-tighter">
        تم تصميم مجموعتنا من الخدمات المميزة لمساعدتك لتحقيق هدفك .
      </p>
    </div>
  );
}
