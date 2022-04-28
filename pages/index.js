import { useState, useEffect, useContext, useRef } from 'react'
import { css } from '@emotion/css'
import { BundlrContext } from '../context'
import Link from 'next/link';
import Classroom from '../components/Classroom/Classroom';
import { Creators } from '../creators'
//import { buildQuery, arweave, createPostInfo, getRandomEmoji } from '../utils'
//import formatDistance from 'date-fns/formatDistance'
//import ReactMarkdown from 'react-markdown'
//test line
const devs = {
  gm: 'gm',
  koii: 'koii',
  spheron: 'spheron',
  saeta: 'saeta',
  ArFS: 'ArFS',
  nader: 'nader',
  arweave: 'arweave',
  sam: 'sam',
}

const editors = {
  repl: 'repl',
  arcode: 'arcode',
  graphql: 'graphql',
  arcodeArweave: 'arcodeArweave',
}

function App() {
  const [isLoading, setIsLoading] = useState(false)

  const [devToFilter, setDevToFilter] = useState('')
  const [ideToFilter, setIdeToFilter] = useState('repl')

  const topicFilterRef = useRef(null)
  const context = useContext(BundlrContext)
  const { balance, connectCeramic, bundlrInstance, profile } = context
  topicFilterRef.current = devToFilter

  useEffect(() => {
    setIsLoading(true)
  }, [])

  function checkTopicFilterStyle(topic) {
    if (topic === devToFilter) {
      return css`
        background-color: #ff5d9d !important;
      `
    }
  }

  function setFilter(dev) {
    if (devToFilter === dev) {
      setDevToFilter(dev)
    } else {
      setIdeToFilter(Creators[dev].editors.preferred)
      setDevToFilter(dev)
    }
  }


  const balanceZero = balance === "0.0"

  return (

    <div>
      {
        !bundlrInstance ? (
          <div className={horizontalPaddingStyle}>
            <button className={button} onClick={connectCeramic}>Connect wallet to start coding!</button>
          </div>
        ) : balanceZero ? (
          <div className={horizontalPaddingStyle}>
            <h4>
              Balance empty. Please fund wallet
              <Link href="/account">
                <a className={fundWalletLinkStyle}> here.</a>
              </Link>
            </h4>
          </div>
        ) : (
          null
        )
      }
      {<div className={filtersContainerStyle}>
        <div className={filterheaderStyle}>
          <h3>Filter by Creator</h3>
        </div>
        <div className={filtersListStyle}>
          {
            Object.keys(devs).map((dev, i) => (
              <div key={i}>
                <p className={checkTopicFilterStyle(dev)} onClick={() => setFilter(dev)}>{dev}</p>
              </div>
            ))
          }
        </div>

      </div>}
      {<div className={filtersContainerStyle}>
        <div className={filterheaderStyle}>
          {/* TODO IDE SELECTOR */}
          <div className={filtersListStyle}>
            <h3>Filter by IDE</h3>
          </div>
        </div>
        <div>
          <div className={filtersListStyle}>
            {Object.keys(editors).map((editor, i) => (
              <div key={i} >
                <button className={button} layout='fill' onClick={() => setIdeToFilter(editor)}>{editor}</button>
              </div>
            ))}
          </div>
        </div>
      </div>}

      {devToFilter && <Classroom dev={devToFilter} ide={ideToFilter} />}
    </div >
  );
}

const horizontalPaddingStyle = css`
      padding: 4px 30px;
      `

const postWrapper = css`
      border-bottom: 1px solid rgba(0, 0, 0, .2);
      display: flex;
      align-items: flex-start;
      border-top: 1px solid rgba(255, 255, 255, .1);
      ${horizontalPaddingStyle},
      h1 {
        font - size: 40px;
      margin: 20px 30px 0px 0px;
  }
      `

const postContainer = css`
      margin-bottom: 10px;
      p:first-child {
        color: #9e54b9;
      font-size: 22px;
      margin-bottom: 0px;

  }
      p:nth-child(2) {
        font - size: 29px;
      margin: 17px 0px;
      font-size: 28px;
  }
      `

const postInputContainerStyle = css`
      ${horizontalPaddingStyle},
      display: flex;
      flex-direction: column;
      width: 300px;
      `

const postInputStyle = css`
      padding: 12px;
      font-size: 22px;
      min-width: 250px;
      border-radius: 7px;
      border-color: rgba(0, 0, 0, .05);
      &:focus {
        border - color: rgba(0, 0, 0, .1);
      outline: none;
  }
      `

const button = css`
      color: white;
      background-image: linear-gradient(120deg, #ff266a 0%, #c926ff 50%, #3d04cd 100%);
      padding: 13px 35px;
      border-radius: 7px;
      margin: 10px;
      border: none;
      outline: none;
      box-shadow: 0 6px 20px rgba(255, 38, 106, .15);
      cursor: pointer;
      transition: all .3s;
      &:hover {
        box - shadow: 0 6px 20px rgba(255, 38, 106, .3);
  }
      `

const postListContainer = css`
      margin-top: 10px;
      border-top: 1px solid black;
      `

const filtersContainerStyle = css`
      ${horizontalPaddingStyle},
      margin-top: 50px;
      h3 {
        margin - bottom: 5px;
  }
      `

const filterheaderStyle = css`
      display: flex;
      align-items: flex-start;
      margin-top: 20px;
      h3 {
        margin: 0px;
  }
      img {
        margin - left: 15px;
      cursor: pointer;
  }
      `

const profileImageStyle = css`
      width: 56px;
      height: 56px;
      object-fit: cover;
      border-radius: 28px;
      margin-top: 26px;
      margin-right: 12px;
      `

const emojiStyle = css`
      font-size: 40px;
      margin-right: 26px;
      `

const filtersListStyle = css`
      display: flex;
      p {
        background - color: #1d1a27;
      border: 1px solid #302c3f;
      color: white;
      margin-right: 6px;
      padding: 8px 24px;
      border-radius: 27px;
      cursor: pointer;
      font-weight: bold;
  }
      `

const fundWalletLinkStyle = css`
      color: #b84cff;
      `

const refreshImageStyle = css`
      width: 30px;
      `

const timeAndTopicContainerStyle = css`
      display: flex;
      p:first-child {
        margin: 0;
  }
      p:nth-child(2) {
        margin: 0;
      margin-left: 10px;
      font-size: 22px;
      color: #ff5d9d;
  }
      `
export default App;
