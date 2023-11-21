export const createAdaptedCategory = (doc) => {
    const fields = doc.data();

    return {
        id: doc.id,
        name: fields.name,
        slug: fields.slug,
        // Add any other properties from the category document as needed
    };
};
