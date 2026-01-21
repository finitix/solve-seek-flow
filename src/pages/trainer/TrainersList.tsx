import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import TrainerCard from "@/components/shared/TrainerCard";
import SearchBar from "@/components/shared/SearchBar";
import { trainers } from "@/data/mockData";

const TrainersList = () => {
  const [filteredTrainers, setFilteredTrainers] = useState(trainers);

  const handleSearch = (query: string, category: string) => {
    let results = trainers;

    if (query) {
      const lowerQuery = query.toLowerCase();
      results = results.filter(
        (t) =>
          t.name.toLowerCase().includes(lowerQuery) ||
          t.skills.some((s) => s.toLowerCase().includes(lowerQuery)) ||
          t.bio.toLowerCase().includes(lowerQuery)
      );
    }

    if (category && category !== "all") {
      results = results.filter((t) => t.skills.includes(category));
    }

    setFilteredTrainers(results);
  };

  return (
    <DashboardLayout userType="user">
      <div className="max-w-4xl mx-auto pb-20 md:pb-0">
        <h1 className="text-2xl font-bold mb-2">Browse Trainers</h1>
        <p className="text-muted-foreground mb-6">Find the perfect expert for your tech problem</p>

        <div className="mb-6">
          <SearchBar onSearch={handleSearch} placeholder="Search trainers by name or skill..." />
        </div>

        <div className="space-y-4">
          {filteredTrainers.length > 0 ? (
            filteredTrainers.map((trainer) => (
              <TrainerCard key={trainer.id} trainer={trainer} />
            ))
          ) : (
            <div className="content-card text-center py-8 text-muted-foreground">
              No trainers found. Try a different search.
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TrainersList;
