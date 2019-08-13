import { Query } from 'react-apollo';

import CURRENT_USER_QUERY from '../graphql/queries/CurrentUser';
import Auth from '../pages/index';

const ReAuth = props => 
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>
      if (!data.currentUser) {
        return (<Auth />);
      }
      return props.children
    }}
  </Query>

export default ReAuth;
