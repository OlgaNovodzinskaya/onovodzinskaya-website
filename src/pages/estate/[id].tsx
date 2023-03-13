import EstateCarousel from "@web/components/Estate/EstateCarousel";
import Footer from "@web/components/Footer/Footer";
import Navbar from "@web/components/layout/Navbar";
import { getAllFlats } from "@web/services/supabase";
import "keen-slider/keen-slider.min.css";
import { useRouter } from "next/router";
import useSWR from "swr";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;

const EstateDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR("/api/flats", getAllFlats);

  const estate = data?.find((item) => item.id === id);

  const estateImages = estate?.images.split(",");

  return (
    <>
      <div className="container">
        <Navbar />

        <h2 className="section-subheading my-3 xl:my-9   text-center xl:text-left">
          {estate?.type}
        </h2>
        <p className="text-xl font-normal font-[Arsenal] text-gray  text-center xl:text-left">
          {estate?.city}, {estate?.street}, {estate?.house_number}
        </p>
        <p className="text-xl font-normal font-[Arsenal] text-gray flex justify-center xl:justify-start gap-2">
          <img src="/images/metro.svg" alt="metro" width={27} height={27} />
          {estate?.metro}
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-9">
          {/* estate left start*/}
          <div>
            <div className="flex gap-12 mt-4 justify-center xl:justify-start">
              <div className="flex flex-col">
                <p className="section-subheading">
                  {estate?.full_square} м<sup>2</sup>
                </p>
                <p className="text-xl font-bold font-[Arsenal] text-gray">
                  Общая
                </p>
              </div>
              <div className="flex flex-col">
                <p className="section-subheading">
                  {estate?.living_square} м<sup>2</sup>
                </p>
                <p className="text-xl font-bold font-[Arsenal] text-gray">
                  Жилая
                </p>
              </div>
              <div className="flex flex-col">
                <p className="section-subheading">
                  {estate?.kitchen_square} м<sup>2</sup>
                </p>
                <p className="text-xl font-bold font-[Arsenal] text-gray">
                  Кухня
                </p>
              </div>
              <div className="flex flex-col">
                <p className="section-subheading">
                  {estate?.floor}/{estate?.floors_count}
                </p>
                <p className="text-xl font-bold font-[Arsenal] text-gray">
                  Этаж
                </p>
              </div>
            </div>

            <EstateCarousel images={estateImages} />

            <div className="flex items-center justify-between xl:block mt-8">
              <p className="section-subheading text-left xl:mt-12 flex items-center gap-6">
                Кол-во комнат: {estate?.rooms_count}
              </p>
              <p className="section-subheading text-left xl:mt-6 flex items-center gap-6">
                Санузел: {estate?.toilets_count}
              </p>
            </div>

            <p className="mt-14 block xl:hidden h-full">
              <span className="block">
                Предлагается в долгосрочную аренду трехкомнатная квартира с
                отдельной гардеробной комнатой и множеством окон в новом
                арендном доме `&quot`Сердце Столицы`&quot` от ДОМ.РФ.
              </span>
              <span className="block">
                Доступна рассрочка оплаты депозита на 3 месяца! Без комиссии.
                Разрешено проживание с животными!
              </span>
              <span className="block">
                Квартира (ТП 1) с индивидуальным интерьерным решением в
                современном стиле, качественной отделкой, мебелью и техникой для
                жизни от ведущих брендов (Hotpoint, LG):
              </span>
              <span className="block">
                - Посудомоечная и стиральная машины; - Встраиваемая бытовая
                техника; - Кондиционеры; - Плазменный телевизор c функцией
                Smart-TV Вквартире размещён полный комплект необходимой мебели:
                - современный кухонный гарнитур; - компактный обеденный стол со
                стульями на четыре персоны; - двуспальный раскладной диван; -
                двуспальная кровать с прикроватными тумбами; - компактный шкаф в
                спальне; - широкий шкаф в гардеробной; - диван-кровать в детской
                комнате; - письменный стол и стул в рабочей зоне; -
                вместительный шкаф и мягкий пуф в прихожей
              </span>
              <span className="block">
                В студии два санузла: один совмещенный санузел с ванной и
                стиральной машиной, другой-гостевой.
              </span>
              <span className="block">
                Услуги консьерж-сервиса 24/7 включены в арендную плату (прием
                корреспонденции, заявок на ремонт, выдача гостевых пропусков, и
                т.д.), дополнительно можно заказать: доставку воды, уборку,
                стирку, глажку, уход за животными и многое другое.
              </span>
              <span className="block">
                Закрытый благоустроенный двор без машин оснащен системой
                видеонаблюдения и круглосуточной охраной, вход на территорию
                осуществляется по системе электронных пропусков. Сердце Столицы
                - новый современный ЖК бизнес-класса на берегу Москвы - реки.
              </span>
            </p>
          </div>
          {/* estate left end */}
          {/* estate right start */}
          <div className="min-h-[531px]">
            <h2 className="text-3xl sm:text-5xl font-bold font-[Arsenal] text-gray pt-6 text-center xl:text-left">
              {estate?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽
            </h2>
            <form
              action=""
              className="max-w-[300px] max-h-[334px] md:max-w-[530px] md:max-h-[431px] flex flex-col justify-center  w-full h-full bg-[#ffece9] mx-auto border-1 border-[#d8d8d8] rounded-2xl md:rounded-2xl mt-10"
            >
              <h2 className="font-[Arsenal] font-bold text-[16px] leading-5 md:text-[28px] md:leading-[35px] text-[#757575] text-center">
                Свяжемся с вами в течении 5 минут
              </h2>
              <div className="flex flex-col w-full max-w-[217px] md:max-w-[396px] mx-auto mt-[15px] gap-[3px]">
                <label
                  htmlFor="name"
                  className="font-[Arsenal] font-normal text-[12px] leading-[15px] text-[##908F8F]  pl-4"
                >
                  Введите имя
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-md rounded-[10px] md:rounded-[15px]  w-full border-0  h-[38px] md:h-[66px] outline-none focus:ring-0"
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col w-full max-w-[217px] md:max-w-[396px] mx-auto mt-[15px] gap-[3px]">
                <label
                  htmlFor="phone"
                  className="font-[Arsenal] font-normal text-[12px] leading-[15px] text-[##908F8F] pl-4"
                >
                  Введите номер телефона
                </label>
                <input
                  type="text"
                  id="phone"
                  className="shadow-md rounded-[10px] md:rounded-[15px]  w-full border-0 h-[38px] md:h-[66px] outline-none focus:ring-0"
                  autoComplete="off"
                />
              </div>
              <button className="font-[Arsenal] font-bold text-white text-[16px] leading-5 md:text-[20px] md:leading-[25px] pt-[7px] pb-[12px] md:px-[30px] md:pt-[18px] md:pb-[23px] bg-gradient-to-b from-[#FFCCBD] to-[#F15038] rounded-[7px] md:rounded-[16px] max-w-[174px] md:max-w-[297px] w-full mx-auto mt-[14px] md:mt-[43px] block cursor-pointer">
                Оставить заявку !
              </button>
            </form>
          </div>
          {/* estate right end */}
        </div>
        <p className="mt-14 hidden xl:block">
          <span className="block">
            Предлагается в долгосрочную аренду трехкомнатная квартира с
            отдельной гардеробной комнатой и множеством окон в новом арендном
            доме `&quot`Сердце Столицы`&quot` от ДОМ.РФ.
          </span>
          <span className="block">
            Доступна рассрочка оплаты депозита на 3 месяца! Без комиссии.
            Разрешено проживание с животными!
          </span>
          <span className="block">
            Квартира (ТП 1) с индивидуальным интерьерным решением в современном
            стиле, качественной отделкой, мебелью и техникой для жизни от
            ведущих брендов (Hotpoint, LG):
          </span>
          <span className="block">
            - Посудомоечная и стиральная машины; - Встраиваемая бытовая техника;
            - Кондиционеры; - Плазменный телевизор c функцией Smart-TV Вквартире
            размещён полный комплект необходимой мебели: - современный кухонный
            гарнитур; - компактный обеденный стол со стульями на четыре персоны;
            - двуспальный раскладной диван; - двуспальная кровать с
            прикроватными тумбами; - компактный шкаф в спальне; - широкий шкаф в
            гардеробной; - диван-кровать в детской комнате; - письменный стол и
            стул в рабочей зоне; - вместительный шкаф и мягкий пуф в прихожей
          </span>
          <span className="block">
            В студии два санузла: один совмещенный санузел с ванной и стиральной
            машиной, другой-гостевой.
          </span>
          <span className="block">
            Услуги консьерж-сервиса 24/7 включены в арендную плату (прием
            корреспонденции, заявок на ремонт, выдача гостевых пропусков, и
            т.д.), дополнительно можно заказать: доставку воды, уборку, стирку,
            глажку, уход за животными и многое другое.
          </span>
          <span className="block">
            Закрытый благоустроенный двор без машин оснащен системой
            видеонаблюдения и круглосуточной охраной, вход на территорию
            осуществляется по системе электронных пропусков. Сердце Столицы -
            новый современный ЖК бизнес-класса на берегу Москвы - реки.
          </span>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default EstateDetails;
