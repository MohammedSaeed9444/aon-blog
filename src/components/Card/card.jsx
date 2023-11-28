import Link from "next/link";
import styles from "./card.module.css";
import dayjs from "dayjs";

export const Card = ({ blog }) => {
    return (
      <div>
        <div className={styles.imgCa}>
          <img src={blog.photo_url} alt={blog.title} className={styles.img} />
        </div>
        <div className={styles.cardDe}>
          <div className={styles.titel}>{blog.title}</div>
          <div className={styles.subTitel}>{blog.category}</div>
          <div className={styles.descr}>
            <Link href={`/app/article/${blog.id}`}>Read Article</Link>
            <div className={styles.data}>{dayjs(blog.created_at).format("YYYY , MMM DD")}</div>
          </div>
        </div>
      </div>
    )
   
  };