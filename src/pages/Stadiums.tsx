import StadiumCard from "@/components/stadiums/StadiumCard";
import stadiums from "@lib/stadiums.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Wave from "@/components/Wave";

const tabs = [
  { name: "All", value: "all" },
  { name: "Morocco", value: "morocco" },
  { name: "Spain", value: "spain" },
  { name: "Portugal", value: "portugal" },
];

const Stadiums = () => {
  return (
    <div className="w-full flex justify-center bg-gray-50 relative pb-[100px]">
      <Tabs defaultValue="all" className="max-w-7xl w-full flex flex-col p-2">
        <TabsList className="w-[300px] mx-auto">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <div className="gap-2 p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {stadiums
                .filter(
                  (stadium) =>
                    tab.value === "all" ||
                    stadium.country.toLowerCase() === tab.value
                )
                .map((stadium) => (
                  <StadiumCard key={stadium.id} stadium={stadium} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <Wave />
    </div>
  );
};

export default Stadiums;
