export const deepCopy = (obj: any): any => {
    let result = {};
    Object.keys(obj).forEach((key) => {
        const value = obj[key];
        if(value != '' || value != null)  result[key] = value;
    });
    return result;
}