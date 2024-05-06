import { useRef } from "react";
import PropTypes from "prop-types";

export default function SearchBar({
  value,
  onSearchChange,
  onImmediateChange,
}: any): JSX.Element {
  const debounce: any = useRef(null);

  function handleSearchChange(e: any) {
    const searchValue = e.target.value;
    onImmediateChange(searchValue);

    if (debounce.current) {
      clearTimeout(debounce.current);
    }

    debounce.current = setTimeout(() => {
      onSearchChange(searchValue);
    }, 500);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={handleSearchChange}
      />
    </div>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onImmediateChange: PropTypes.func.isRequired,
};
