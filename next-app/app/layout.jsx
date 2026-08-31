import './globals.css';

export const metadata = {
  title: 'J. Geraghty Utilities',
  description: 'Multi-Utility Connections Contractor',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
