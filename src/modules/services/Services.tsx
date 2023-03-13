import React from "react";
import Navbar from "@web/components/layout/Navbar";
import Footer from "@web/components/Footer/Footer";

const servicesdata = [
  {
    id: 1,
    title: "Продажа квартиры, дома/дачи, з/участока",
  },
  {
    id: 2,
    title: "Подписание договора на агентские услуги;",
  },
  {
    id: 3,
    title: "Съемка (фото, видео);",
  },
  {
    id: 4,
    title: "Размещение рекламы;",
  },
  {
    id: 5,
    title: "Съемка (фото, видео);",
  },
  {
    id: 6,
    title: "Организация просмотров с обязательным моим участием;",
  },
  {
    id: 7,
    title: "Ведение переговоров по торгу;",
  },
  {
    id: 8,
    title: "Организация аванса;",
  },
  {
    id: 9,
    title: "Подготовка к сделке (сбор необходимых для сделки документов);",
  },
  {
    id: 10,
    title: "Организация и проведение сделки;",
  },
  {
    id: 11,
    title: "Организация передачи объекта Покупателю.",
  },
];

const Services = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <h2 className="section-title my-10">Продажа объекта </h2>
        <div className="rounded-3xl bg-white md:shadow-xl md:py-14 md:pl-4 w-11/12 mx-auto">
          <div className="flex flex-col space-y-4">
            {servicesdata.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-1 sm:space-x-3"
              >
                <img src="/images/tick.png" alt="tick" />
                <p className="text-gray font-bold text-xl leading-6 md:text-2xl font-[Arsenal]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Services;
