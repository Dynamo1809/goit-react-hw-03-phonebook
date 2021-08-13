import './Filter.scss';

const Filter = ({ onChange, filter }) => {
  return (
    <label className="Filter__label">
      Find contacts by name:<br></br><input
        className="Filter__input"
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </label> 
  );
};

export default Filter;