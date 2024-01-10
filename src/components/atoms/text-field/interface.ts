interface ITextField {
  label?: string;
  name: string;
  placeholder: string;
  multiline: boolean;
  onPress: boolean;
}

interface IFormValues {
  [key: string]: string;
}
