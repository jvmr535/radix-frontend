import BarChart from "@/components/BarChart";
import { useGetSensorAveragesDataLazyQuery } from "@/hooks/requests.hook";
import { Button, Input } from "@nextui-org/react";
import { Search } from "lucide-react";
import { useState } from "react";

export default function HomeScreen(): JSX.Element {
  const [equipamentId, setEquipamentId] = useState<string>("");

  const { data, isPending, mutate } =
    useGetSensorAveragesDataLazyQuery(equipamentId);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEquipamentId(event.target.value);
  };

  return (
    <div className="flex flex-col gap-8 w-full items-center px-4 md:px-8">
      <div className="flex flex-col md:flex-row gap-4 md:gap-2 w-full max-w-md items-center">
        <Input
          placeholder="Equipamento"
          size="lg"
          onChange={handleChange}
          value={equipamentId}
          className="flex-1 w-full md:w-auto"
        />
        <Button
          className="bg-primary-500 w-full md:w-auto"
          size="lg"
          isLoading={isPending}
          onClick={() => mutate()}
        >
          <Search className="text-white" />
        </Button>
      </div>

      {data && data !== undefined && (
        <div className="w-full max-w-3xl">
          <BarChart data={data} key="bar-chart" />
        </div>
      )}
    </div>
  );
}
