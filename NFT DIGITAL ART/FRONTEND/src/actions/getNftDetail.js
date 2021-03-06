import axios from 'axios';

export default function getNftDetail(id) {

    return function (dispatch) {
        return axios.get('/nft/' + id)
            .then((nftById) => {
                dispatch({
                    type: "GET_NFT_BY_ID",
                    payload: nftById.data
                })
            })
    }
}

