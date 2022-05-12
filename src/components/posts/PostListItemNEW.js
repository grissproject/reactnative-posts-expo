import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PostListItem = ({ post }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.favorite}>*</Text>
      <View style={styles.content}>
        <Text>{post.title}</Text>
        <Text> &gt; </Text>
      </View>
    </View>
  );
};

export default PostListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 16,
    paddingRight: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  favorite: {
    width: 48,
  }
});
