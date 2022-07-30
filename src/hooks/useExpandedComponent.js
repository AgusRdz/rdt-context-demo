import { useContext } from 'react'
import { ExpandedComponentContext } from 'contexts/ExpandedComponentProvider'

const useExpandedComponent = () => {
  const context = useContext(ExpandedComponentContext)

  if (context === undefined) {
    throw new Error(
      'useExpandedComponent must be used within a ExpandedComponentProvider'
    )
  }

  return context
}

export default useExpandedComponent
