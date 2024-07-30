import React, { type FC } from 'react';
import { Text, View } from 'react-native';

import Styles from './Styles';

const SignInScreen: FC = () => {
  // // yap validation
  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors }
  // } = useForm({
  //   resolver: yupResolver(mobileSignInFormValidation),
  //   defaultValues: {
  //     email: '',
  //     password: ''
  //   }
  // });

  // const onPressSend: SubmitHandler<ISignInFormData> = (formData: ISignInFormData): any => {
  //   try {
  //     if (!isInternetReachable && !isCellularConnection) {
  //       ToastPopUp('Please Check Internet Connection!..');
  //     } else {
  //       dispatch(getUserAction(formData));
  //     }
  //   } catch (err) {
  //     console.error('error', err);
  //   }
  // };

  return (
    <View style={Styles.container}>
      <Text>Sign IN</Text>
    </View>
  );
};

export default SignInScreen;
