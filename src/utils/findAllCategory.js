export const findAllCategory = (arr) => {
    let allCategory = []

    arr.forEach(el => {
        if (allCategory.includes(el.category)) {
            return
        } else {
            allCategory.push(el.category)
        }
    })

    return allCategory
}