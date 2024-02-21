const webservice = (load, success, fail, data, type, url, timeout = 0) => {
  const formData = new FormData();
  let xhr = new XMLHttpRequest();
  load();
  if (data) {
    formData.append("file", data);
  }

  xhr.open(type, url, true);
  xhr.send(formData);
  xhr.timeout = timeout;

  xhr.onreadystatechange = () => {
    if (xhr.status === 0) {
    } else if (xhr.status === 200) {
      if (xhr.readyState === 4) success();
    } else {
      fail();
    }
  };

  xhr.onerror = (e) => {
    fail(e);
  };

  xhr.ontimeout = (e) => {
    fail(e);
  };

  xhr.onabort = (e) => {
    fail(e);
  };
};

export default webservice;
