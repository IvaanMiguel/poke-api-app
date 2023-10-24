/**
 * @param {String} url 
 */
export const getIdFromUrl = url => url.match(/\/(\d+)\/$/)[1]

/**
 * @param {Array} strings 
 * @param {String} languageCode
 */
export const getLocalizedString = (strings, languageCode = 'en') => {
  return strings.find(str => str.language.name === languageCode)
}
