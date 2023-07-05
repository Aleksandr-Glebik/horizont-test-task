export const filterPhotoCategory = (str, arr) => {
    switch (str) {
        case '':
            return arr
        case 'all':
            return arr
        case str:
            return arr.filter(item => item.category === str)
        default:
            break;
    }

    return arr
}