interface TotalPriceProps {
  price: number;
  isInstallment: boolean;
  months?: number;
  discount?: number;
}

const totalPrice = ({
  price,
  isInstallment,
  discount = 0,
  months = 0,
}: TotalPriceProps) => {
  if (isInstallment && !months) {
    throw new Error('Months are required if there is an installment plan');
  }

  if (!discount && !isInstallment) {
    return price;
  }

  if (!discount && isInstallment && months) {
    return price / months;
  }

  const discountedPrice = price - (price * discount) / 100;

  if (discount && !isInstallment) {
    return discountedPrice;
  }

  return discountedPrice / months;
};
