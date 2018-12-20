export const validateGoalsInput = (inputState) => {
    const {
        age,
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

export const renderErrorMessage = (initialInvestment,recurringInvestment) =>{
    const minimumInitialInvestment=5000;
    const minimumRecurringInvestment=3000;

    let message="";
    if(recurringInvestment<0){
      message="Reduce initial deposit amount. Exceeds recommended range for your goal.";
    }else if(initialInvestment<minimumInitialInvestment){
      message="Below SmartWealth minimum initial deposit limit of $5,000.";
    }else if(recurringInvestment<minimumRecurringInvestment){
      message="Below SmartWealth minimum additional deposit limit of $3,000.";
    }
    return message;
}

export const isEqual = (obj1,obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2) ? true : false;
};

export const addCommaToNumber = (value) => {
	return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


