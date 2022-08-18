import { Box } from 'components/Box';
import { Profile } from './Profile/Profile';
import profileData from 'data.json';
import { Statistics } from './Statistics/Statistics';
import statistics from 'statistics.json';

function App() {
  const { username, tag, location, avatar, stats } = profileData;
  return (
    <Box as="main" bg="white">
      <Box as="section">
        <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
      </Box>
      <Box
        as="section"
        bg="white"
        mt={4}
        display="flex"
        flexDirection="column"
        justifyContent="center">
        <Statistics stats={statistics} title="Statistics" />
      </Box>
      <Box
        as="section"
        bg="white"
        mt={4}
        display="flex"
        flexDirection="column"
        justifyContent="center">
        <Statistics stats={statistics} />
      </Box>
    </Box>
  );
}

export default App;
