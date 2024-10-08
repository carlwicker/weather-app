export function formatEpoch(epoch: number) {
  const date = new Date(epoch * 1000);
  const day = date.toLocaleDateString('en-US', { weekday: 'short' });
  const dayOfMonth = date.toLocaleDateString('en-US', { day: '2-digit' });
  const month = date.toLocaleDateString('en-US', { month: 'short' });

  return `${day}, ${dayOfMonth} ${month}`;
}

export function convertToCelsius(fahrenheit: number) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return Math.round(celsius);
}
