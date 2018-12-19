export const validateGoalsInput = (inputState) => {
    console.log("called");
    const {
        age,
        reason,
        horizon,
        amount
    } = inputState;
    if (!age || age > 99 || age < 18) {
        return {
            errorOccurred: true,
            errorMessage: "Age must be between 18 and 99 years"
        };
    }
    if (!horizon || horizon > 30 || horizon < 5) {
        return {
            errorOccurred: true,
            errorMessage: "Horizon must be between 5 and 30 years"
        };
    }
    if (amount < 5000) {
        return {
            errorOccurred: true,
            errorMessage: "Amount should be more than $5000"
        };

    } else if (amount > 999999999) {
        return {
            errorOccurred: true,
            errorMessage: "Amount should be less than $1,000,000,000"
        };
    };
    return {
        errorOccurred: false
    }
};

export const isEqual = (obj1,obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2) ? true : false;
};
