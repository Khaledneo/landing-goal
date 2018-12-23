export const cashOption={
	description:"Cash",
	name:"Cash",
	percentage:0.015,
	summary:"A marginal cash balance is kept in your account to deduct any advisory and third party fees."
};

export const dropDownStyle = {
    container: (provider, state) => ({
        ...provider,
        cursor: "pointer",
        display: "inline-block",
        width: "200px",
        marginLeft: "10px"
    }),
    valueContainer: (provider) => ({
        ...provider,
        padding: 0,
        cursor: "pointer"
    }),
    control: (provider, state) => ({
        ...provider,
        borderColor: state.isSelected ? "#333333" : "#333333",
        border: "none",
        boxShadow: "0",
        borderBottom: "2px solid #333333",
        borderRadius: "0px"
    }),
    indicatorSeparator: () => ({
        display: "none"
    }),
    option: (provided,state) => ({
      ...provided,
      fontSize: "20px",
      cursor: "pointer",
      borderBottom: '1px solid black',
      backgroundColor: state.isSelected ? '#2179ee' : 'white',
      color:  state.isSelected ?  "white" : "#333333",
      padding: 10,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return { ...provided, opacity,color: "#333333", transition };
    }
};