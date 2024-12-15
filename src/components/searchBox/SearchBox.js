import * as React from 'react';
import {TextInput} from 'react-native-paper';

import withSearchBox from '../HOC/withSearchBox';

const SearchBox = props => {
  const {placeholder, value, setValue} = props;

  return (
    <TextInput
      label={placeholder}
      value={value}
      onChangeText={text => setValue(text)}
      mode="outlined"
    />
  );
};

export default withSearchBox(SearchBox);
