import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import  Button  from '../../components/Button'
import  Nav  from '../../components/Nav'

const components = { Button }

const PostPage = ({ frontMatter: { title, date }, source }) => {
    return (
        <div className="mt-4">
            <h1>{title}</h1>
            <MDXRemote {...source} components={components}/>
        </div>
    )
}

const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.mdx', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts',
        slug + '.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownWithMeta)
    const mdxSource = await serialize(content)

    return {
        props: {
            frontMatter,
            slug,
            source: mdxSource
        }
    }
}

export { getStaticProps, getStaticPaths }
export default PostPage