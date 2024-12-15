import React, {useState} from 'react';

const withSearch = OriginalComponent => {
  const NewComponent = () => {
    const [value, setValue] = useState('');

    return (
      <OriginalComponent
        placeholder={'Search'}
        value={value}
        setValue={e => setValue(e)}
      />
    );
  };
  return NewComponent;
};

export default withSearch;
