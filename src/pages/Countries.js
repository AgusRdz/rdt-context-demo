import { useCallback, useMemo } from 'react'
import { Table } from 'components/Table'
import { ExpandedComponentProvider } from 'contexts/ExpandedComponentProvider'
import useFetch from 'hooks/useFetch'
import ExpandedCountriesComponent from 'components/Countries/ExpandedCountriesComponent'
import {
  getFormattedCurrencies,
  getFormattedLanguages,
  getMaps
} from 'utils/countries'
import useViewport from 'hooks/useViewport'

const Countries = () => {
  const { width } = useViewport()
  const { loading, value } = useFetch('https://restcountries.com/v3.1/all')

  const handleClick = useCallback(
    (url) => () => {
      window.open(url, '_blank', 'noopener,noreferrer,resizable')
    },
    []
  )

  const columns = useMemo(
    () => [
      {
        name: 'Country',
        id: 'country',
        sortable: true,
        sortField: 'country',
        wrap: true,
        selector: ({ name, flag }) => {
          const { official, common } = name

          return (
            <div className="flex flex-col text-left">
              <strong>
                {flag} {official}
              </strong>
              <small>({common})</small>
            </div>
          )
        }
      },
      {
        name: 'Capital',
        id: 'capital',
        sortable: true,
        sortField: 'capital',
        wrap: true,
        selector: ({ capital }) => capital?.map((value) => value).join(', ')
      },
      {
        name: 'Region',
        id: 'region',
        sortable: true,
        sortField: 'region',
        wrap: true,
        selector: ({ region }) => region,
        hide: 'sm'
      },
      {
        name: 'Subregion',
        id: 'subregion',
        sortable: true,
        sortField: 'subregion',
        wrap: true,
        selector: ({ subregion }) => subregion,
        hide: 'sm'
      },
      {
        name: 'Currencies',
        id: 'currencies',
        wrap: true,
        selector: ({ currencies }) => (
          <ul className="p-0 m-0 text-left list-none">
            {getFormattedCurrencies(currencies)}
          </ul>
        ),
        hide: 'sm'
      },
      {
        name: 'Languages',
        id: 'languages',
        wrap: true,
        selector: ({ languages }) => (
          <ul className="p-0 m-0 text-left list-none">
            {getFormattedLanguages(languages)}
          </ul>
        ),
        hide: 'sm'
      },
      {
        name: 'Population',
        id: 'population',
        sortable: true,
        sortField: 'population',
        wrap: true,
        selector: ({ population }) => population,
        hide: 'sm'
      },
      {
        name: 'timezones',
        id: 'timezones',
        wrap: true,
        selector: ({ timezones }) => {
          return (
            <ul className="p-0 m-0 text-left list-none">
              {timezones?.map((timezone) => {
                return <li key={timezone}>{timezone}</li>
              })}
            </ul>
          )
        },
        hide: 'sm'
      },
      {
        name: 'TLD',
        id: 'tld',
        wrap: true,
        selector: ({ tld }) => {
          const items = tld?.map((tld) => {
            return <li key={tld}>{tld}</li>
          })

          return <ul className="p-0 m-0 text-left list-none">{items}</ul>
        },
        hide: 'sm'
      },
      {
        name: 'maps',
        id: 'maps',
        wrap: true,
        selector: ({ maps }) => {
          const items = getMaps(maps).map(({ name, url }) => {
            return (
              <li key={name}>
                <span
                  className="underline cursor-pointer text-blue-600 visited:text-purple-500"
                  href={url}
                  onClick={handleClick(url)}
                >
                  {name}
                </span>
              </li>
            )
          })

          return <ul className="p-0 m-0 text-left list-none">{items}</ul>
        },
        hide: 'sm'
      }
    ],
    []
  )

  return (
    <ExpandedComponentProvider onMapClick={handleClick}>
      <Table
        name="countries"
        subHeader={false}
        subHeaderComponent={
          <div className="w-full flex flex-col justify-between text-2xl">
            Countries
          </div>
        }
        fixedHeader
        columns={columns}
        data={value || []}
        loading={loading}
        paginationPerPage={10}
        paginationTotalRows={0}
        defaultSortFieldId="name"
        defaultSortAsc={false}
        expandableRows={width === 428}
        expandableRowsComponent={ExpandedCountriesComponent}
        pagination
      />
    </ExpandedComponentProvider>
  )
}

export default Countries
