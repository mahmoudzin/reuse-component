export default function ContactUs() {
  return (
    <div className="flex justify-between gap-[133px]">
      {/* form */}
      <ContactForm />
      {/* imgSection */}
      <ContactImage />
    </div>
  );
}

const inputs = [
  {
    name: "username",
    type: "text",
    iconSrc: "images/",
    placeholder: "الاسم الكامل",
  },
  {
    name: "email",
    type: "email",
    iconSrc: "images/",
    placeholder: "البريد الإلكتروني",
  },
  {
    name: "phonenumber",
    type: "telephone",
    iconSrc: "images/",
    placeholder: "رقم التليفون",
  },
  {
    name: "message",
    type: "text",
    iconSrc: "images/",
    placeholder: "أكتب شيئا هنا...",
    element: "textarea",
  },
];

function ContactForm() {
  return (
    <div className="flex flex-col w-1/2 gap-3">
      {inputs.map((input) => (
        <ContectFormInput {...input} />
      ))}
    </div>
  );
}
const commonClasses = "flex rounded-10 bg-gray-900 py-[25px]";
const imgClasses = "w-[40px] px-[24px]";
const inputClasses = "bg-transparent h-full";
function ContectFormInput({ name, type, iconSrc, placeholder, element }) {
  return (
    <>
      {element === "textarea" ? (
        <div className={`h-[201px] ${commonClasses}`}>
          <img src={iconSrc} alt={name} className={imgClasses} />
          <textarea
            name={name}
            type={type}
            style={{ width: "calc(100% - 64px)" }}
            className={inputClasses}
            placeholder={placeholder}
          ></textarea>
        </div>
      ) : (
        <div className={`h-[79px] ${commonClasses}`}>
          <img src={iconSrc} alt={name} className={imgClasses} />
          <input
            name={name}
            type={type}
            style={{ width: "calc(100% - 64px)" }}
            className={inputClasses}
            placeholder={placeholder}
          />
        </div>
      )}
    </>
  );
}

function ContactImage() {
  return (
    <div className="relative h-[538px] w-1/2">
      {/* layer */}
      <div className="absolute top-0 left-0 bottom-0 right-0 rounded-lg bg-gradient-to-b from-rgba-teal-400 to-rgba-dark-blue-400" />
      <img src="/assets/image.png" />
    </div>
  );
}
