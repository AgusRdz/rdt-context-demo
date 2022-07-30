import PropTypes from 'prop-types'

const ExpandedWrapper = ({ children }) => {
  return <div className="grid text-sm mr-4">{children}</div>
}

ExpandedWrapper.propTypes = {
  children: PropTypes.node
}

ExpandedWrapper.defaultProps = {
  children: null
}

export default ExpandedWrapper
