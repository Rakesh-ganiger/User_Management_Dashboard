/* eslint-disable react/prop-types */
const UserCard = ({ user, onDelete, onEdit }) => {
    return (
        <div className="border rounded p-4 shadow">
            <h2 className="text-lg font-bold">{user.firstName} {user.lastName}</h2>
            <p>ID: {user.id}</p>
            <p>Email: {user.email}</p>
            <p>Department: {user.department}</p>
            <div className="mt-2">
                <button
                    onClick={() => onEdit(user)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                    Edit
                </button>
                <button
                    onClick={() => onDelete(user.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default UserCard;
