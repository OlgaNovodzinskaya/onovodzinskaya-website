export { default } from "@web/modules/home";
import { getAllFlats } from "@web/services/supabase";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const res = await getAllFlats();

  return {
    props: {
      fallback: {
        "/api/flats": res,
      },
    },
  };
};
