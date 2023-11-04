import { SERVER_AXIOS } from "./config";

//get request
export const GET_METHOD = async (apiUrl, header) =>
  await SERVER_AXIOS.get(apiUrl, header);

//get request
export const POST_METHOD = async (apiUrl, data, headers) =>
  await SERVER_AXIOS.post(apiUrl, data, headers);

//get request
export const PUT_METHOD = async (apiUrl, data,headers) =>
  await SERVER_AXIOS.put(apiUrl, data,headers);

//get request
export const PATCH_METHOD = async (apiUrl, data, header) =>
  await SERVER_AXIOS.patch(apiUrl, data, header);

//get request
export const DELETE_METHOD = async (apiUrl) =>
  await SERVER_AXIOS.delete(apiUrl);
