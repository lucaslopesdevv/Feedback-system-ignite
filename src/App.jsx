import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/lucaslopesdevv.png",
      name: "Lucas Fabricio Lopes",
      role: "Front-End Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa π" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π",
      },

      { type: "link", content: "πjane.design/doctorcare" },
    ],

    publishedAt: new Date("2022-12-31 19:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @RocketSeat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa π" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π",
      },

      { type: "link", content: "πjane.design/doctorcare" },
    ],

    publishedAt: new Date("2022-12-31 21:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className="wrapper"></div>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
