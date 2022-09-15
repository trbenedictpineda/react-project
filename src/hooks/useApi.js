import { useCallback, useState } from "react";

const useApi = (url, method, body) => {

    const [isLoading, setIsLoading] = useState(false)

    const [responseData, setResponseData] = useState()
    const [responseError, setResponseError] = useState()

    const sendRequest = useCallback(async () => {
        setIsLoading(true)
        try {
            const response = await fetch(url,
                {
                    method: method,
                    body: JSON.stringify(body),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                })
            const data = await response.json()    
            if (!response.ok) {
                throw data
            }
            setResponseData(data)
            setIsLoading(false)
        } catch (error) {
            setResponseError(error.message)
            setIsLoading(false)
        }
    }, [body, method, url])

    return { isLoading, responseData, responseError, sendRequest }
}

export default useApi;