import { SafeAreaView } from "react-native";
import React from "react";

import Header from "../../../components/molecules/header";
import BlogDetail from "../../../components/molecules/blog-detail";
import { styles } from "./styles";
import { isDarkTheme } from "../../../utilities/get-theme";
import { ParamListBase, useRoute } from "@react-navigation/native";

const Detail = () => {
  const { params } = useRoute<ParamListBase | any>();

  return (
    <SafeAreaView style={[styles.detailContainer, { backgroundColor: isDarkTheme() ? '#000' : "#fff" }]}>
      <Header back={true} />
      <BlogDetail {...params} />
    </SafeAreaView>
  );
};

export default Detail;
