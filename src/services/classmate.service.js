import { apiRequest } from './api.service';

export const getClassmates = async () => apiRequest('/classmates');

export const getClassmate = async (classmateId) => apiRequest(`/classmates/${classmateId}`, 'GET');

export const createClassmate = async (classmateInfos) => apiRequest('/classmates', 'POST', { classmate: classmateInfos });

export const editClassmate = async (classmateInfos) => apiRequest(`/classmates/${classmateInfos.id}`, 'PUT', { classmate: classmateInfos });

export const deleteClassmate = async (classmateId) => apiRequest(`/classmates/${classmateId}`, 'DELETE');
