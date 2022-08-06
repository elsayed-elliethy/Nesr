import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { showBulletsActions } from "../../store";
import "./Setting.css";

const Setting = (props) => {
  // localStorage.clear();
  ////////show and hide settings///////
  const [settingClasses, setSettingClasses] = useState(
    "settings hide-settings"
  );
  const [gearClasses, setGearClasses] = useState("fa fa-gear settings-gear");

  const openSettingHandler = (id) => {
    if (settingClasses === "settings hide-settings") {
      setSettingClasses("settings show-settings");
      setGearClasses("fa fa-gear settings-gear fa-spin");
    }
    if (settingClasses === "settings show-settings") {
      setSettingClasses("settings hide-settings");
      setGearClasses("fa fa-gear settings-gear");
    }
  };

  /////////////

  const colors = [
    { id: 1, color: "#03a9f4" },
    { id: 2, color: "#e91e63" },
    { id: 3, color: "#009688" },
    { id: 4, color: "#ff9800" },
    { id: 5, color: "#4caf50" },
  ];
  let selectedColor;
  if (typeof localStorage.getItem("color") !== "undefined") {
    selectedColor = JSON.parse(localStorage.getItem("color"));
  }
  let currentIndex = selectedColor
    ? colors.findIndex((ele) => ele.id === selectedColor.id)
    : 0;
  if (selectedColor) {
    document.documentElement.style.setProperty(
      "--mainColor",
      selectedColor.color
    );
  }
  const [colorsState, setColorsState] = useState({
    activeColor: colors[currentIndex],
    colors: colors,
  });

  const changeMainColor = (color, index) => {
    document.documentElement.style.setProperty("--mainColor", color);
    setColorsState((prev) => {
      return { ...prev, activeColor: colorsState.colors[index] };
    });
    localStorage.setItem("color", JSON.stringify(colorsState.colors[index]));

    console.log(colorsState.colors[index].color, "ddd");
  };
  const activeHandler = (index) => {
    if (colorsState.colors[index] === colorsState.activeColor) {
      return "active";
    } else {
      return "";
    }
  };

  const inetialActive =
    localStorage.getItem("Show-Bullets") === "yes" ||
    !localStorage.getItem("Show-Bullets")
      ? "1"
      : "2";
  const [isActive, setIsActive] = useState(inetialActive);
  const dispatch = useDispatch();
  const showBulletsHandler = (id) => {
    dispatch(showBulletsActions.showBullets());
    setIsActive(id);
    localStorage.setItem("Show-Bullets", "yes");
  };
  const hideBulletsHandler = (id) => {
    dispatch(showBulletsActions.hideBullets());
    setIsActive(id);
    localStorage.setItem("Show-Bullets", "no");
  };

  const resetSettingHandler = () => {
    localStorage.removeItem("Show-Bullets");
    localStorage.removeItem("color");
    window.location.reload();
  };

  ////////////////
  return (
    <div className={settingClasses}>
      <div
        className="toggle-settings d-none d-md-block"
        onClick={openSettingHandler}
      >
        <i className={gearClasses}></i>
      </div>
      <div className="settings-container">
        <div className="option-box">
          <h4>Colors</h4>
          <ul className="ul-colors">
            {colorsState.colors.map((ele, index) => {
              return (
                <li
                  key={index}
                  id={ele.id}
                  onClick={() => changeMainColor(ele.color, index)}
                  className={activeHandler(index)}
                ></li>
              );
            })}
          </ul>
        </div>
        <hr />

        <div className="option-box">
          <h4>Show-bullets</h4>
          <div className="show-bullets">
            <span
              className={isActive === "1" ? "yes active me-2" : "yes me-2"}
              id="1"
              onClick={(e) => showBulletsHandler(e.target.id)}
            >
              Yes
            </span>
            <span
              className={isActive === "2" ? "no active " : "no "}
              id="2"
              onClick={(e) => hideBulletsHandler(e.target.id)}
            >
              No
            </span>
          </div>
        </div>

        <div className="reset" onClick={resetSettingHandler}>
          Reset
        </div>
      </div>
    </div>
  );
};

export default Setting;
