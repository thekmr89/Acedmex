export const validateName = {
    rules: {
        required: 'Enter Name',
        minLength: {
            value: 3,
            message: 'Minimum 3 characters',
        },
        maxLength: {
            value: 20,
            message: 'Maximum 20 characters',
        },
    },
};


export const validateContact = {
    rules: {
        pattern: {
            value: /^[0-9]{10}$/,
            message: 'Invalid Number',
        },
        required: 'Enter Contact',
    },
};


export const validateEmail = {
    rules: {
        required: 'Enter Email',
        pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Invalid email address',
        },
    },
};

export const validateSelectboxstate = {
    rules: {
        required: 'Please select a state',
    },
};

export const validateSelectboxdistrict = {
    rules: {
        required: 'Please select District',
    },
};

