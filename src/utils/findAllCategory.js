export const findAllCategory = (arr) => {
    let allCategory = ['all']

    arr.forEach(el => {
        if (allCategory.includes(el.category)) {
            return
        } else {
            allCategory.push(el.category)
        }
    })

    return allCategory
}