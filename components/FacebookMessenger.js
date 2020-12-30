import ErrorBoundary from './ErrorBoundary'
import { FACEBOOK_PAGE_ID } from '../utils/config'

export const FacebookMessengerHeader = () => {
  // Load Facebook SDK for JavaScript
  return (
    <div suppressHydrationWarning>
      <div id="fb-root" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v9.0'
              });
            };

            (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
          `
        }}
      />
    </div>
  )
}

export const FacebookMessengerChatPlugin = () => {
  // Your Chat Plugin code
  return (
    <div suppressHydrationWarning>
      <ErrorBoundary>
        <div
          className="fb-customerchat"
          attribution="setup_tool"
          page_id={FACEBOOK_PAGE_ID}
          theme_color="#6699cc"
        />
      </ErrorBoundary>
    </div>
  )
}
