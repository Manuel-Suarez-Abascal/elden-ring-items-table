/**
 * Capitalize the first letter of a string
 * @param {String} - string to capitalize
 * @returns {String} - capitalized string
 */
const upperCaseFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1)

export { upperCaseFirstLetter }
