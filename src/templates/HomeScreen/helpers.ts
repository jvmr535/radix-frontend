import { ISensorPeriodAverageResponse } from "@/types/interfaces";

export const checkIfSersorDataIsValid = (
  data: ISensorPeriodAverageResponse[],
): boolean => {
  return data.some((item) => item.value !== 0);
};
