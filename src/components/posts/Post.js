import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ListItem } from '@rneui/base';
import useUser from '../../hooks/useUser';
import useComments from '../../hooks/useComments';

const Post = ({ post }) => {
  const { user } = useUser(post.userId);
  const { comments } = useComments(post.id);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.postContainer}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.body}>{post.body}</Text>
      </View>

      <View style={styles.userContainer}>
        {user && (
          <>
            <Text style={styles.username}>{user.name}</Text>
            <Text style={styles.userdata}>{user.email}</Text>
            <Text style={styles.userdata}>{user.phone}</Text>
            <Text style={styles.userdata}>{user.website}</Text>
          </>
        )}
      </View>

      <View style={styles.commentsContainer}>
        <Text style={styles.commentsTitle}>Comments</Text>
        {comments && comments.map((comment) => (
          <ListItem key={comment.id} bottomDivider>
            <ListItem.Content>
              <ListItem.Subtitle>{comment.body}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </ScrollView>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  body: {
    color: '#333',
  },
  postContainer: {
    marginBottom: 16,
  },
  userContainer: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 32,
  },
  username: {
    fontSize: 16,
    fontWeight: '500',
  },
  userdata: {
    color: '#555',
  },
  commentsContainer: {
    marginTop: 16,
  },
  commentsTitle: {
    fontSize: 18,
  },
});
