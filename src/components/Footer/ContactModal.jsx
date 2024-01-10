import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useTranslationHook } from "../../hooks/useI18nTranslation";
import toast from "react-hot-toast";

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

    // PENDIENTE POR MODIFICAR CON LOS DATOS DEL CORREO OFICIAL DE LA EMPRESA
    emailjs
      .sendForm(
        "service_b365vfw",
        "template_utf004l",
        form.current,
        "ksgEozaWOPc2jZiop"
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
      <p onClick={() => setIsOpen(true)}>Contact Us</p>

      {isOpen && (
        <div className="animate-fade animate-once animate-ease-in-out z-10 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="modal-animation rounded-xl shadow-2xl w-[90vw] sm:w-[70vw] h-1/2 bg-white flex flex-col justify-center items-center content-center relative">
            <div className="w-full h-full flex flex-col p-4">
              <div className="contact-modal-top flex justify-between items-center content-center">
                <p className="text-black">Contact Us</p>
                <button
                  className="close-button rounded-lg bg-black text-white py-2 px-4"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
