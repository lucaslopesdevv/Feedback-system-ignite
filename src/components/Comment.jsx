import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export default function Comment(props) {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/lucaslopesdevv.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{props.name}</strong>
              <time title="11 de Maio as 08:13" dateTime="2022-05-11 08:13:30">
                {props.time}
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{props.comment}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Curtir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
