export const plans = [
  {
    planName: 'Starter',
    isRecommended: false,
    price: [
      {
        planDuration: 'Monthly',
        currency: 'Euro',
        amount: '15,99',
      },
      {
        planDuration: 'Yearly',
        currency: 'USD',
        amount: '119,88',
      },
    ],
    features: [
      {
        name: 'KI-Empfehlungen',
        isValid: false,
        validityDuration: null,
      },
      {
        name: 'Automatisierungen',
        isValid: false,
        validityDuration: null,
      },
      {
        name: 'Online Meetings',
        isValid: false,
        validityDuration: null,
      },
      {
        name: 'Transkribierungen',
        isValid: true,
        validityDuration: '320 min',
      },
      {
        name: 'Timeboxing',
        isValid: false,
        validityDuration: null,
      },
      {
        name: 'Integrationen',
        isValid: false,
        validityDuration: null,
      },
    ],
  },
  {
    planName: 'Business',
    isRecommended: true,
    price: [
      {
        planDuration: 'Monthly',
        currency: 'USD',
        amount: '25,99',
      },
      {
        planDuration: 'Yearly',
        currency: 'Euro',
        amount: '239,88',
      },
    ],
    features: [
      {
        name: 'KI-Empfehlungen',
        isValid: true,
        validityDuration: null,
      },
      {
        name: 'Automatisierungen',
        isValid: true,
        validityDuration: null,
      },
      {
        name: 'Online Meetings',
        isValid: true,
        validityDuration: null,
      },
      {
        name: 'Transkribierungen',
        isValid: true,
        validityDuration: '1500 min',
      },
      {
        name: 'Timeboxing',
        isValid: true,
        validityDuration: null,
      },
      {
        name: 'Integrationen',
        isValid: false,
        validityDuration: null,
      },
    ],
  },
  {
    planName: 'Expert',
    isRecommended: false,
    price: [
      {
        planDuration: 'Monthly',
        currency: 'USD',
        amount: '39,99',
      },
      {
        planDuration: 'Yearly',
        currency: 'Euro',
        amount: '359,88',
      },
    ],
    features: [
      {
        name: 'KI-Empfehlungen',
        isValid: true,
        validityDuration: null,
      },
      {
        name: 'Automatisierungen',
        isValid: true,
        validityDuration: null,
      },
      {
        name: 'Online Meetings',
        isValid: true,
        validityDuration: null,
      },
      {
        name: 'Transkribierungen',
        isValid: true,
        validityDuration: '6200 min',
      },
      {
        name: 'Timeboxing',
        isValid: true,
        validityDuration: null,
      },
      {
        name: 'Integrationen',
        isValid: true,
        validityDuration: null,
      },
    ],
  },
];

export const features = [
  'KI-Empfehlungen',
  'Automatisierungen',
  'Online Meetings',
  'Transkribierungen',
  'Timeboxing',
  'Integrationen',
];

const calculateDiscount=(monthlyPrice: number, yearlyPrice: number): number=> {
  const monthlyTotal = monthlyPrice * 12;
  return ((monthlyTotal - yearlyPrice) / yearlyPrice) * 100;
}

export const calculateDiscountPercent = (
  yearlyPriceStr: string,
  monthlyPriceStr: string
) => {
  if (monthlyPriceStr && yearlyPriceStr) {
    const monthlyPrice = parseFloat(monthlyPriceStr.replace(',', '.'));
    const yearlyPrice = parseFloat(yearlyPriceStr.replace(',', '.'));

    const discount = calculateDiscount(monthlyPrice, yearlyPrice);
    return `${discount.toFixed(1)}`;
  }
};
