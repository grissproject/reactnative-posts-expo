import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import PostsStack from './src/navigation/PostsStack';
import { ProvidePosts } from './src/hooks/usePosts';

export default function App() {
  return (
    <ProvidePosts>
      <NavigationContainer>
        <PostsStack />
      </NavigationContainer>
    </ProvidePosts>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
