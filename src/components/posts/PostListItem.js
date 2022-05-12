import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ListItem, Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const PostListItem = ({ post }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Post', { postId: post.id })}>
      <ListItem key={post.id} bottomDivider>
        {post.favorite && <Icon name="star" />}
        <ListItem.Content>
          <ListItem.Title>{post.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
  );
};

export default (PostListItem);
