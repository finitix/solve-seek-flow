import { useState } from "react";
import { motion } from "framer-motion";
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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div className={`relative transition-all duration-300 ${isFocused ? 'scale-[1.02]' : ''}`}>
        <motion.div 
          className={`flex items-center gap-3 bg-card rounded-2xl border-2 transition-all duration-300 p-2 ${
            isFocused 
              ? 'border-primary shadow-lg shadow-primary/20' 
              : 'border-border hover:border-primary/50'
          }`}
        >
          <div className="flex-1 flex items-center gap-3 pl-4">
            <Search size={22} className={`transition-colors ${isFocused ? 'text-primary' : 'text-muted-foreground'}`} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={placeholder}
              className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground py-3 font-medium"
            />
            {query && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileTap={{ scale: 0.9 }}
                onClick={clearSearch}
                className="p-1.5 rounded-full hover:bg-muted transition-colors"
              >
                <X size={18} className="text-muted-foreground" />
              </motion.button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowFilters(!showFilters)}
              className={`rounded-xl transition-colors ${showFilters ? 'bg-primary/10 text-primary' : ''}`}
            >
              <SlidersHorizontal size={20} />
            </Button>
            <Button onClick={handleSearch} className="rounded-xl px-6">
              Search
            </Button>
          </div>
        </motion.div>

        {/* Glow effect */}
        {isFocused && (
          <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/20 blur-xl opacity-50" />
        )}
      </div>

      {/* Category Filters */}
      <motion.div
        initial={false}
        animate={{ 
          height: showFilters ? "auto" : 0,
          opacity: showFilters ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="flex flex-wrap gap-2 pt-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              selectedCategory === "all"
                ? "gradient-bg text-white shadow-lg shadow-primary/30"
                : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
            }`}
          >
            All Categories
          </motion.button>
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            
            return (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isSelected
                    ? "gradient-bg text-white shadow-lg shadow-primary/30"
                    : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SearchBar;
