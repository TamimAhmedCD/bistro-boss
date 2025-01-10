import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const UpdateItem = () => {
    const item = useLoaderData()
    console.log(item);
  return (
    <div>
      <SectionTitle heading="Update Item" subHeading="Refresh Info" />

    </div>
  );
};

export default UpdateItem;
