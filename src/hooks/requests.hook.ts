import { useMutation, UseMutationResult } from "@tanstack/react-query";
import api from "@/clients/api.client";
import { ISensorPeriodAverageResponse } from "@/types/interfaces";

export const useGetSensorAveragesDataLazyQuery = (
  equipmentId: string,
): UseMutationResult<ISensorPeriodAverageResponse[], Error, void, unknown> => {
  const fetchSensorData = async (): Promise<ISensorPeriodAverageResponse[]> => {
    const response = await api.get<ISensorPeriodAverageResponse[]>(`/sensor`, {
      params: {
        equipmentId,
      },
    });
    return response.data;
  };

  return useMutation({ mutationFn: fetchSensorData });
};
