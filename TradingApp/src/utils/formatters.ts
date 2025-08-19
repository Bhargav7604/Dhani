export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(amount);
};

export const formatNumber = (num: number): string => {
  const absNum = Math.abs(num);
  if (absNum >= 1e7) return `${(num / 1e7).toFixed(2)} Cr`;
  if (absNum >= 1e5) return `${(num / 1e5).toFixed(2)} L`;
  if (absNum >= 1e3) return `${(num / 1e3).toFixed(2)} K`;
  return num.toLocaleString('en-IN');
};

export const formatTime = (hour: number, minute: number): string => {
  const hourInt = parseInt(hour.toString(), 10);
  const minuteStr = minute.toString().padStart(2, '0');
  const period = hourInt > 11 ? 'PM' : 'AM';
  const formattedHour = hourInt % 12 === 0 ? 12 : hourInt % 12;
  return `${formattedHour}:${minuteStr} ${period}`;
};

export const formatDate = (timestamp: number): string => {
  return new Date(timestamp).toLocaleDateString('en-IN');
};

export const getStatusColor = (status: string): string => {
  switch (status.toLowerCase()) {
    case 'live': return '#4CAF50';
    case 'active': return '#2196F3';
    case 'paused': return '#FF9800';
    case 'error': return '#F44336';
    case 'exit': return '#9C27B0';
    default: return '#757575';
  }
};