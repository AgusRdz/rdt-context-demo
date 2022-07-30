import PropTypes from 'prop-types'
import { Item, ExpandedWrapper } from 'components/Table'
import {
  getFormattedCurrencies,
  getFormattedLanguages,
  getMaps
} from 'utils/countries'
import useExpandedComponent from 'hooks/useExpandedComponent'

const ExpandedCountriesComponent = ({ data }) => {
  const { onMapClick } = useExpandedComponent()
  const {
    region,
    subregion,
    currencies,
    languages,
    population,
    timezones,
    tld,
    maps
  } = data

  return (
    <ExpandedWrapper>
      <Item label="Region">{region}</Item>
      <Item label="Subregion">{subregion}</Item>
      <Item label="Currencies">
        <ul className="p-0 m-0 text-left list-none">
          {getFormattedCurrencies(currencies)}
        </ul>
      </Item>
      <Item label="Languages">
        <ul className="p-0 m-0 text-left list-none">
          {getFormattedLanguages(languages)}
        </ul>
      </Item>
      <Item label="Population">{population}</Item>
      <Item label="Timezones">
        <ul className="p-0 m-0 text-left list-none">
          {timezones?.map((timezone) => {
            return <li key={timezone}>{timezone}</li>
          })}
        </ul>
      </Item>
      <Item label="TLD">
        <ul className="p-0 m-0 text-left list-none">
          {tld?.map((tld) => {
            return <li key={tld}>{tld}</li>
          })}
        </ul>
      </Item>
      <Item label="Maps">
        <ul className="p-0 m-0 text-left list-none">
          {getMaps(maps).map(({ name, url }) => {
            return (
              <li key={name}>
                <span
                  className="underline cursor-pointer text-blue-600 visited:text-purple-500"
                  href={url}
                  onClick={onMapClick(url)}
                >
                  {name}
                </span>
              </li>
            )
          })}
        </ul>
      </Item>
    </ExpandedWrapper>
  )
}

ExpandedCountriesComponent.propTypes = {
  data: PropTypes.object
}

ExpandedCountriesComponent.defaultProps = {
  data: {}
}

export default ExpandedCountriesComponent
