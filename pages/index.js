import React, { Fragment, useState } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";
import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";
const Home = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Anh Trong Pro</title>
        <meta name="description" content="Anh Trong Pro Vip vl 0123" />
      </Head>
      <Layout>
        <MeetupList meetups={props.meetups}></MeetupList>
      </Layout>
    </Fragment>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://root:root@cluster0.6llrnl4.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default Home;
