import * as reactRouterDom from 'react-router-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import SuperTokens, { SuperTokensWrapper } from 'supertokens-auth-react';
import { SessionAuth } from 'supertokens-auth-react/recipe/session';
import { getSuperTokensRoutesForReactRouterDom } from 'supertokens-auth-react/ui';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { Root } from './components/Root';
import {
  ComponentWrapper,
  PreBuiltUIList,
  SuperTokensConfig,
} from './config/config';
import {
  Dictionary,
  Home,
  Learn,
  List,
  Movie,
  Quiz,
  Settings,
  Subtitles,
  VocabularyLevel,
} from './pages';
import { Lists } from './pages/Lists';
import MoviesAndTV from './pages/MoviesAndTV/MoviesAndTV';
import { QuizMovie } from './pages/QuizMovie';

import './App.css';

// import { ThirdPartyPreBuiltUI } from 'supertokens-auth-react/recipe/thirdparty/prebuiltui';
// import { EmailPasswordPreBuiltUI } from 'supertokens-auth-react/recipe/emailpassword/prebuiltui';

SuperTokens.init(SuperTokensConfig);

function App() {
  return (
    <SuperTokensWrapper>
      <ComponentWrapper>
        <div className='App app-container'>
          <Router>
            <Routes>
              {/* This shows the login UI on "/auth" route */}
              {getSuperTokensRoutesForReactRouterDom(
                reactRouterDom,
                PreBuiltUIList,
              )}
              <Route
                path='/'
                element={
                  /* This protects the "/" route so that it shows
                          <Home /> only if the user is logged in.
                          Else it redirects the user to "/auth" */
                  <SessionAuth>
                    {/* <Home /> */}
                    <Root />
                  </SessionAuth>
                }
              >
                <Route index element={<Home />} />
                <Route path='/lists' element={<Lists />} />
                <Route path='/learn' element={<Learn />} />
                <Route path='/lists/:id' element={<List />} />
                <Route path='/dictionary' element={<Dictionary />} />
                <Route path='/movies-and-tv' element={<MoviesAndTV />} />
                <Route path='/movies-and-tv/:id' element={<Movie />} />
                <Route path='/subtitles' element={<Subtitles />} />
                <Route path='/settings' element={<Settings />} />
                <Route
                  path='/settings/vocabulary-level'
                  element={<VocabularyLevel />}
                />
              </Route>
              <Route path='/quiz' element={<Quiz />} />
              <Route path='/quiz-movie' element={<QuizMovie />} />
            </Routes>
          </Router>
        </div>
      </ComponentWrapper>
    </SuperTokensWrapper>
  );
}

export default App;
