import { API_ENDPOINTS } from "../configs/constants";
import { sendRequest } from "./../services/apiService";

export const fetchMakes = () =>
  sendRequest(API_ENDPOINTS.makes.url, API_ENDPOINTS.makes.method);

export const fetchModels = (make) =>
  sendRequest(API_ENDPOINTS.models.url, API_ENDPOINTS.models.method, { make });

export const fetchVehicles = ( make, model ) => sendRequest(API_ENDPOINTS.vehicles.url, API_ENDPOINTS.vehicles.method, 
      make,
      model,
    );


export const filterItems = (item, searchText) =>
  item.match(new RegExp(searchText, "i"));

export const filterVehicles = (item, searchText) =>
  Object.values(item).some((value) =>
    String(value).match(new RegExp(searchText, "i"))
  );
