import AuthPageTabStyles from '../styles/AuthPageTabStyles';

const AuthPageTabs = ({ toggleAuthPage, page }) => (
  <AuthPageTabStyles page={page}>
    <div id="tab-headers">
      <div
        id="signup-tab"
        className="tab"
        data-name="signup"
        onClick={toggleAuthPage}
      >
        Sign Up
      </div>
      <div
        id="login-tab"
        className="tab"
        data-name="signin"
        onClick={toggleAuthPage}
      >
        Log In
      </div>
    </div>
  </AuthPageTabStyles>
)

export default AuthPageTabs;
