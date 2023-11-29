import { Container } from '@/components/Container/container'
import { Footer } from '@/components/Footer/footer'
import { Header } from '@/components/Header/header'
import React from 'react'
import styles from './page.module.css'
import dayjs from 'dayjs';

async function getPost(id) {
  const res = await fetch (`https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`)
  if (!res.ok) {
    throw new Error('Faild fetch')
  }

  return res.json()
}


async function Article({params}) {
  let data = await getPost(params.id)
  return (
    <div>
      <Container>
        <Header />
        <div className={styles.head}>
          <div>
            <h1>{data.blog.title}</h1>
            <p>{data.blog.category}</p>
          </div>
          <span>{dayjs(data.blog.created_at).format("YYYY , MMM DD")}</span>
        </div>
        <div className={styles.cover}>
          <img src={data.blog.photo_url} className={styles.img}></img>
        </div>
        <div className={styles.content} dangerouslySetInnerHTML={{__html: data.blog.content_html}}></div>
      </Container>
      <h1>{params.id}</h1>
      <Footer />
    </div>
  )
}

export default Article
