import EmailPassword from 'supertokens-auth-react/recipe/emailpassword';
import { EmailPasswordPreBuiltUI } from 'supertokens-auth-react/recipe/emailpassword/prebuiltui';
import Session from 'supertokens-auth-react/recipe/session';
import ThirdParty, {
  Apple,
  Github,
  Google,
  Twitter,
} from 'supertokens-auth-react/recipe/thirdparty';
import { ThirdPartyPreBuiltUI } from 'supertokens-auth-react/recipe/thirdparty/prebuiltui';

export function getApiDomain() {
  const apiPort = import.meta.env.VITE_REACT_APP_API_PORT || 3333;
  const apiUrl =
    import.meta.env.VITE_MOVIE_TONGUE_API_URL || `http://localhost:${apiPort}`;
  return apiUrl;
}

export function getWebsiteDomain() {
  const websitePort = import.meta.env.VITE_REACT_APP_WEBSITE_PORT || 5173;
  const websiteUrl =
    import.meta.env.VITE_MOVIE_TONGUE_FE_URL ||
    `http://localhost:${websitePort}`;
  return websiteUrl;
}

export const SuperTokensConfig = {
  appInfo: {
    appName: 'SuperTokens Demo App',
    apiDomain: getApiDomain(),
    websiteDomain: getWebsiteDomain(),
  },
  // recipeList contains all the modules that you want to
  // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
  recipeList: [
    EmailPassword.init(),
    ThirdParty.init({
      signInAndUpFeature: {
        providers: [Github.init(), Google.init(), Apple.init(), Twitter.init()],
      },
    }),
    Session.init(),
  ],
};

export const recipeDetails = {
  docsLink: 'https://supertokens.com/docs/thirdpartyemailpassword/introduction',
};

export const PreBuiltUIList = [ThirdPartyPreBuiltUI, EmailPasswordPreBuiltUI];

// export const ComponentWrapper = (props: {
//   children: JSX.Element;
// }): JSX.Element => {
//   return props.children;
// };
