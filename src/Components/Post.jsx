import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/ulrichsantos.png"
          />
          <div className={styles.authorInfo}>
            <strong>Ulrich Santos</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de maio as 08:14" dateTime="2022-05-12 08:14:24">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW
        </p>
        <p>Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 jane.design/doctorcare</p>
        <p>#novoprojeto #nlw #rocketseat</p>
      </div>
    </article>
  )
}
