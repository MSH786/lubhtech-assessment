interface IForm {
  validationSchema: any;
  initialValues: IFormValues;
  fields: IFields[];
  buttonTitle: string;
  onSubmit: (values: IFormValues) => void;
  isLoading?: boolean;
}

interface IFields {
  label?: string;
  name: string;
  placeholder: string;
  multiline?: boolean;
  selector?: boolean;
}
