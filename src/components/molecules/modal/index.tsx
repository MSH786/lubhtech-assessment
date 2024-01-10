import { Modal, View, Text } from 'react-native';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../atoms/button';
import { style } from './styles';

const ModalView = ({ onRequestClose, isModalVisible }: IModal) => {
  const { t } = useTranslation();
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={isModalVisible}
      onRequestClose={onRequestClose}
    >
      <View style={style.modalContainer}>
        <View style={style.modalContent}>
          <Text style={style.welcomeText}>
            {t('common:welcome_to_our_app')}
          </Text>
          <Text style={style.modalDescription}>{t('common:we_thrilled')}</Text>
          <Button
            title={t('common:close')}
            onPress={onRequestClose}
            width={'40%'}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalView;
