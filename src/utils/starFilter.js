export const starFilter = (arr) => {
    const filteredArr = arr.filter(val=>val.info.avgRating > 4.4);
    return filteredArr;
}