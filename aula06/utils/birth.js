export function calcYearOfBirth(age) {
    const year = new Date().getFullYear()

    return year - age
}
