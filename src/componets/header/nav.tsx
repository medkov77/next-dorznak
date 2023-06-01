"use client";
import React, { MouseEvent, FunctionComponent } from "react";
import Link from "next/link";
import styles from "./nav.module.css";
import { RxEnter } from "react-icons/rx";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
const Nav = () => {
  const menu: { name: string; link: string }[] = [
    { name: "Главная", link: "/" },
    { name: "О компании", link: "/about" },
    { name: "Каталог", link: "/katalog" },
    { name: "Блог", link: "/blog" },
    { name: "Контакты", link: "/contakts" },
  ];
  const pathname = usePathname();
  const [menuActive, setMenuActive] = useState(false);
  const [loginMenu, setLoginMenu] = useState(false);
  function openMenu(event: MouseEvent<HTMLDivElement>) {
    setMenuActive(true);
  }

  function closeMenu(this: HTMLElement): void {
    setMenuActive(false);
  }
  function handleOpenLogMenu(this: HTMLElement): void {
    setLoginMenu((prev) => !prev);
    console.log("open", this);
  }
  function handleCloseLogMenu(this: HTMLElement): void {
    setLoginMenu(false);
    console.log("close");
  }
  useEffect(() => {
    document.body.addEventListener("click", closeMenu);
    //document.body.addEventListener("click", handleCloseLogMenu);

    return function cleanup() {
      window.removeEventListener("click", closeMenu);
      //window.removeEventListener("click", handleCloseLogMenu);
    };
  }, []);
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        {!menuActive ? (
          <div className={styles.burger} onClick={openMenu}>
            <HiMenu
              style={{
                width: "30px",
                height: "30px",
                color: "inherit",
              }}
            />
          </div>
        ) : (
          <div className={styles.burger} onClick={closeMenu}>
            <IoClose
              style={{
                width: "30px",
                height: "30px",
                color: "inherit",
              }}
            />
          </div>
        )}

        <div className={styles.menu}>
          {menu.map((item) => {
            return (
              <Link
                href={item.link}
                key={item.link}
                className={
                  pathname === item.link
                    ? `${styles.link} ${styles.active}`
                    : styles.link
                }
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div
          className={`${styles.link} ${styles.enter}`}
          onClick={handleOpenLogMenu}
        >
          <RxEnter
            style={{
              width: "30px",
              height: "30px",
              color: "inherit",
            }}
          />
        </div>
      </div>

      <div
        className={
          menuActive ? `${styles.mobile} ${styles.active}` : `${styles.mobile}`
        }
      >
        {menu.map((item) => {
          return (
            <Link
              href={item.link}
              key={item.link}
              className={
                pathname === item.link
                  ? `${styles.link} ${styles.active}`
                  : styles.link
              }
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      {loginMenu && (
        <div className={styles.login}>
          <Link href="/login" onClick={handleCloseLogMenu}>
            Вход
          </Link>
          <Link href="/auth" onClick={handleCloseLogMenu}>
            Регистрация
          </Link>
        </div>
      )}
    </nav>
  );
};
export default Nav;
