import { useRecipeStore } from '../store/recipeStore';

const SearchFilter = () => {
  const { setSearchQuery, setFilterCategory, searchQuery, filterCategory } = useRecipeStore();

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="dessert">Dessert</option>
        <option value="main-course">Main Course</option>
        <option value="appetizer">Appetizer</option>
      </select>
    </div>
  );
};

export default SearchFilter;
