import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';

import HomeBlog from '../../../components/organisms/home-blog';
import Header from '../../../components/molecules/header';
import { isDarkTheme } from '../../../utilities/get-theme';
import useGetUserId from '../../../utilities/hooks/use-get-user-id';
import {
  addWelcomeStaus,
  isWelcomeStatusExist,
} from '../../../utilities/helpers/user-profile';
import ModalView from '../../../components/molecules/modal';
import { styles } from './styles';

const Home = () => {
  const { username, email } = useSelector(
    (state: IInitialStates) => state.user
  );
  const [isModalVisible, setModalVisible] = useState(false);
  const userId = useGetUserId();

  const toggleModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    updateWelcomeStatus();
  }, [userId]);

  const updateWelcomeStatus = async () => {
    try {
      const querySnapshot = await isWelcomeStatusExist(userId);

      if (querySnapshot!.size > 0) {
        setModalVisible(false); // data is available
      } else {
        setModalVisible(true);
        // Document doesn't exist, add a new one
        await addWelcomeStaus(userId);
        console.log('User welcome status added successfully!');
      }
    } catch (error: any) {
      console.error('Error updating welcome status:', error.message);
    }
  };

  return (
    <SafeAreaView
      style={[
        styles.blogContainer,
        { backgroundColor: isDarkTheme() ? '#000' : '#fff' },
      ]}
    >
      <ModalView onRequestClose={toggleModal} isModalVisible={isModalVisible} />
      <Header title={username || email} setting={true} />
      <HomeBlog />
    </SafeAreaView>
  );
};

export default Home;
