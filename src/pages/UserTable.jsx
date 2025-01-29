/* eslint-disable react/prop-types */
import React from 'react';

const UserTable = ({ users, handleDeleteUser, setEditUser }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse table-auto">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">First Name</th>
                        <th className="border px-4 py-2">Last Name</th>
                        <th className="border px-4 py-2">Email</th>
                        <th className="border px-4 py-2">Department</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.id} className="border-b">
                                <td className="border px-4 py-2">{user.id}</td>
                                <td className="border px-4 py-2">{user.firstName}</td>
                                <td className="border px-4 py-2">{user.lastName}</td>
                                <td className="border px-4 py-2">{user.email}</td>
                                <td className="border px-4 py-2">{user.department}</td>
                                <td className="border px-4 py-2 flex justify-center">
                                    <button
                                        onClick={() => setEditUser(user)}
                                        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteUser(user.id)}
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="border px-4 py-2 text-center">
                                No users to display yet.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;