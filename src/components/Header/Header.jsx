import { useState, useEffect } from "react";
import "./Header.css";
/* import { useTranslation } from "react-i18next"; */
/* import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
/* import { VisitCounter } from "../ui/VisitorCounter"; */
import { useTranslationHook } from "../../hooks/useI18nTranslation";
import HeaderLogo from "/assets/logos/header-logo.svg";

const Header = () => {

  const { t } = useTranslationHook();  // Hook personalizado para usar i18n 

  const [isActive, setIsActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsActive(false);
  }, [windowWidth]);

  const menuActions = () => {
    if (windowWidth < 768) {
      toggleClass();
    }
  };

  const lng = navigator.language;

  return (
    /* <header className="header-cont w-screen h-[4.1rem] fixed top-0 font-bold z-10">
      <nav className="header justify-around">
        <h2 className="logo nav-button absolute">
          <a
            href="#main"
            className="header-logo font-extrabold text-xl"
            type="button"
          >
            <img className="h-full w-full logo" src={HeaderLogo} alt="" />
          </a>
        </h2>
        <ul className={`nav-ul ${isActive ? "display-menu" : ""}`}>
          <li className={`nav-li ${isActive ? "display-li" : ""}`}>
            <a
              className="nav-button nav-li-button main-button"
              href="#main"
              onClick={menuActions}
            >
              inicio
            </a>
          </li>
          <li className={`nav-li ${isActive ? "display-li" : ""}`}>
            <a
              className="nav-button nav-li-button services-button"
              href="#servicios"
              onClick={menuActions}
            >
              servicios
            </a>
          </li>
          <li className={`nav-li ${isActive ? "display-li" : ""}`}>
            <a
              className="nav-button nav-li-button"
              href="#conocenos"
              onClick={menuActions}
            >
              conócenos
            </a>
          </li>
          <li className={`nav-li ${isActive ? "display-li" : ""}`}>
            <a
              className="nav-button history-button nav-li-button"
              href="#historia"
              onClick={menuActions}
            >
              historia
            </a>
          </li>
          <li className={`nav-li ${isActive ? "display-li" : ""}`}>
            <a
              className="nav-button nav-li-button contact-button"
              href="#contacto"
              onClick={menuActions}
            >
              Contacto
            </a>
          </li>
        </ul>{" "}
        <div className="counter scale-75 md:scale-100 overflow-visible flex justify-center items-center absolute md:block left-0">
          {" "}
          <VisitCounter className="counter1" />{" "}
        </div>
        <div className="menu-actions z-10 md:hidden">
          <GiHamburgerMenu
            className={`nav-menu open-menu ${isActive ? "menu-active" : ""}`}
            type="button"
            onClick={menuActions}
          />
          <RiCloseLine
            className={`nav-menu close-menu ${isActive ? "menu-close" : ""}`}
            type="button"
            onClick={menuActions}
          />{" "}
        </div>
      </nav>
    </header> */

    <>
      <header className="header-cont w-screen h-[4.1rem] fixed top-0 font-bold z-10">
        <nav className="header justify-around">
          <div className="logo nav-button absolute">
            <a
              href="#main"
              className="header-logo font-extrabold text-xl"
              type="button"
            >
              <img
                className="h-full w-full logo"
                src={HeaderLogo}
                alt={t("header.altLogo")}
              />
            </a>
          </div>
          <ul className={`nav-ul ${isActive ? "display-menu" : ""}`}>
          <li className={`nav-li ${isActive ? "display-li" : ""}`}>
            <a
              className="nav-button nav-li-button main-button"
              href="#main"
              onClick={menuActions}
            >
              {t("header.nav.inicio")}
            </a>
          </li>
          <li className={`nav-li ${isActive ? "display-li" : ""}`}>
            <a
              className="nav-button nav-li-button services-button"
              href="#servicios"
              onClick={menuActions}
            >
              {t("header.nav.servicios")}
            </a>
          </li>
          <li className={`nav-li ${isActive ? "display-li" : ""}`}>
            <a
              className="nav-button nav-li-button"
              href="#conocenos"
              onClick={menuActions}
            >
              {t("header.nav.conocenos")}
            </a>
          </li>
          <li className={`nav-li ${isActive ? "display-li" : ""}`}>
            <a
              className="nav-button history-button nav-li-button"
              href="#historia"
              onClick={menuActions}
            >
              {t("header.nav.historia")}
            </a>
          </li>
          <li className={`nav-li ${isActive ? "display-li" : ""}`}>
            <a
              className="nav-button nav-li-button contact-button"
              href="#contacto"
              onClick={menuActions}
            >
              {t("header.nav.contacto")}
            </a>
          </li>
        </ul>{" "}
        </nav>
      </header>
    </>
  );
};

export default Header;
