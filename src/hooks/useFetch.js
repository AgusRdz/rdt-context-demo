import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (
  url,
  options = {
    headers: {},
    params: {},
    method: 'GET',
    body: null,
    dependencies: []
  }
) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [value, setValue] = useState(null)
  const { headers, params, method, body, dependencies } = options

  useEffect(() => {
    let ignore = false
    const source = axios.CancelToken.source()

    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await axios({
          url,
          headers,
          params,
          method,
          body,
          cancelToken: source.token
        })

        setValue(res.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    if (!ignore) {
      fetchData()
    }

    return () => {
      source.cancel()
      ignore = true
    }
  }, dependencies)

  return { value, loading, error }
}

export default useFetch
