import { createContext } from 'react'
import PropTypes from 'prop-types'

const ExpandedComponentContext = createContext()

// eslint-disable-next-line react/prop-types
const ExpandedComponentProvider = ({ children, ...rest }) => {
  return (
    <ExpandedComponentContext.Provider value={{ ...rest }}>
      {children}
    </ExpandedComponentContext.Provider>
  )
}

ExpandedComponentContext.propTypes = {
  children: PropTypes.node.isRequired
}

export { ExpandedComponentProvider, ExpandedComponentContext }
