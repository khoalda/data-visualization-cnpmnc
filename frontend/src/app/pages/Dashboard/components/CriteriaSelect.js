import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

export const CriteriaSelect = ({ criteria, setCriteria }) => {
  const criteriaList = [
    {
      name: 'Death',
      value: 'death',
    },
    {
      name: 'Confirmed',
      value: 'confirmed',
    },
    {
      name: 'Recovered',
      value: 'recover',
    },
  ];

  const handleChange = (event) => {
    setCriteria(event.target.value);
  };

  return (
    <FormControl variant='outlined' style={{ minWidth: 120 }}>
      <InputLabel>Criteria</InputLabel>
      <Select value={criteria} label='Criteria' onChange={handleChange}>
        {criteriaList.map((criterium) => (
          <MenuItem value={criterium.value} key={criterium.value}>
            {criterium.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
