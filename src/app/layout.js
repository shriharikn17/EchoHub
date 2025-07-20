// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         {/* Add navbar here */}
        <main>{children}</main>
         {/* Optional */}
      </body>
    </html>
  );
}
