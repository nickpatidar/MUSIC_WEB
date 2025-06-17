import adminModel from '../models/admin.model.js';

export const createAdmin = async ({
    firstname, lastname, email, password
}) => {
    if(!firstname || !email || !password){
        throw new Error('All fields are required');
    }
    const admin = await adminModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    });

    return admin;
};