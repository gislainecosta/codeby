export const formatPrice = (price:string) => {
    return Number(price)/100
}

export const formatCurrency = (value:number) => {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}