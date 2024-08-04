import { useMutation, UseMutationResult } from "@tanstack/react-query";
import api from "@/clients/api.client";
import {
  ISensorPeriodAverageResponse,
  ISignInResponse,
} from "@/types/interfaces";

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

export const useSignInMutation = (): UseMutationResult<
  ISignInResponse,
  Error,
  { Username: string; Password: string },
  unknown
> => {
  const signIn = async ({
    Username,
    Password,
  }: {
    Username: string;
    Password: string;
  }): Promise<ISignInResponse> => {
    const response = await api.post<ISignInResponse>("/access/signIn", {
      Username,
      Password,
    });
    return response.data;
  };

  return useMutation({ mutationFn: signIn });
};
