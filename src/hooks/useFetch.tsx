import { useState } from "react";
import { apiKey } from "../keys";

export function useFetch() {
  const [img, setImg] = useState<any[]>([]);
  const [spinner, setSpinner] = useState<boolean>(false);

  const request: any = (url: string, options: {}) => {
    setSpinner(true);
    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setImg(data);
      })
      .finally(() => {
        setSpinner(false);
      });
  };

  const deleteImg = (url: string) => {
    const options = {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
      },
    };

    fetch(url, options);
  };

  return { request, deleteImg, img, spinner };
}
