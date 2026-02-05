import { useState, useEffect } from "react";

export function useFetch(url) {
  let [post, setpost] = useState({});
  let [load, setload] = useState(true);
  async function getpost() {
    setload(true);
    const pt = await fetch(url);
    const data = await pt.json();
    setpost(data);
    setload(false);
  }
  useEffect(() => {
    getpost();
  }, [url]);

  useEffect(function () {
    const time = setInterval(getpost(), 10 * 1000);
    return clearInterval(time);
  }, []);

  return {
    post,
    load,
  };
}
