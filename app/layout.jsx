import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';

export const metadata = {
  title: 'ChatGPT Propmpts',
  decription:
    'The ChatGPT model is a large language model trained by OpenAI that is capable of generating human-like text',
  icons: {
    icon: '/favicon.ico',
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main"></div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
