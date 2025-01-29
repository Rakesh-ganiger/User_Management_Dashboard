export const handleDeleteUserLogic = async (id, users) => {
    return users.filter((user) => user.id !== id);
};