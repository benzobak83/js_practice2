export { postData, getJson };

const postData = async (url, data) => {
  //оптравляем запрос на сервер для отправки формы

  let res = await fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });
  return await res.text();
};

const getJson = async (url, data) => {
  //отправляем запрос на сервер для получения json

  let res = await fetch(url);

  if (!res.ok) throw new Error(`${url} dont loaded, error: ${res.status}`);

  return res.json();
};
