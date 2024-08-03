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
    <div className="flex flex-col gap-8 w-full items-center">
      <div className="flex gap-2">
        <Input
          placeholder="Equipamento"
          size="lg"
          onChange={handleChange}
          value={equipamentId}
        />
        <Button
          className="bg-primary-500"
          size="lg"
          isLoading={isPending}
          onClick={() => mutate()}
        >
          <Search className="text-white" />
        </Button>
      </div>
      {data && data !== undefined && <BarChart data={data} key="bar-chart" />}
    </div>
  );
}
