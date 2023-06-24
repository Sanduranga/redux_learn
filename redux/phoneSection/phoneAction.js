
export const buying_item = "buy_phone"
export const selling_item = "sell_phone"

export function buyPhone() {
    return {
        type: buying_item,
        payload: "Extra Information"
    }
}

export function sellPhone() {
    return {
        type: selling_item,
        payload: "Extra Information"
    }
}