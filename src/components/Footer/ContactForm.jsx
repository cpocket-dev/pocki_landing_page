import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    // PENDIENTE POR MODIFICAR CON LOS DATOS DEL CORREO OFICIAL DE LA EMPRESA (CREAR CUENTA Y AÑADIR TEMPLATE EN `` https://dashboard.emailjs.com/ `` )
    emailjs
      .sendForm("service_ID", "template_ID", form.current, "Public Key")
      .then(
        (result) => {
          form.current.reset();

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
    <form
      ref={form}
      onSubmit={sendEmail}
      className="form h-full flex flex-col justify-center items-center content-center mx-auto relative"
    >
      <div className="inputs-cont w-full max-w-[35rem] flex flex-col gap-4">
        <div className="input-field h-max">
          <label className="formLabel text-black font-bold text-xl">
            Nombre Completo
          </label>
          <input
            className="formInput border-[1px] border-zinc-400 w-full  rounded-lg p-2  text-black font-normal placeholder:text-sm placeholder:font-normal selection:outline-none focus:outline-none hover:outline-none"
            type="text"
            name="from_name"
            placeholder="nombre y apellido"
            required="true"
          />
        </div>
        <div className="input-field h-max">
          <label className="formLabel text-black font-bold text-xl">
            Correo Electronico
          </label>
          <input
            className="formInput border-[1px] border-zinc-400 w-full rounded-lg p-2  text-black font-normal  placeholder:text-sm placeholder:font-normal selection:outline-none focus:outline-none hover:outline-none"
            type="email"
            name="from_email"
            placeholder="nombre@emiail.com"
            required="true"
          />
        </div>
        <div className="input-field h-max">
          <label className="formLabel text-black font-bold text-xl">
            Mensaje
          </label>
          <textarea
            className="formInput border-[1px] border-zinc-400 w-full rounded-lg p-2 max-h-1/2 text-black font-normal  placeholder:text-sm placeholder:font-normal selection:outline-none focus:outline-none hover:outline-none min-h-[5rem] max-h-[15rem] h-[8rem]"
            name="message"
            placeholder="Queria contactarlos con la siguiende consulta..."
            required="true"
          />
        </div>
      </div>

      <input
        className="submitButton bg-green-500 py-2 px-4 rounded-lg my-2"
        type="submit"
        value="contactar"
      />
    </form>
  );
};
