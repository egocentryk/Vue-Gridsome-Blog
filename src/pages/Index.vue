<template>
    <Layout :show-logo="false">
        <!-- Author intro -->
        <Author :show-title="true" />

        <!-- List posts -->
        <div class="posts">
            <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>

            <Pager :info="$page.posts.pageInfo" />
        </div>
    </Layout>
</template>

<page-query>
    query Posts ($page: Int){
        posts: allPost(perPage: 10, page: $page, filter: { published: { eq: true }}) @paginate {
            pageInfo {
                totalPages
                currentPage
            }
            edges {
                node {
                    id
                    title
                    author
                    path
                    tags {
                        id
                        title
                        path
                    }
                    date (format: "D. MMMM YYYY")
                    timeToRead
                    description
                    cover_image (width: 770, height: 380, blur: 10)
                    ...on Post {
                        id
                        title
                        path
                    }
                }
            }
        }
    }
</page-query>

<script>
    import Author from '~/components/Author.vue'
    import PostCard from '~/components/PostCard.vue'
    import { Pager } from 'gridsome'

    export default {
        components: {
            Author,
            PostCard,
            Pager
        },

        metaInfo () {
            return {
                title: 'Seriale, Recenzje, Opinie',
                meta: [
                    { key: 'description', name: 'description', content: 'Blog koncentrujący się na recenzjach seriali - tych dobrych i tych niekoniecznie wartych Waszego czasu.' }
                ]
            }
        }
    }
</script>
