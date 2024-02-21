export const DOWNLOAD_MASK = {
  type: "GET",
  port: 9002,
  url: "/webservice/mask/download/panorama-diagnosis.tiff",
};

export const UPLOAD_MASK = {
  type: "POST",
  port: 9002,
  url: "/webservice/mask/upload",
};

export const START_UPDATE = {
  type: "POST",
  port: 8080,
  url: "/v1/update/upload",
};

export const FINISH_UPDATE = {
  type: "POST",
  port: 8080,
  url: "/v1/update/finish",
};

export const PING = {
  type: "GET",
  port: 9002,
  url: "/ping",
};
