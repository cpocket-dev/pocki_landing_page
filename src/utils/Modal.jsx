import { useState, useEffect } from "react";
import { useTranslationHook } from "../hooks/useI18nTranslation";
import "./Modal.css";

export function Modal({ body, children, title }) {
  const { t } = useTranslationHook();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.querySelector(".info").classList.add("z-[35]");
      document
        .querySelector(".header-cont")
        .classList.add("z-[36]", "opacity-50", "pointer-events-none");
    } else {
      document.documentElement.style.overflow = "unset";
      document.querySelector(".info").classList.remove("z-[35]");
      document
        .querySelector(".header-cont")
        .classList.remove("z-[36]", "opacity-50", "pointer-events-none");
    }
  }, [isOpen]);

  return (
    <>
      <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
        {body}
      </div>

      {isOpen && (
        <div className="animate-fade animate-once animate-ease-in-out z-[999] fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
          <div className="modal-animation rounded-xl shadow-2xl w-max h-max max-h-[40rem] bg-white flex flex-col justify-center items-center content-center relative">
            <div className="w-max h-max flex flex-col p-4">
              <div className="contact-modal-top overflow-visible w-[100%] mx-auto mb-10 flex justify-between items-center content-center">
                <p className="text-green-500 text-xl font-bold">{title}</p>
                <button
                  className="close-button rounded-full bg-green-500 text-white p-2 aspect-square flex justify-center items-center content-center overflow-hidden"
                  onClick={() => setIsOpen(false)}
                >
                  x
                </button>
              </div>
              <div className="h-full mx-auto w-[100%] gap-2 my-auto relative">
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
