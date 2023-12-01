'use client'

import { WidgetTest } from 'wordkito-widgets'
import styles from './page.module.css'


export default function Home() {


  return (
    <main className={styles.main}>
      <div>
        <h3>Witaj na mojej stronie</h3>
          Co tu możesz zrobić:
        
          - zapisać się na mentoring
          - skorzystać z darmowych lekcji
      </div>

      
      <div>
        <h3>Darmowy Kurs React od podstaw</h3>
        <p>Poznaj mój kurs stworzony na mojej platformie wordkito</p>
        <div>

          <h4>1. Jak działa react ?</h4>
          <WidgetTest
            deckId="64f181a5a2bd05628b8c06b9"
            onFinished={({ result }) => console.log('finished', result)}
            iframeStyle={{
              height: '600px',
            }}
            appearance={{}}
            />

          <h4>x. Jak działa useState ?</h4>
          <WidgetTest
            deckId="64f181a5a2bd05628b8c06b9"
            onFinished={({ result }) => console.log('finished', result)}
            iframeStyle={{
              height: '600px',
            }}
            appearance={{}}
            />
        </div>
      </div>
    </main>
  )
}
