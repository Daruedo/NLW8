import { MessageList } from "./components/MessageList"
import { Widget } from "./components/Widget"

import styles from './App.module.scss';

export function App() {
  return (
    <>
      <main className={styles.contentWrapper}>
        <MessageList/>
      </main>
      <Widget/>
    </>
  )
}