import React, { useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon } from '@rneui/base';
import Post from '../components/posts/Post';
import usePost from '../hooks/usePost';

const PostScreen = ({ route, navigation }) => {
  const { post, toggleFavorite, remove } = usePost(route.params.postId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#30c64e' },
      headerRight: () => (
        <View style={styles.headerButtonsContainer}>
          <Button
            icon={<Icon name={post.favorite ? 'star' : 'star-outline'} color="white" />}
            onPress={toggleFavorite}
            type="clear"
          />
          <Button
            icon={<Icon name="delete-outline" color="white" />}
            onPress={() => { remove(); navigation.goBack(); }}
            type="clear"
          />
        </View>
      ),
    });
  }, [navigation, post]);

  return (
    <View>
      <Post post={post} />
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  headerButtonsContainer: {
    flexDirection: 'row',
  }
});
