import { MultiSelect } from "@/components/ui/MultiSelect";
import { Cat, Dog, Fish, Rabbit, Turtle } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState<string[]>([]);
  const scienceList = [
    { value: "education", label: "Education 🎓" },
    { value: "science", label: "Yeeeah, science! 🧪" },
    { value: "art", label: "Art 🎭" },
    { value: "sport", label: "Sport ⚽" },
    { value: "games", label: "Games 🎮" },
    { value: "health", label: "Health 🏥" },
  ];

  return (
    <div className="container bg-slate-50 min-h-screen p-4">
      <div className="flex flex-col items-center justify-center h-screen">
        <MultiSelect
          className="w-80 md:w-96"
          options={scienceList}
          onValueChange={setValue}
          defaultValue={value}
          placeholder="Science"
          animation={2}
          maxCount={3}
        />
      </div>
    </div>
  );
}
