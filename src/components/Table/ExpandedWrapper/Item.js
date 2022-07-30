import PropTypes from 'prop-types'

const Item = ({ label, children }) => {
  return (
    <div className="flex">
      <div className="max-w-max my-2 ml-16 font-semibold">
        <span>{label}</span>
      </div>
      <div className="max-w-max my-2 ml-4">
        <span>{children}</span>
      </div>
    </div>
  )
}

Item.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.node
}

Item.defaultProps = {
  label: 'label',
  children: null
}

export default Item
