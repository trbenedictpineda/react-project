import { useEffect, useState } from "react";

const useApi = (url, method, body) => {

    const [isLoading, setIsLoading] = useState(false)

    const [responseData, setResponseData] = useState()
    const [responseError, setResponseError] = useState()

    useEffect(() => {
        setIsLoading(true)
        try {
            const fetchData = async () => {
                const response = await fetch(url,
                    {
                        method: method,
                        body: JSON.stringify(body),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        }
                    })
                if (response.status < 200 || response.status > 299) {
                    throw response
                }
                const data = await response.json()
                setResponseData(data)
                setIsLoading(false)
            }

            fetchData()
        } catch (error) {
            setResponseError(error)
            setIsLoading(false)
        }

        return () => {
            setIsLoading(false)
        }
    }, [body, method, url])

    return { isLoading, responseData, responseError }
}

export default useApi;