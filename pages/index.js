import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import {useState} from 'react'
import Sample from '../components/formSections/Sample'
import { PrintBtn } from '../components/utils/Printing'

export default function Home() {
  const yourName = 'Osbaldo Aguilar'
  const [show, setShow] = useState(true)
  const propsToPass = []
  const id = 'divToPrint'
  if(yourName && id) {
    propsToPass.push(yourName);
    propsToPass.push(id)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Resume Builder App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      {/* <button onClick={()=> printDocument()} >Export to PDF</button> */}
        <h2 className={styles.title}>
        <a href="https://github.com/osbaldoAguilar/Dark-Mode">Osbaldo Aguilar: Resume Creator!</a>
        </h2>
        <div>
          <h4>Reason and Problem to resolve: </h4>
          <p>Hello I was having issues coming up with ideas to show off the skills I have acquired over the last 3 years. I was having trouble coming up with mini projects with defined results. Here's my first attempt. Fill out a form to create a Resume that you can download as a PDF!!</p>
        </div>
        <div>
          {!show ? 
            <div className={styles.sampleContainer} onClick={()=> setShow(!show)}> 
              {/* <div className={styles.minify}> */}
                <div className={styles.btns}>Click To Hide Resume</div>   
              {/* </div> */}
              <section id="divToPrint" >
                <Sample/> 
              </section>
              <PrintBtn propsToPass={propsToPass}/>
            </div>
              : 
            <div className={styles.btns} onClick={()=> setShow(!show)}>
            Click Me To See Created Resume</div>
          }
        </div>
  
          
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  )
}
