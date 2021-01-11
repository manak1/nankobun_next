import React from "react";
import { NextPage } from "next";
import { getShindan } from "../../lib/firebase";
import Form from "../../@types/form";
type Props = {
  shindan: Form;
};

const Sokutei: NextPage<Props> = ({ shindan }) => {
  return <div>{JSON.stringify(shindan)}</div>;
};

export async function getServerSideProps({ params }) {
  const docId = params.id;
  const shindan = await getShindan(docId);
  return {
    props: {
      shindan,
    },
  };
}

export default Sokutei;
