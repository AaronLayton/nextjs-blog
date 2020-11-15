import { getAllPostIds } from '../../lib/posts'

export default (req, res) => {
    const allPostIds = getAllPostIds();
    res.status(200).json(allPostIds)
}