import React from "react";
import Navbar from "@web/components/layout/Navbar";
import useSWR from "swr";
import { getAllFlats } from "@web/services/supabase";
import FacilityCard from "@web/components/Facility/FacilityCard";
import Link from "next/link";
import Footer from "@web/components/Footer/Footer";

const Estate = () => {
  const { data, error, isLoading } = useSWR("/api/flats", getAllFlats);

  console.log(data);

  return (
    <>
      <div className="container">
        <Navbar />
        <h2 className="section-title my-10">Объекты</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data?.map((item, index) => (
            <Link href={`/estate/${item.id}`} key={index}>
              <FacilityCard city={""} images={""} {...item} />
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Estate;
