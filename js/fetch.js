const getData = (onSuccess, onError) => {
  fetch('https://24.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    });
    .catch (() => {
  onError();
};
};

const sendData = (onSuccess, onError, data) => {
  fetch('https://24.javascript.pages.academy/kekstagram/data',
    {
      method: 'POST',
      data,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError;
      }
    })
}
  .catch (() => {
  onError();
};
};


export { getData, sendData };
