import axios from 'axios'
import useSWR from 'swr'

export default function Home() {
    // const fetcher = url => axios({url:url, method: "POST").then(res => console.log(res))
    // const { data, error } = useSWR('https://esi.evetech.net/latest/status/?datasource=tranquility', getPage)
    const config = {url: "https://www.fuzzwork.co.uk/lpstore/listcorpbuy.php", method: 'post', data: "corpid=1000179&blueprints=on&region=10000002"}
    const { data, error } = useSWR(config, getPage)
    // headers:{"Access-Control-Allow-Origin": "*"}}

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    console.log(data)

    return (
        <p>{data.players}</p>
    )
}

async function getPage(config) {
    try {
      const response = await axios({url: 'https://www.fuzzwork.co.uk/lpstore/buy/10000002/1000179/withblueprints', method: 'get', headers: {"Origin": "www.fuzzwork.co.uk"}})
      console.log(response);
      //return response.data
    } catch (error) {
      console.error(error);
    }
  }
