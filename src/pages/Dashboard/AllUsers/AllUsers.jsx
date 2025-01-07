import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axisSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axisSecure.get("/users", {
        headers: {
          authorization: `Bearer`
        }
      });
      return res.data;
    },
  });

  const handleMakeAdmin = user => {
    axisSecure.patch(`/users/admin/${user}`)
    .then(res => {
      console.log(res.data);
      if(res.data.modifiedCount > 0) {
        refetch()
        Swal.fire({
          title: "Good job!",
          text: `${user.name} in an Admin Now`,
          icon: "success"
        });
      }
    })
  }

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axisSecure.delete(`/users/${user}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Cart has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="w-full">
      <div className="flex justify-evenly py-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  { user.role === 'admin' ? "Admin" : <button
                    onClick={() => handleMakeAdmin(user._id)}
                    className="btn bg-orange-400"
                  >
                    <FaUsers className="text-white"> </FaUsers>
                  </button>}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
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
  );
};

export default AllUsers;
