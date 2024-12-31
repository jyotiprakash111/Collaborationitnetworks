import Link from "next/link";
import React, { useState, useCallback, useMemo } from "react";

// Define your menu data
const menuData = [
  { path: "/", label: "Home", key: 1 },
  { path: "/page-services", label: "Solutions", key: 3 },
  { path: "/page-project-details", label: "Projects" },
  { path: "/page-about", label: "About" },
  { path: "/page-contact", label: "Contact" },
];

const MobileMenu = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [activeSubLink, setActiveSubLink] = useState(null);
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const handleClick = useCallback((key) => {
    setActiveLink((prevKey) => (prevKey === key ? null : key));
  }, []);

  const handleSubClick = useCallback((key) => {
    setActiveSubLink((prevKey) => (prevKey === key ? null : key));
  }, []);

  const handleNavClick = useCallback(() => {
    setSidebarVisible(false); // Hide the sidebar
  }, []);

  const handleToggleSidebar = useCallback(() => {
    setSidebarVisible((prevVisibility) => !prevVisibility);
  }, []);

  const renderLinks = useMemo(
    () =>
      menuData.map(({ path, label, key, subLinks }) => (
        <MenuItem
          key={key}
          path={path}
          label={label}
          subLinks={subLinks}
          isActive={activeLink === key}
          handleClick={() => handleClick(key)}
          handleSubClick={handleSubClick}
          activeSubLink={activeSubLink}
          handleNavClick={handleNavClick}
        />
      )),
    [activeLink, activeSubLink, handleClick, handleSubClick, handleNavClick]
  );

  return (
    <div>
      <button onClick={handleToggleSidebar}>
        {/* {isSidebarVisible ? "Close Menu" : "Open Menu"} */}
      </button>
      <div className={`sidebar ${isSidebarVisible ? "visible" : "hidden"}`}>
        <ul className="navigation clearfix">{renderLinks}</ul>
      </div>
    </div>
  );
};

const MenuItem = ({
  path,
  label,
  subLinks,
  isActive,
  handleClick,
  handleSubClick,
  activeSubLink,
  handleNavClick,
}) => (
  <li className={`dropdown ${isActive ? "current" : ""}`}>
    <Link href={path} onClick={handleNavClick}>
      {label}
    </Link>
    {subLinks && (
      <>
        <ul className={isActive ? "d-block" : "d-none"}>
          {subLinks.map(
            ({
              path: subPath,
              label: subLabel,
              key: subKey,
              subLinks: nestedSubLinks,
            }) => (
              <SubMenuItem
                key={subKey}
                path={subPath}
                label={subLabel}
                subLinks={nestedSubLinks}
                isActive={activeSubLink === subKey}
                handleClick={() => handleSubClick(subKey)}
                handleNavClick={handleNavClick}
              />
            )
          )}
        </ul>
        <div
          className={`dropdown-btn ${isActive ? "active" : ""}`}
          onClick={handleClick}
        >
          <i className="fa fa-angle-down"></i>
        </div>
      </>
    )}
  </li>
);

const SubMenuItem = ({
  path,
  label,
  subLinks,
  isActive,
  handleClick,
  handleNavClick,
}) => (
  <li className={`dropdown ${isActive ? "current" : ""}`}>
    <Link href={path} onClick={handleNavClick}>
      {label}
    </Link>
    {subLinks && (
      <>
        <ul className={isActive ? "d-block" : "d-none"}>
          {subLinks.map(({ path: subPath, label: subLabel }) => (
            <li key={subPath}>
              <Link href={subPath} onClick={handleNavClick}>
                {subLabel}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={`dropdown-btn ${isActive ? "active" : ""}`}
          onClick={handleClick}
        >
          <i className="fa fa-angle-down"></i>
        </div>
      </>
    )}
  </li>
);

export default MobileMenu;
