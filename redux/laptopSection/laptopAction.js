
export const buying_item = 'buy_laptop'
export const selling_item = "sell_laptop"

export function buyLaptop() {
    return {
        type: buying_item,
        payload: "Extra Information"
    }
}

export function sellLaptop() {
    return {
        type: selling_item,
        payload: "Extra Information"
    }
}