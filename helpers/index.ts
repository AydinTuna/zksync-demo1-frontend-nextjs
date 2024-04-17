export const toJSON = (object: any): string => {
    return JSON.stringify(object, (key, value) => {
        if (typeof value === "bigint") {
            return value.toString(); // Convert BigInt to string
        }
        return value;
    });
}
