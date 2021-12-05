import React from 'react';
import Select from 'react-select';
function MultiSelect(props) {
  const options = props.multi
    ? [{ label: 'Select All', value: 'all' }, ...props.options]
    : props.options;
  return (
    <div className={`react-select-wrapper ${props.multi ? 'multi' : ''}`}>
      <Select
        name='example'
        options={options}
        isMulti={props.multi}
        value={props.value ? props.value : null}
        onChange={(selected) => {
          props.multi &&
          selected.length &&
          selected.find((option) => option.value === 'all')
            ? props.handleChange(options.slice(1))
            : !props.multi
            ? props.handleChange((selected && selected.value) || null)
            : props.handleChange(selected);
        }}
      />
    </div>
  );
}

export default MultiSelect;
