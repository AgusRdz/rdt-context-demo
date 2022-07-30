export const splitCamelCase = (str) => {
  return str.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => {
    return str.toUpperCase()
  })
}

export const getFormattedCurrencies = (currencies = {}) => {
  return Object.values(currencies).map((currency) => {
    const { name, symbol } = currency

    return `${name} (${symbol})`
  })
}

export const getFormattedLanguages = (languages = {}) => {
  return Object.values(languages || {})
}

export const getMaps = (maps = {}) => {
  return Object.entries(maps).map((value) => {
    const [name, url] = [...value]

    return {
      name: splitCamelCase(name).replace('Maps', '').trim(),
      url
    }
  })
}
