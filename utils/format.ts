import "intl";
import "intl/locale-data/jsonp/en";

export const formatMoney = (amount: string) => {
  const formatType = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
    maximumSignificantDigits: 12,
  });

  const currency = formatType.format(parseInt(amount) || 0);

  return currency.replace("NGN", "\u20A6");
};
