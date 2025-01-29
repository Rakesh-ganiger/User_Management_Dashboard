/* eslint-disable no-unused-vars */
// src/pages/UsersList.jsx
import { useState, useEffect } from 'react';
import UserForm from '../components/UserForm';
import api from '../services/api';
import UserTable from './UserTable';
import { handleAddUserLogic } from './handleAddUserLogic';
import { handleEditUserLogic } from './handleEditUserLogic';
import { handleDeleteUserLogic } from './handleDeleteUserLogic';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editUser, setEditUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await api.getUsers();
                const usersWithMockData = data.map(user => ({
                    ...user,
                    firstName: user.name.split(" ")[0] || "N/A",
                    lastName: user.name.split(" ").slice(1).join(" ") || "N/A",
                    department: "N/A"
                }));
                setUsers(usersWithMockData);
            } catch (err) {
                setError("Error fetching users: " + err.message);
                console.error("API Error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleAddUser = async (newUser) => {
        try {
            const updatedUsers = await handleAddUserLogic(newUser, users);
            setUsers(updatedUsers);
            setShowForm(false);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleEditUser = async (updatedUser) => {
        try {
            const updatedUsers = await handleEditUserLogic(updatedUser, users);
            setUsers(updatedUsers);
            setEditUser(null);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            const updatedUsers = await handleDeleteUserLogic(id, users);
            setUsers(updatedUsers);
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) {
        return <div>Loading users...</div>;
    }

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>

            <button
                onClick={() => setShowForm(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
                Add User
            </button>

            {showForm && <UserForm onSave={handleAddUser} onCancel={() => setShowForm(false)} />}
            {editUser && (
                <UserForm user={editUser} onSave={handleEditUser} onCancel={() => setEditUser(null)} />
            )}

            <UserTable 
                users={users} 
                handleDeleteUser={handleDeleteUser} 
                setEditUser={setEditUser} 
            />
        </div>
    );
};

export default UsersList;

