import axios from 'axios'
import { POST_NFT } from './constants'

export const postNFT = (nft) => {
  return async function (dispatch) {
    try {
      let response = await axios.post('/nft', nft)
      return dispatch({
        type: POST_NFT,
        payload: response.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}