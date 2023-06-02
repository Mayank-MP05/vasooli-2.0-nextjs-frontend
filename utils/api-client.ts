import axios from "axios";
import logger, { logTypeEnums } from "./logger";

// FIXME: It should be coming from dot env
const BASE_URL: string = `http://localhost:8000`;

// TYPE-DEC:
type APIClientParamsTypes = {
  route: string;
  method: string;
  payload: any;
  headers: any;
  successFn: Function;
  errorFn: Function;
  finallyFn: Function;
};

const APIClient = ({
  route,
  method,
  payload,
  headers,
  successFn,
  errorFn,
  finallyFn,
}: APIClientParamsTypes) => {
  logger({
    logType: logTypeEnums.INFO,
    msg: `APIClient route: ${route}`,
  });
  const fullUrl: string = `${BASE_URL}${route}`;
  const axiosInstance = axios.create({
    method,
    url: fullUrl,
  });

  console.log(axiosInstance);

  let requestPromise: any;
  if (method === "GET") {
    requestPromise = axios.get(fullUrl);
  } else if (method === "POST") {
    requestPromise = axios.post(fullUrl, payload);
  } else if (method === "PUT") {
    requestPromise = axios.put(fullUrl, payload);
  } else if (method === "DELETE") {
    requestPromise = axios.delete(fullUrl);
  }

  requestPromise
    .then((res: any) => {
      logger({
        logType: logTypeEnums.RES,
        msg: res,
      });
      successFn(res);
    })
    .catch((err: any) => {
      logger({
        logType: logTypeEnums.ERR,
        msg: err,
      });
      errorFn(err);
    })
    .finally(() => {
      logger({
        logType: logTypeEnums.ERR,
        msg: "/route finally",
      });
      finallyFn();
    });
};

export default APIClient;
