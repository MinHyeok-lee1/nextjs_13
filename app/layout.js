import styles from "../styles/layout.module.css";
export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>LOL</title>
      </head>
      <body>
        <div className={styles.header}>From Layout</div>
        {children}
      </body>
    </html>
  );
}
