/** Hook for API calls
 *  pass API endpoint
 * useage: const { loading, data, errors} = useApi(`${import.meta.env.VITE_STRANGERS_THINGS_BASE_API}/2305-FTB-MT-WEB-PT/posts`)
  );
 */

import React, { useEffect, useState } from "react";

export const useApi = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);

  const fetchApi = () => {
    try {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setLoading(false);
          setData(json);
        });
    } catch (errors) {
      setErrors(errors);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return { loading, data, errors };
};
export default useApi;
