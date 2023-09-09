import '../styles/globals.scss';
// include styles from the ui package
import 'ui/styles.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  console.log(1);

  return (
    <html lang='en' className='bg-zinc-900'>
      <body>{children}</body>
    </html>
  );
}
