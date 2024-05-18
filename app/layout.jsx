import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';
import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';

export const metadata = {
  title: 'ChatGPT Propmpts',
  decription:
    'The ChatGPT model is a large language model trained by OpenAI that is capable of generating human-like text',
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(options);
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main"></div>
          <main className="app">
            <Nav session={session} />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
