/**
 * @param {String} url 
 */
export const getIdFromUrl = url => url.match(/\/(\d+)\/$/)[1]

/**
 * @param {Array} strings 
 * @param {String} languageCode
 */
export const getLocalizedString = (strings, languageCode = 'en') => {
  return strings?.find(str => str.language.name === languageCode)
}

/**
 * 
 * @param {String} str
 */
export const formatName = str => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
