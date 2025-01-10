import { FaTrash } from "react-icons/fa6";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "./../../../hooks/useMenu";
import { MdEdit } from "react-icons/md";

const ManageItems = () => {
  const [menu] = useMenu();

  const handleDeleteItem = item => {

  }

  const handleUpdateItem = item => {

  }
  return (
    <div>
      <SectionTitle heading="Manage All Items" subHeading="Hurry Up" />
      <div>
        <div className="overflow-x-auto rounded-xl">
          <table className="table">
            {/* head */}
            <thead className="bg-orange-400">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, i) => (
                <tr key={item._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      onClick={() => handleUpdateItem(item._id)}
                      className="btn bg-orange-500"
                    >
                      <MdEdit className="text-white"> </MdEdit>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item._id)}
                      className="btn btn-ghost"
                    >
                      <FaTrash className="text-red-500"> </FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
