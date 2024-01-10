import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../atoms/button';
import BottomSheet from '../../atoms/bottom-sheet';
import { styles } from './styles';
import Form from '../form';
import { CompleteProfileFields } from './utils/constant';
import { completeProfileValidationSchema } from '../form/utils/validation-schema';
import useGetUserId from '../../../utilities/hooks/use-get-user-id';
import { createUserProfile, getUserProfile } from '../../../utilities/helpers/user-profile';

const CompleteProfileForm = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [profileData, setProfileData] = useState<IUserProfile>()
  const userId = useGetUserId();
  const { t } = useTranslation();

  useEffect(() => {
    onMount()
  }, [userId])

  const onMount = async () => {
    const profile: IUserProfile | undefined = await getUserProfile(userId)
    setProfileData(profile);
  }

  const onSubmit = async (values: IFormValues) => {
    const blogPayload = {
      ...values,
      user_id: userId,
    } as IUserProfile;

    await createUserProfile(blogPayload);
    setModalVisible(false)
  };

  return (
    <>
      <View style={styles.buttonContainer}>
        <Button
          title={profileData?.age || profileData?.bio ? t('common:update_profile') : t('common:complete_profile')}
          onPress={() => setModalVisible(true)}
        />
      </View>
      <BottomSheet
        onRequestClose={() => setModalVisible(false)}
        modalVisible={modalVisible}
      >
        <View style={styles.bottomSheetContainer}>
          <Form
            initialValues={{
              age: profileData?.age || '', bio: profileData?.bio || ''
            }}
            buttonTitle='Submit'
            fields={CompleteProfileFields}
            validationSchema={completeProfileValidationSchema}
            onSubmit={onSubmit}
          />
        </View>
      </BottomSheet>
    </>
  );
};

export default CompleteProfileForm;
