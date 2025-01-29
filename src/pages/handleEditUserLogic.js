export const handleEditUserLogic = async (updatedUser, users) => {
    return users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
    );
};


