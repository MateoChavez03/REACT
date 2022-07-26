const createOrder = (name, gmail, phoneNumber, cart, total) => {
    return {
        buyer: {
            name: name,
            gmail: gmail,
            phoneNumber: phoneNumber
        },
        items: cart,
        total: total,
        createdAt: new Date().toLocaleString(),
    }
}

export default createOrder;