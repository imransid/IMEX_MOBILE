import React, {useState} from 'react';
import {Input} from 'native-base';

const InputBox = ({data, OnFocus, val}) => {
  const [value, setValue] = useState(val ? val : '');

  const handleChange = text => setValue(text);

  return (
    <Input
      type="text"
      value={value}
      editable={data[2].includes('ID') ? false : true}
      //onChangeText={e => OnTextChange(data[0], e)}
      onBlur={() => OnFocus(data[0], value)}
      onChangeText={handleChange}
      defaultValue={val.toString()}
      variant={data[2].includes('ID') ? 'filled' : 'outline'}
      placeholder={val.toString() !== '' ? '' : data[2]}
    />
  );
};

export default InputBox;
