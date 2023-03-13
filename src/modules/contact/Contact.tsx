import React from "react";
import Navbar from "@web/components/layout/Navbar";
import Footer from "@web/components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <h2 className="section-title my-10">Контакты</h2>
        <p className="text-lg font-[Arsenal] text-center text-darkgray w-full max-w-[274px] mx-auto">
          г. Москва, 123456, улица <br />
          Улица, д. 39 <br />
          <span className="flex justify-center">
            <img src="/images/metro.svg" alt="metro" width={25} height={25} />
            Метро
          </span>
          <span className="font-bold">Телефон:</span> +7 (495)000-00-00 <br />
          <span className="font-bold">E-mail:</span> olga.novodzinskaya.ru
          <br />
          <span className="font-bold block mt-5">График работы:</span> <br />
          Понедельник — Пятница: 9:00-20:00 <br />
          Суббота — Воскресенье: 10:00-18:00 <br />
          <span className="font-bold block mt-5">Реквизиты компании:</span>{" "}
          <br />
          ИП Новодзинская О.И Москва, ул. Улица ,д ИНН 500000010001 ОГРН/ОГРНИП
          31123г8839929292 БИК 00001110
        </p>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
