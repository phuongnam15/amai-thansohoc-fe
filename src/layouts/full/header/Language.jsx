import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../../store/customizer/CustomizerSlice";
import FlagEn from "../../../assets/images/flags/icon-flag-en.svg";
import FlagVn from "../../../assets/images/flags/icon-flag-vn.svg";
import { useTranslation } from "react-i18next";

const Languages = [
  {
    flagname: "English (UK)",
    icon: FlagEn,
    value: "en",
  },
  {
    flagname: "Việt Nam (Uncle Ho)",
    icon: FlagVn,
    value: "vn",
  },
];

const Language = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const customizer = useSelector((state) => state.customizer);
  const currentLang =
    Languages.find((_lang) => _lang.value === customizer.isLanguage) ||
    Languages[1];
  const { i18n } = useTranslation();

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleClose = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    i18n.changeLanguage(customizer.isLanguage);
  }, [customizer.isLanguage, i18n]);

  return (
    <>
      <button
        onClick={handleClick}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <img
          src={currentLang.icon}
          alt={currentLang.value}
          style={{ width: 20, height: 20 }}
        />
      </button>
      {showMenu && (
        <div
          style={{
            position: "absolute",
            top: "40px",
            right: "0",
            width: "200px",
            background: "#fff",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            zIndex: 1000,
          }}
        >
          {Languages.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                dispatch(setLanguage(option.value));
                localStorage.setItem("language", option.value);
                handleClose();
              }}
              style={{
                padding: "10px 15px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
            >
              <img
                src={option.icon}
                alt={option.flagname}
                style={{ width: 20, height: 20, marginRight: "10px" }}
              />
              <span>{option.flagname}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Language;
