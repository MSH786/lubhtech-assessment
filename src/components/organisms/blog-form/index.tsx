import {View, Text, TouchableOpacity, Alert} from "react-native";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {blogValidationSchema} from "../../molecules/form/utils/validation-schema";
import {BlogInitialValues} from "../../../utilities/initial-values";
import UploadImage from "../../atoms/upload-image";
import Form from "../../molecules/form";
import useImageGallery from "../../../utilities/hooks/use-image-gallery";
import useGetUserId from "../../../utilities/hooks/use-get-user-id";
import {BlogFields} from "./utils";
import {uploadImageOnCloud} from "../../../utilities/upload-image-on-cloud";
import {blogsCreators} from "../../../modules/screen/home/redux/blog.actions";
import {styles} from "./styles";

const BlogForm = ({editDetails, buttonTitle, onPress}: IBlogFormProps) => {
  const [blogImage, setBlogImage] = useState(editDetails?.image || "");

  const {isCreatingBlog} = useSelector(
    (state: IInitialStates) => state.loading
  );
  const {getImageFromGallery} = useImageGallery(setBlogImage);
  const userId = useGetUserId();
  const dispatch = useDispatch();

  const onSubmit = async (values: IFormValues) => {
    const image = await uploadImageOnCloud(blogImage);
    if (!blogImage) {
      Alert.alert("Please select an image");
      return;
    }
    const blogPayload = {
      ...values,
      image: image?.secure_url,
      user_id: userId,
    } as IBlog;

    dispatch(blogsCreators.createBlog(blogPayload));
  };

  return (
    <View style={styles.blogFormContainer}>
      <Text style={styles.blogTitle}>Create Blog</Text>
      <TouchableOpacity onPress={getImageFromGallery}>
        <UploadImage blogImage={blogImage} />
      </TouchableOpacity>
      <Form
        initialValues={editDetails ? editDetails : BlogInitialValues}
        validationSchema={blogValidationSchema}
        buttonTitle={buttonTitle || "Submit"}
        fields={BlogFields}
        onSubmit={(values) =>
          onPress ? onPress({...values, blogImage}) : onSubmit(values)
        }
        isLoading={isCreatingBlog}
      />
    </View>
  );
};

export default BlogForm;
