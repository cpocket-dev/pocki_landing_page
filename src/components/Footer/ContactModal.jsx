import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useTranslationHook } from "../../hooks/useI18nTranslation";
import toast from "react-hot-toast";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { GoMail } from "react-icons/go";

export function ContactModal() {
  const { t } = useTranslationHook();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "unset";
    }
  }, [isOpen]);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // PENDIENTE POR MODIFICAR CON LOS DATOS DEL CORREO OFICIAL DE LA EMPRESA (CREAR CUENTA Y AÑADIR TEMPLATE EN `` https://dashboard.emailjs.com/ `` )
    emailjs
      .sendForm(
        "service_ID",
        "template_ID",
        form.current,
        "Public Key"
      )
      .then(
        (result) => {
          form.current.reset();
          toast("Message sent!", {
            icon: "📨",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });

          const { status } = result;
          return status;
        },
        (error) => {
          const { status } = error;
          return status;
        }
      );
  };

  return (
    <>
      <p className="cursor-pointer" onClick={() => setIsOpen(true)}>
        Contact Us
      </p>

      {isOpen && (
        <div className="animate-fade animate-once animate-ease-in-out z-10 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="modal-animation rounded-xl shadow-2xl w-max h-max bg-white flex flex-col justify-center items-center content-center relative">
            <div className="w-[90vw] h-[50vh] flex flex-col p-4">
              <div className="contact-modal-top overflow-visible w-[90%] mx-auto mb-10 flex justify-between items-center content-center">
                <p className="text-black">Contactanos</p>
                <button
                  className="close-button rounded-full bg-black text-white p-2 aspect-square flex justify-center items-center content-center overflow-hidden"
                  onClick={() => setIsOpen(false)}
                >
                  x
                </button>
              </div>
              <form ref={form} onSubmit={sendEmail} className="form h-full flex flex-col justify-center items-center content-center mx-auto w-[90%] gap-2 my-auto relative">
                <input
                  className="formInput bg-zinc-200 w-full  rounded-lg p-2  text-black font-normal placeholder:text-sm placeholder:font-normal selection:outline-none focus:outline-none hover:outline-none"
                  type="text"
                  name="from_name"
                  placeholder="name"
                  required="true"
                />
                <input
                  className="formInput bg-zinc-200 w-full rounded-lg p-2  text-black font-normal  placeholder:text-sm placeholder:font-normal selection:outline-none focus:outline-none hover:outline-none"
                  type="email"
                  name="from_email"
                  placeholder="email"
                  required="true"
                />
                <textarea
                  className="formInput bg-zinc-200 w-full rounded-lg p-2 max-h-1/2 text-black font-normal  placeholder:text-sm placeholder:font-normal selection:outline-none focus:outline-none hover:outline-none"
                  name="message"
                  placeholder="message"
                  required="true"
                />
                <input className="submitButton bg-green-500 py-2 px-4 rounded-lg my-2" type="submit" value="contact" />
                
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
