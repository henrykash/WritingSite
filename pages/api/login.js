import { setAuthCookies } from 'next-firebase-auth'
import initAuth from '../../utils/initAuth'

initAuth()

const handler = async(req, res) => {
	try {
	  await setAuthCookies(req, res)

	}
	catch(error) {
		console.log(error)
		return res.status(500).json({ error: 'Unexpected error ' })
	}
	return res.status(200).json({ status: true })

}

export default handler

