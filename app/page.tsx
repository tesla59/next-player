import Image from 'next/image'
import styles from './page.module.css'
import ReactPlayer from 'react-player'
import VideoPlayer from './components/VideoPlayer'

const URL = "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4"

export default function Home() {
  return (
    <div className={styles.player}>
      <VideoPlayer Url={URL}></VideoPlayer>
    </div>
  )
}
