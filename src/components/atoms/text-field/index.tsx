import { Pressable, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

import { useFormikContext } from 'formik';
import { isDarkTheme } from '../../../utilities/get-theme';
import BottomSheet from '../bottom-sheet';
import SelectorOptions from '../selector-options';
import { categories } from '../../organisms/home-blog/utils/constants';
import { styles } from './styles';

const TextField = ({ label, name, onPress, ...props }: ITextField) => {
  const { handleChange, handleBlur, values, errors, touched } =
    useFormikContext<IFormValues>();

  const [isSelectorOptionsVisible, setIsSelectorOptionsVisible] =
    useState(false);

  const onSelectValueFromOptions = (selectedCategory: string) => {
    if (isSelectorOptionsVisible) {
      handleChange(name)(selectedCategory);
      setIsSelectorOptionsVisible(false);
    }
  };

  const gettingSelector = () => {
    return !values[name] ? '#9ca9c4' : isDarkTheme() ? '#fff' : '#708090';
  };

  return (
    <>
      <View style={styles.inputHandler}>
        <View style={styles.labelView}>
          <Text style={styles.lableTitle}>{label}</Text>
        </View>
        <Pressable
          onPress={() => {
            setIsSelectorOptionsVisible(onPress ? true : false);
          }}
          style={[
            styles.inputContainer,

            {
              backgroundColor: isDarkTheme() ? 'transparent' : '#fcfdff',
              borderColor: isDarkTheme() ? '#fff' : '#e2efff',
            },
          ]}
        >
          {onPress ? (
            <Text style={[styles.selector, { color: gettingSelector() }]}>
              {values[name] || 'Category'}
            </Text>
          ) : (
            <TextInput
              style={isDarkTheme() ? styles.inputDarkColor : styles.inputColor}
              onChangeText={handleChange(name)}
              onBlur={handleBlur(name)}
              value={values[name]}
              editable={onPress}
              placeholderTextColor={'#9ca9c4'}
              {...props}
            />
          )}
        </Pressable>
        {touched[name] && errors[name] && (
          <Text style={styles.error}>{errors[name]}</Text>
        )}
      </View>

      {/* for showing selector option */}
      <BottomSheet
        modalVisible={isSelectorOptionsVisible}
        onRequestClose={() => setIsSelectorOptionsVisible(false)}
      >
        <SelectorOptions
          options={categories}
          onSelectValue={onSelectValueFromOptions}
        />
      </BottomSheet>
    </>
  );
};

export default TextField;
