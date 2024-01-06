export default function ContactUsPage() {
  return (
    <>
      {/* Head */}
      <Head />
      {/* MAP Section */}
      <Map />
      {/*  Form Section */}
      <FromComponent />
      {/*  Days Work Section */}
      <DaysWork />
      {/*  Imag Section */}
      {/*  Question Section */}
      <QuestionList />
    </>
  );
}

function Head() {
  return (
    <div className="mb-[52px]">
      <h1 className="text-white font-semibold text-3xl mb-4">كن علي تواصل</h1>
      <div className="text-gray-300  font-semibold text-base leading-[1.33] tracking-tighter">
        تواصل معنا اليوم ودعنا نساعدك في الرد على أي أسئلة أو استفسارات قد تكون
        لديك.
      </div>
    </div>
  );
}

function Map() {
  return (
    <div className="mb-[50px]">
      {/* Contact Information */}
      <ContactInformation />
      {/* map */}
      <MapComponent />
    </div>
  );
}

const contactInformation = [
  {
    info: "السعودية _الدمام _1 شارع الدمام",
    icon: "imgSrc",
  },
  {
    info: "+9669879879868",
    icon: "imgSrc",
  },
  {
    info: "Deep Stark.com",
    icon: "imgSrc",
  },
];
function ContactInformation() {
  return (
    <div className="flex justify-center items-center gap-5 mb-8">
      {contactInformation.map((item) => (
        <ContactInfo key={item.info} {...item} />
      ))}
    </div>
  );
}

function ContactInfo({ info, icon }) {
  return (
    <div className="flex py-3 px-5 gap-3 items-center rounded-md border border-solid border-blue-500">
      <p className="text-gray-300 text-base font-medium leading-[1.5]">
        {info}
      </p>
      <span>I</span>
      {/* <img src={icon} /> */}
    </div>
  );
}

function MapComponent() {
  return <div className="h-[236px]  rounded-8">Map Component</div>;
}

const inputsData = [
  {
    id: 1,
    type: "telephone",
    name: "phonenumber",
    placeholder: "إكتب هنا",
    label: "رقم الهاتف",
    width: "1/2",
  },
  {
    id: 2,
    type: "text",
    name: "fullname",
    placeholder: "إكتب هنا",
    label: "الأسم بالكامل",
    width: "1/2",
  },
  {
    id: 3,
    type: "email",
    name: "email",
    placeholder: "إكتب هنا",
    label: "البريد الإلكتروني",
  },
  {
    id: 4,
    type: "checkbox",
    name: "service",
    label: "الخدمة المهتم بها ",
    options: ["التصميم", "التصميم", "التصميم", "التصميم"],
  },
  {
    id: 5,
    type: "text",
    name: "message",
    placeholder: "إكتب هنا",
    label: "رسالتك",
  },
];

function FromComponent() {
  return (
    <div className="flex flex-wrap justify-between px-[60px] py-[60px] pb-[42px] items-center gap-8 rounded-b-12 border border-solid border-gray-700 mb-[37px]">
      {inputsData.map((item) => (
        <ContactInput {...item} />
      ))}
    </div>
  );
}

function ContactInput({ type, name, placeholder, label, options, width }) {
  return (
    <div
      className={`flex px-[30px] py-[20px] flex-col items-end gap-4 self-stretch rounded-6 border border-solid border-green-500 bg-opacity-50 bg-purple-900 ${
        width ? "w-[300px]" : "w-full"
      }`}
    >
      <label className="text-white  font-semibold text-base leading-[1.5]">
        {label}
      </label>

      {options ? (
        <div className="flex flex-wrap w-full ">
          {options.map((option) => (
            <div className="w-1/2 flex justify-start items-center">
              <input
                type={type}
                name={name}
                value={option}
                placeholder={placeholder}
                id={option}
                className="appearance-none w-4 h-4 rounded border  bg-gray-600 checked:border-transparent focus:outline-none"
              />
              <label htmlFor={option} className="text-gray-500 relative">
                {option}
              </label>
            </div>
          ))}
        </div>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="text-gray-500 text-right font-Montserrat-Arabic font-semibold text-base leading-[1.5] w-full border-b bg-transparent outline-none pb-[6px]"
        />
      )}
    </div>
  );
}

function DaysWork() {
  return (
    <div className="justify-start items-center gap-56 inline-flex mb-[38px]">
      <div className="pl-5 pr-2.5 py-2.5 rounded-lg border border-neutral-800 justify-start items-center gap-5 flex">
        <div className="justify-start items-start gap-2.5 flex">
          <div className="p-4 bg-gradient-to-b from-neutral-800 to-neutral-800 rounded-md border border-zinc-800 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="w-5 h-5 relative" />
          </div>
          <div className="p-4 bg-gradient-to-b from-neutral-800 to-neutral-800 rounded-md border border-zinc-800 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="w-5 h-5 relative" />
          </div>
          <div className="p-4 bg-gradient-to-b from-neutral-800 to-neutral-800 rounded-md border border-zinc-800 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="w-5 h-5 relative" />
          </div>
        </div>
        <div className="text-neutral-200 text-base font-medium leading-normal">
          كن علي تواصل
        </div>
      </div>

      <div className="py-[50px] justify-start items-center gap-3.5 flex">
        <div className="px-5 py-2.5 bg-gradient-to-bl from-sky-500 via-teal-500 to-sky-500 rounded-md justify-start items-center gap-3.5 flex">
          <div className="text-neutral-200 text-base font-semibold leading-normal">
            الأحد إلي الخميس
          </div>
        </div>
        <div className="text-neutral-200 text-base font-semibold leading-normal">
          أيام العمل
        </div>
      </div>
    </div>
  );
}

function QuestionList() {
  return (
   
  );
}
