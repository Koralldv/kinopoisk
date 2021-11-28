export const getPagesArray = (getPageCount) => {
    const result = []
    for (let i = 0; i < getPageCount; i++) {
        result.push(i+1)
    }
    return result;
}