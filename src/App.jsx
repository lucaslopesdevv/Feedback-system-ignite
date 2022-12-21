import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className="wrapper"></div>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Lucas Fabricio Lopes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Id placeat earum veniam itaque accusamus assumenda libero cupiditate illo doloremque 
            obcaecati rerum, saepe maxime provident illum recusandae hic, voluptate molestias vero."
          />
          <Post
            author="Raquel Ferreira Fabricio Lopes"
            content="Testando isso aqui"
          />
        </main>
      </div>
    </>
  );
}
