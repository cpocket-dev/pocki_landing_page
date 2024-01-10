import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslationHook } from "../../hooks/useI18nTranslation";

export function ContactModal() {
  const { t } = useTranslationHook();
  const [isOpen, setIsOpen] = useState(false);
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
            <p>MODAL</p>
            <button
              className="absolute top-4 right-4 close-button rounded-lg bg-black text-white py-2 px-4"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
