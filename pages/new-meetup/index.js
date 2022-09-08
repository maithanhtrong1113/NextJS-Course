import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Layout from "../../components/layout/Layout";
import { useRouter } from "next/router";
const NewMeetUp = () => {
  const router = useRouter();
  async function addMeetupHandler(data) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const dataa = await response.json();

    console.log(dataa);
    router.push("/");
  }
  return (
    <Layout>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </Layout>
  );
};

export default NewMeetUp;
