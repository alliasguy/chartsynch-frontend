export const formatCurrency = (amount) => {
    if (amount === undefined || amount === null) return '0';
    return Math.ceil(amount).toLocaleString();
};
