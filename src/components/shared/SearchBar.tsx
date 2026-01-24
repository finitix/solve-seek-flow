import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/mockData";

interface SearchBarProps {
  onSearch: (query: string, category: string) => void;
  placeholder?: string;
}

const SearchBar = ({ onSearch, placeholder = "Search problems, solutions, or trainers..." }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = () => {
    onSearch(query, selectedCategory);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setQuery("");
    setSelectedCategory("all");
    onSearch("", "all");
  };

  return (
    <div className="space-y-3">
      <div className={`relative transition-all duration-200 ${isFocused ? 'scale-[1.01]' : ''}`}>
        <div className={`flex items-center gap-2 sm:gap-3 bg-card rounded-xl border transition-all duration-200 p-1.5 sm:p-2 ${
          isFocused 
            ? 'border-primary shadow-md' 
            : 'border-border hover:border-primary/40'
        }`}>
          <div className="flex-1 flex items-center gap-2 sm:gap-3 pl-2 sm:pl-3">
            <Search size={18} className={`transition-colors flex-shrink-0 ${isFocused ? 'text-primary' : 'text-muted-foreground'}`} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={placeholder}
              className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground py-2 sm:py-2.5 text-sm sm:text-base font-medium min-w-0"
            />
            {query && (
              <button
                onClick={clearSearch}
                className="p-1 rounded-md hover:bg-muted transition-colors flex-shrink-0"
              >
                <X size={16} className="text-muted-foreground" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowFilters(!showFilters)}
              className={`rounded-lg h-8 w-8 sm:h-9 sm:w-9 transition-colors ${showFilters ? 'bg-primary/10 text-primary' : ''}`}
            >
              <SlidersHorizontal size={16} />
            </Button>
            <Button onClick={handleSearch} className="rounded-lg px-3 sm:px-5 h-8 sm:h-9 text-sm">
              <span className="hidden sm:inline">Search</span>
              <Search size={16} className="sm:hidden" />
            </Button>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className={`overflow-hidden transition-all duration-200 ${showFilters ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              selectedCategory === "all"
                ? "gradient-bg text-white"
                : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "gradient-bg text-white"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
