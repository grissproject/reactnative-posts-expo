import React, { useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, FAB } from '@rneui/base';
import usePosts from '../hooks/usePosts';
import PostsList from '../components/posts/PostsList';

const PostsScreen = ({ navigation }) => {
  const { posts, reload, removeAll } = usePosts();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#30c64e' },
      headerRight: () => (
        <Button
          icon={<Icon name='autorenew' color="white" />}
          onPress={reload}
          type="clear"
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <PostsList posts={posts} />
      <FAB
        onPress={removeAll}
        icon={{ name: 'delete-forever', color: 'white' }}
        color="darkred"
        placement="right"
      />
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
