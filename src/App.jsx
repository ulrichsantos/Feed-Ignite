import { Post } from './Components/Post'
import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Ulrich Santos"
            content="
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores praesentium incidunt doloremque totam, cupiditate at nemo accusantium quod necessitatibus eius consectetur et expedita, ipsam libero quo id alias fugit? Illo!"
          />
        </main>
      </div>
    </div>
  )
}
