import MeetupDetail from "../../components/meetups/MeetupDetail";
import Layout from "../../components/layout/Layout";
function MeetupDetails() {
  return (
    <Layout>
      <MeetupDetail
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
        title="First Meetup"
        address="Some Street 5, Some City"
      />
    </Layout>
  );
}

export default MeetupDetails;
