import { useState, useEffect } from "react"
import "../assets/css/componentes/card.css"
import { useParams, useNavigate } from "react-router-dom"
import { buscar } from "../api/api"

const Post = ({url}) => {
    const [post, setPost] = useState({})

    const {id} = useParams()

    const navegar = useNavigate()
    
    useEffect(() => {
        buscar(`/posts/${id}`, setPost).catch(() => {
            navegar('/no-encontrado')
        })
    }, [id, navegar])

    return (
        <main className = "container flex flex--center">
            <article className = "card post">
            <img src={post.imgbanner} className = "post-card__banner" />
            <h2 className = "post-card__title">{post.title}</h2>
            <p className = "text__card">{post.body}</p>
            </article>
        </main>
    )
}

export default Post
