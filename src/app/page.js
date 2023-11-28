"use client"
import { Container } from '@/components/Container/container'
import { Header } from '@/components/Header/header'
import styles from './page.module.css'
import { Card } from '@/components/Card/card'
import { Footer } from '@/components/Footer/footer'
import { useState, useEffect } from 'react'


export default function Home() {

  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const getBlogs = () => {
    setLoading(true)
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts")
      .then((res) => res.json())
      .then((data) => { 
        setList(data.blogs);
        setLoading(false);
      });
  };

  useEffect(() => {
    getBlogs();
  }, []);


  return (
    <main className={styles.main}>
      <Container>
        <Header />
      </Container>
      <div className={styles.cover}>
        <div className={styles.overlay}>
          <Container>
            <div className={styles.detel}>
              <div>
                <h1>Simple Blog.</h1>
                <p>A blog created by Aon 2023</p>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Container>
        {loading && <div className={styles.ldsroller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
        <div className={styles.Grid}>
          {list.map((blog, i) => (
            <Card key={i} blog={blog} />
          ))}
        </div>
      </Container>
      <Footer/>
    </main>
  )
}
