import React from 'react'
import TopicBox from '../components/TopicBox'
import Content from '../components/Content'

export default function Home() {
  return (
    <div>
        <h1>Trading..!</h1>
        <TopicBox entity="forex"  type="eurousd">
          <span>It depends on totally world market</span>
        </TopicBox>
        <TopicBox entity="crypto" type="btcusdt">
          <button>try this chart</button>
        </TopicBox>
        <TopicBox entity="index"  type="75 index">
          <p>This is really volatile</p>
        </TopicBox>

        <Content/>
    </div>
  )
}
