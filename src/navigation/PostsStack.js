import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostsScreen from '../screens/PostsScreen';
import PostScreen from '../screens/PostScreen';

const Stack = createNativeStackNavigator();

const PostsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Posts"
      component={PostsScreen}
      options={{}}
    />
    <Stack.Screen
      name="Post"
      component={PostScreen}
      options={{}}
    />
  </Stack.Navigator>
);

export default PostsStack;
