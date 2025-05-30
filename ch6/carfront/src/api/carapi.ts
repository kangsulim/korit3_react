import axios, { AxiosRequestConfig } from "axios";
import { Car, CarResponse, CarEntry } from "../types";

const getAxiosConfig = (): AxiosRequestConfig => {
  const token = sessionStorage.getItem('jwt');

  return {
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json',
    }
  }
}

export const getCars = async (): Promise<CarResponse[]> => {
  
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/cars`, getAxiosConfig()); // getAxiosConfig() <- 함수의 결과를 반환, getAxiosConfig 함수 자체를 반환

  return response.data._embedded.cars;
}

export const deleteCar = async (link: string): Promise<CarResponse> => {
  const response = await axios.delete(link, getAxiosConfig());

  return response.data;
}

export const addCar = async (car: Car): Promise<CarResponse> => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/cars`, car, getAxiosConfig());

  return response.data;
}

export const updateCar = async (carEntry: CarEntry) : Promise<CarResponse> => {
  const response = await axios.put(carEntry.url, carEntry.car, getAxiosConfig());

  return response.data;
}