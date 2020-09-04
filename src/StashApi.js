import { useEffect, useState } from "react";
import axios from "axios";

export default function StashApi(query) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [hasError, setHasError] = useState(true);

  function isIterable(obj) {
    if (obj == null) {
      return false;
    }
    return typeof obj[Symbol.iterator] === "function";
  }

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios({
      method: "GET",
      url: query,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        isIterable(res.data.values) &&
          setData((prevData) => {
            setHasError(false);
            return [...prevData, ...res.data.values];
          });
        setHasMore(res.data.values.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setData([]);
        console.log("ERR");
        setHasError(true);
      });
    return () => cancel();
  }, [query]);
  return { loading, data, hasMore, hasError };
}
