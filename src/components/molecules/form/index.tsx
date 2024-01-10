import React from 'react';
import { Formik } from 'formik';

import TextField from '../../atoms/text-field';
import Button from '../../atoms/button';

const Form = ({
  validationSchema,
  initialValues,
  fields,
  buttonTitle,
  onSubmit,
  isLoading,
}: IForm) => {
  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ handleSubmit }) => (
          <>
            {fields?.map((item: IFields) => (
              <>
                <TextField
                  label={item?.label}
                  name={item?.name}
                  placeholder={item?.placeholder}
                  multiline={item?.multiline || false}
                  onPress={item?.selector!}
                />
              </>
            ))}
            <Button
              title={buttonTitle}
              onPress={handleSubmit}
              isLoading={isLoading}
            />
          </>
        )}
      </Formik>
    </>
  );
};

export default Form;
