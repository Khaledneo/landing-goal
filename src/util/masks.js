import createNumberMask from "text-mask-addons/dist/createNumberMask";

export const numberMask = createNumberMask({
    prefix: "",
    integerLimit: 9,
    thousandsSeparatorSymbol: ","
});

export const dollarNumberMask = createNumberMask({
    prefix: "$",
    integerLimit: 9,
    thousandsSeparatorSymbol: ","
  });

export const initialDepositNumberMask = createNumberMask({
    prefix: "$",
    integerLimit: 7,
    thousandsSeparatorSymbol: ","
  });