import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase/config'

const useDoc = (collection, id) => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  useEffect(() => {

    const getDocAsync = async () => {

      setLoading(true)
      const docRef = doc(db, collection, id)
      const docSnapshot = await getDoc(docRef)

      if(!docSnapshot.exists()) {
        setLoading(false)
        setError('Could not find that document')
      }

      setData({ id: docSnapshot.id, ...docSnapshot.data() })
      setLoading(false)
    }

    getDocAsync()

  }, [id])

  return { data, error, loading }
}

export default useDoc