import Comment from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/lucaslopesdevv.png"
          />
          <div className={styles.authorInfo}>
            <strong>{props.author}</strong>
            <span>{props.prof}</span>
          </div>
        </div>

        <time title="11 de Maio as 08:13" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉<a href="#"> jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#"> #novoprojeto </a> <a href="#"> #nlw </a>
          <a href="#"> #rocketseat </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment
          comment="Muito bom, parabéns"
          name="Diego Fernandes"
          time="Cerca de 3h atrás"
        />
        <Comment
          comment="Top demais!!"
          name="Gustavo Amaral"
          time="Cerca de 1h atrás"
        />
      </div>
    </article>
  );
}
