import { View } from 'native-base';
import React, { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDown = ({ data, selectValue, pickerValue }) => {
  const [items, setItems] = useState(data);
  const [open, setOpen] = useState(false);
  const [_pickerValue, setPickerValue] = useState(pickerValue);
  const [heightValue, setHeightValue] = useState(10);

  useEffect(() => {
    open ? setHeightValue(270) : setHeightValue(50);
  }, [open]);

  return (
    <View style={{ height: heightValue }}>
      <DropDownPicker
        open={open}
        value={_pickerValue}
        items={items}
        setOpen={setOpen}
        setValue={setPickerValue}
        onChangeValue={value => selectValue(value)}
        setItems={setItems}
        theme="LIGHT"
        multiple={false}
        mode="BADGE"
      />
    </View>
  );
};

export default DropDown;
