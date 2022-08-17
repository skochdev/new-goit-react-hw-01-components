import { Box } from 'components/Box';
import { Profile } from './Profile/Profile';
import profileData from 'data.json';

function App() {
  const { username, tag, location, avatar, stats } = profileData;
  return (
    <Box as="main" bg="white" color="accent">
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
    </Box>
  );
}

export default App;
