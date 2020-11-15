import { getPostData } from '../../../lib/posts'

export default async (req, res) => {
    const {
        query: {
            id
        }
    } = req;

    const postData = await getPostData(id);

    res.status(200).json(postData)
}