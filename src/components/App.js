import { Box } from 'components/Box';
import { Profile } from './Profile/Profile';
import profileData from 'data.json';
import { Statistics } from './Statistics/Statistics';
import statistics from 'statistics.json';
import { FriendList } from './FriendList/FriendList';
import friends from 'friends';
import transactions from 'transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

console.log(transactions);

function App() {
  return (
    <Box as="main" bg="white">
      <Box as="section">
        <Profile
          username={profileData.username}
          tag={profileData.tag}
          location={profileData.location}
          avatar={profileData.avatar}
          stats={profileData.stats}
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
      <Box>
        <FriendList friends={friends}></FriendList>
      </Box>
      <Box>{/*<TransactionHistory transactions={transactions} />*/}</Box>
    </Box>
  );
}

export default App;
