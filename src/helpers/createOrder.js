const createOrder = (name, surname, gmail, phoneNumber, cart, total) => {
    return {
        buyer: {
            name: name,
            surname: surname,
            gmail: gmail,
            phoneNumber: phoneNumber
        },
        items: cart,
        total: total,
        createdAt: new Date().toLocaleString(),
        state: "generated"
    }
}

export default createOrder;