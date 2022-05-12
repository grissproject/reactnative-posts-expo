import React from 'react';
import { FlatList } from 'react-native';
import _ from 'lodash';
import PostListItem from './PostListItem';

const PostsList = ({ posts }) => {
  const sorted = _.sortBy(posts, (post) => !post.favorite);

  const renderItem = ({ item }) => <PostListItem post={item} />;

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={sorted}
      renderItem={renderItem}
    />
  );
};

export default PostsList;
