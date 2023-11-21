// Create an adapter function to format order data
export const createAdaptedOrder = (userData, cart, total) => {
    const formattedOrder = {
        buyer: {
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email
        },
        items: cart,
        total
        };
        return formattedOrder;
    };