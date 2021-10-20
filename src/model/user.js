function makeUser({ Id }) {
    return function user({
        id = Id.makeId(),
        createdOn = Date.now(),
        name,
        role
    } = {}) {
        if (!Id.isValidId(id)) {
            throw new Error('User must have a valid id.');
        }
        if (name.length < 2) {
            throw new Error("User's name must be longer than 2 characters.")
        }
        return Object.freeze({
            getId: () => id,
            getCreatedOn: () => createdOn,
            getName: () => name,
            getRole: () => role
        });

    };
}

module.exports = makeUser;