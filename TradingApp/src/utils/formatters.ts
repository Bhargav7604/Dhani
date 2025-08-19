export const formatCurrency = (amount: number, currency = '₹'): string => {
  const absAmount = Math.abs(amount);
  const sign = amount < 0 ? '-' : '';
  
  if (absAmount >= 10000000) {
    return `${sign}${currency}${(absAmount / 10000000).toFixed(2)}Cr`;
  } else if (absAmount >= 100000) {
    return `${sign}${currency}${(absAmount / 100000).toFixed(2)}L`;
  } else if (absAmount >= 1000) {
    return `${sign}${currency}${(absAmount / 1000).toFixed(2)}K`;
  } else {
    return `${sign}${currency}${absAmount.toFixed(2)}`;
  }
};

export const formatPercentage = (value: number, decimals = 2): string => {
  return `${value.toFixed(decimals)}%`;
};

export const formatNumber = (value: number, decimals = 2): string => {
  return value.toLocaleString('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

export const formatDate = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatTime = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const formatDateTime = (date: string | Date): string => {
  return `${formatDate(date)} ${formatTime(date)}`;
};

export const formatCompactNumber = (value: number): string => {
  if (value >= 1000000000) {
    return (value / 1000000000).toFixed(1) + 'B';
  } else if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + 'M';
  } else if (value >= 1000) {
    return (value / 1000).toFixed(1) + 'K';
  } else {
    return value.toString();
  }
};