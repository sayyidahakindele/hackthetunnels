import React from 'react';

interface SearchSectionProps {
  onSearch: (program: string) => void; // Function to call with the search term
  searchValue: string; // Current value of the input
  setSearchValue: (value: string) => void; // Function to update the input value
}

const SearchSection: React.FC<SearchSectionProps> = ({ onSearch, searchValue, setSearchValue }) => {
  const handleSearch = () => {
    onSearch(searchValue); // Call the search function with the current input value
  };

  return (
    <div className="SearchSection">
      <input
        type="text"
        placeholder="Search by program"
        value={searchValue} // Controlled input
        onChange={(e) => setSearchValue(e.target.value)} // Update state on input change
      />
      <button onClick={handleSearch}>Search</button> {/* Trigger the search on click */}
    </div>
  );
};

export default SearchSection;
