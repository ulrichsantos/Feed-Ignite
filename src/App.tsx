import { Post } from './Components/Post'
import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'

import styles from './App.module.css'

import './global.css'



const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ulrichsantos.png',
      name: 'Ulrich Santos',
      role: 'Web developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-01-01 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/alanvsega.png',
      name: 'Alan Sega',
      role: 'Back End @Magalu'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraaa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-03-01 21:00:00')
  },
];


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content as []}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
