interface ICustomButtonProps {
  text: string;
  icon: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
}

export default ICustomButtonProps;
