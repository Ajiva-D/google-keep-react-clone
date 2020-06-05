import axios from 'axios'

export default axios.create({
	baseURL:'https://keep-react-clone.firebaseio.com/'
})