// import "./globals.css";

// export const metadata = {
//   title: "CodeWinX IT Solutions",
//   description:
//     "CodeWinX IT Solutions provides professional website and software development services.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }
import "./globals.css";

export const metadata = {
  title: {
    default: "CodeWinX IT Solutions",
    template: "%s | CodeWinX",
  },

  description:
    "CodeWinX IT Solutions provides website development, software development, MERN stack applications and SEO services.",

  keywords: [
    "Website Development",
    "Software Development",
    "MERN",
    "Next.js",
    "SEO Services",
    "CodeWinX"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {children}

      </body>
    </html>
  );
}