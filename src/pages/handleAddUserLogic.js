export const handleAddUserLogic = async (newUser, users) => {
    const maxId = users.reduce((max, user) => Math.max(max, user.id), 0);
    const nextId = maxId + 1;

    const newUserWithMockData = {
        ...newUser,
        id: nextId,
    };

    return [...users, newUserWithMockData];
};

