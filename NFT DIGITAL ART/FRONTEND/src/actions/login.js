import loginUser from '../services/auth/loginUser'

export default function localLogin(payload) {

  return async function (dispatch) {
    const response = await loginUser(payload)
    if (response === 400) {
      alert('Sorry, Error Login 🤦🏽‍♂️')
      return 
    }
     dispatch({
        type: 'LOGIN_SUCCESS',
        payload: response,
      })
  }
}
