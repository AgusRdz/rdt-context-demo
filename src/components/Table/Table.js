import { Fragment } from 'react'
import PropTypes from 'prop-types'
import DataTable from 'react-data-table-component'

const customStyles = {
  headCells: {
    style: {
      backgroundColor: 'rgba(249, 250, 251, 1)',
      textTransform: 'uppercase',
      color: 'rgba(107, 114, 128, 1))',
      letterSpacing: '0.05em',
      fontSize: '0.75rem',
      fontWeight: '500',
      lineHeight: '1rem'
    }
  },
  cells: {
    style: {
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      overflowX: 'unset'
    }
  },
  subHeader: {
    style: {
      backgroundColor: 'rgba(249, 250, 251, 1)',
      textTransform: 'uppercase',
      color: 'rgba(107, 114, 128, 1))',
      padding: 16
    }
  }
}

const Table = ({
  columns,
  data,
  expandableRows,
  expandableRowsComponent,
  onChangePage,
  paginationTotalRows,
  onChangeRowsPerPage,
  loading,
  name,
  paginationPerPage,
  sortServer,
  onSort,
  defaultSortAsc,
  defaultSortFieldId,
  paginationServer,
  subHeader,
  subHeaderComponent,
  fixedHeader,
  emptyMessage,
  noRowsPerPage,
  pagination
}) => {
  return (
    <div
      id={`table-${name}`}
      data-testid={`table-${name}`}
      className="my-5 pb-1 mb-12 shadow border-b border-gray-200"
    >
      <DataTable
        striped
        columns={columns}
        data={data}
        responsive
        expandableRows={expandableRows}
        expandableRowsComponent={expandableRowsComponent}
        noHeader
        customStyles={customStyles}
        pagination={pagination}
        paginationServer={paginationServer}
        paginationTotalRows={paginationTotalRows}
        onChangePage={onChangePage}
        onChangeRowsPerPage={onChangeRowsPerPage}
        progressPending={loading}
        progressComponent={<div>Loading...</div>}
        paginationPerPage={paginationPerPage}
        sortServer={sortServer}
        onSort={onSort}
        defaultSortFieldId={defaultSortFieldId}
        defaultSortAsc={defaultSortAsc}
        subHeader={subHeader}
        subHeaderComponent={subHeaderComponent}
        fixedHeader={fixedHeader}
        noDataComponent={<div className="p-6">{emptyMessage}</div>}
        paginationComponentOptions={{ noRowsPerPage }}
      />
    </div>
  )
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  expandableRows: PropTypes.bool,
  expandableRowsComponent: PropTypes.func,
  onChangePage: PropTypes.func,
  paginationTotalRows: PropTypes.number,
  onChangeRowsPerPage: PropTypes.func,
  loading: PropTypes.bool,
  name: PropTypes.string.isRequired,
  paginationPerPage: PropTypes.number,
  sortServer: PropTypes.bool,
  onSort: PropTypes.func,
  defaultSortAsc: PropTypes.bool,
  defaultSortFieldId: PropTypes.string,
  paginationServer: PropTypes.bool,
  subHeader: PropTypes.bool,
  subHeaderComponent: PropTypes.object,
  fixedHeader: PropTypes.bool,
  emptyMessage: PropTypes.string,
  noRowsPerPage: PropTypes.bool
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  expandableRows: PropTypes.bool,
  expandableRowsComponent: PropTypes.func,
  onChangePage: PropTypes.func,
  paginationTotalRows: PropTypes.number,
  onChangeRowsPerPage: PropTypes.func,
  loading: PropTypes.bool,
  name: PropTypes.string.isRequired,
  paginationPerPage: PropTypes.number,
  sortServer: PropTypes.bool,
  onSort: PropTypes.func,
  defaultSortAsc: PropTypes.bool,
  defaultSortFieldId: PropTypes.string,
  paginationServer: PropTypes.bool,
  subHeader: PropTypes.bool,
  subHeaderComponent: PropTypes.object,
  fixedHeader: PropTypes.bool,
  emptyMessage: PropTypes.string,
  noRowsPerPage: PropTypes.bool,
  pagination: PropTypes.bool
}

Table.defaultProps = {
  columns: [],
  data: [],
  expandableRows: false,
  expandableRowsComponent: () => <Fragment />,
  onChangePage: () => {},
  paginationTotalRows: 0,
  onChangeRowsPerPage: () => {},
  loading: false,
  paginationPerPage: 10,
  sortServer: false,
  onSort: () => {},
  defaultSortAsc: true,
  defaultSortFieldId: null,
  paginationServer: false,
  subHeader: false,
  subHeaderComponent: <Fragment />,
  fixedHeader: false,
  emptyMessage: 'There are no records to display',
  noRowsPerPage: false,
  pagination: false
}

Table.displayName = 'Table'

export default Table
