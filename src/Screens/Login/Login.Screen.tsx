import React, { type FC } from 'react';
// import type { SubmitHandler } from 'react-hook-form';
// import { Controller, useForm } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';
// import Spinner from 'react-native-loading-spinner-overlay';
import Feather from 'react-native-vector-icons/Feather';
// import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';

import Header from '../../Components/Header/Header';

import styles from './style';

// interface ISignInFormDataProps {
//   mobile: string;
//   password: string;
// }

// yup validation
// const {
//   control,
//   handleSubmit,
//   formState: { errors }
// } = useForm({
//   resolver: yupResolver(mobileSignInFormValidation),
//   defaultValues: {
//     mobile: '',
//     password: ''
//   }
// });

const Login: FC = () => {
  // const dispatch = useDispatch();

  // const { isInternetReachable, isCellularConnection } = useNetworkStatus();

  // const loading = useSelector((state: RootState) => state.users.user.isLoading);

  const navigation = useNavigation();
  // const [mobile, setMobile] = useState<string>('');
  // const [password, setPassword] = useState<string>('');

  // const handleSignIn: SubmitHandler<ISignInFormDataProps> = (
  //   formData: ISignInFormDataProps
  // ): any => {
  //   // navigation.navigate('MedicineDoses' as never);
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

  const handleGuestLogin: any = () => {
    navigation.navigate('MedicineDoses' as never);
  };

  const handleCreateAccount: any = () => {
    navigation.navigate('CreateAccount' as never);
  };

  const handleForgotPassword: any = () => {
    navigation.navigate('ForgotPassword' as never);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainHeader}>
        <Header mainHeader="Log In" />
      </View>
      <View style={styles.subHeaderFirstLine}>
        <Header subHeader="Log in to access your personalized" />
      </View>
      <View style={styles.subHeaderSecondLine}>
        <Header subHeader="Medinest experience" />
      </View>

      {/* <Spinner visible={loading} textContent={'Loading...'} /> */}

      <View style={styles.textInputComponentsPosition}>
        <View style={styles.mobileNumberInput}>
          <Text style={styles.inputHeader}>Mobile Number</Text>
          {/* <Controller
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, value } }) => (
              <CustomTextInput
                type="mobile"
                value={mobile}
                onChangeText={setMobile}
                placeholder="Enter your mobile number..."
                maxLength={11}
                inputStyle={errors.email != null ? styles.textInputErrorTxt : styles.inputText}
                leftIcon={<Feather name="smartphone" size={30} color={'#888888'} />} // Left icon
              />
            )}
            name="mobile"
          /> */}
          {/* {errors.mobile != null && <Text style={styles.errorTxt}>{errors.mobile.message}</Text>} */}
        </View>
        <View style={styles.passwordInput}>
          <Text style={styles.inputHeader}>Password</Text>

          {/* <Controller
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, value } }) => (
              <CustomTextInput
                type="password"
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password..."
                maxLength={8}
                inputStyle={errors.password != null ? styles.textInputErrorTxt : styles.inputText}
                isPassword={true}
                leftIcon={
                  <MaterialCommunityIcons name="lock-outline" size={30} color={'#888888'} />
                }
              />
            )}
            name="password"
          /> */}
          {/* {errors.password != null && (
            <Text style={styles.errorTxt}>{errors.password.message}</Text>
          )} */}
        </View>
      </View>

      <View style={styles.signInButtonPosition}>
        {/* <CustomButton
          onPress={() => {
            void handleSubmit(handleSignIn)();
          }}
          icon={<AntDesign name="arrowright" size={30} color={colors.white} />}
          text="Sign In"
        /> */}
      </View>

      <View style={styles.orPartPosition}>
        <View style={styles.orPart}>
          <View style={styles.orHorizontalLine}></View>
          <Text style={styles.orText}>or</Text>
          <View style={styles.orHorizontalLine}></View>
        </View>
      </View>

      <View style={styles.guestButtonPosition}>
        <TouchableOpacity style={styles.guestButton} onPress={handleGuestLogin}>
          <Feather name="user" size={30} color={'#888888'} />
          <Text style={styles.guestButtonText}>Continue as guest</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.askAboutAccount}>
        <Text style={styles.askAboutAccountText}>Don’t have an account? {'  '}</Text>
        <TouchableOpacity onPress={handleCreateAccount}>
          <Text style={styles.signUpText}>Create Account</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
