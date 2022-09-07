import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";
const Home = (props) => {
  const dump = [
    {
      id: 1,
      image:
        "https://ebudezain.com/compress/70/upload/images/image%28162%29.png?v=1.1.28",
      title: "Anh Khang pro",
      address: "Anh Khang pro Ninh Thuan",
    },
  ];
  return (
    <Layout>
      <MeetupList meetups={dump}></MeetupList>
    </Layout>
  );
};
// export function getStaticProps() {
//   return {
//     props: {
//       meetups: dump,
//     },
//   };
// }
export default Home;
