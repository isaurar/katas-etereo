export const kata1 = number =>
    String(number)
        .split('')
        .sort()
        .reverse()
        .join('');
