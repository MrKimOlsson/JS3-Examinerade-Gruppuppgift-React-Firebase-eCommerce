import { useEffect, useState, useRef } from "react"

export const useFetch = (url, options) => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const _options = useRef(options)

  useEffect(() => {

    const controller = new AbortController()
    const fetchData = async () => {
      setLoading(true)

      try {
        const res = await fetch(url, {
          ..._options,
          signal: controller.signal
        })
        console.log(res)
        if (!res.ok) {
          throw new Error(res.status, res.statusText)
        }
        const _data = await res.json()

        setLoading(false)
        setData(_data)
        setError(null)
      }
      catch (err) {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')

        }
        else {
          setError('cant fetch the data')
          console.error(err.message)
          setLoading(false)
        }
      }
    }
    fetchData()

    return () => {
      controller.abort()
    }

  }, [url, _options])

  return { data, loading, error }
}


export const useFetchAmount = (url, options, amount) => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const _options = useRef(options)

  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {

      setLoading(true)
      // setData(null)
      try {
        const res = await fetch(url, {
          ..._options,
          signal: controller.signal
        })
        console.log(res)
        if (!res.ok) {
          throw new Error(res.status, res.statusText)
        }
        const _data = await res.json()
        const limitedProducts = _data.slice(0, amount)

        setLoading(false)
        setData(limitedProducts)
        setError(null)
      }
      catch (err) {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        }
        else {
          setError('cant fetch the data')
          console.error(err.message)
          setLoading(false)
        }
      }

    }
    fetchData()

    return () => {
      controller.abort()
    }

  }, [url, _options, amount])


  return { data, loading, error }
}






export const useFetchByID = (url, options) => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const _options = useRef(options)

  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {

      setLoading(true)
      // setData(null)
      try {
        const res = await fetch(url, {
          ..._options,
          signal: controller.signal
        })
        console.log(res)
        if (!res.ok) {
          throw new Error(res.status, res.statusText)
        }
        const _data = await res.json()
        //   const limitedProducts = _data.slice(0, 100)

        setLoading(false)
        setData(_data)
        setError(null)
      }
      catch (err) {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        }
        else {
          setError('cant fetch the data')
          console.error(err.message)
          setLoading(false)
        }
      }

    }
    fetchData()

    return () => {
      controller.abort()
    }

  }, [url, _options])


  return { data, loading, error }
}