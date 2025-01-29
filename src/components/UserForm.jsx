/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const UserForm = ({ onSave, onCancel, user }) => {
    const initialFormData = user ? { ...user } : { firstName: '', lastName: '', email: '', department: '' };
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setFormData(user ? { ...user } : { firstName: '', lastName: '', email: '', department: '' });
    }, [user]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.firstName) newErrors.firstName = "First Name is required";
        if (!formData.lastName) newErrors.lastName = "Last Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.department) newErrors.department = "Department is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSave(formData); // Pass the complete formData object
            setFormData({ firstName: '', lastName: '', email: '', department: '' }); // Clear the form
            setErrors({});
        }
    };

    return (
        <form onSubmit={handleSubmit} className="border rounded p-4 shadow">
            {/* Updated input fields */}
            <div className="mb-4">
                <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">First Name:</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="border rounded w-full py-2 px-3" />
                {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Last Name:</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="border rounded w-full py-2 px-3" />
                {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border rounded w-full py-2 px-3" />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="department" className="block text-gray-700 font-bold mb-2">Department:</label>
                <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} className="border rounded w-full py-2 px-3" />
                {errors.department && <p className="text-red-500">{errors.department}</p>}
            </div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                {user ? 'Update' : 'Save'}
            </button>
            <button type="button" onClick={onCancel} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Cancel
            </button>
        </form>
    );
};

export default UserForm;