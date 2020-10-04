<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">
        {{ $page.post.title }}
      </h1>

      <PostMeta :post="$page.post" />
    </div>

    <div class="post content-box">
      <div class="post__header">
        <g-image
          alt="Cover image"
          v-if="$page.post.cover_image"
          :src="$page.post.cover_image"
        />
      </div>

      <div class="post__content" v-html="$page.post.content" />

      <cite>~ {{ this.$page.post.author }}</cite>

      <div class="post__rating">
        <h4>
          {{ this.$page.post.rating }} <span>/ <i>10</i></span>
        </h4>
      </div>

      <div class="post__footer">
        <PostTags :post="$page.post" />
      </div>
    </div>

    <div class="post-comments">
      <!-- Add comment widgets here -->
    </div>

    <Author class="post-author" />
  </Layout>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";
import Author from "~/components/Author.vue";

export default {
  components: {
    Author,
    PostMeta,
    PostTags,
  },

  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.post.description,
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:description", content: this.$page.post.description },
        { name: "twitter:title", content: this.$page.post.title },
        {
          name: "twitter:image",
          content:
            "https://recenzjeseriali.pl" + this.$page.post.cover_image.src,
        },
        { name: "twitter:creator", content: "@egocentryk" },
        { name: "twitter:site", content: "https://twitter.com/egocentryk" },
        {
          property: "og:image",
          content:
            "https://recenzjeseriali.pl" + this.$page.post.cover_image.src,
        },
        { property: "og:locale", content: "pl_PL" },
        {
          property: "og:url",
          content: "https://recenzjeseriali.pl" + this.$route.path,
        },
        { property: "og:type", content: "website" },
      ],
      script: [
        {
          innerHTML: JSON.stringify({
            "@context": "http://schema.org/",
            "@type": "Review",
            itemReviewed: {
              "@type": "TVSeries",
              name: this.$page.post.tvshow,
            },
            author: {
              "@type": "Person",
              name: "egocentryk",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: this.$page.post.rating,
              bestRating: "10",
              worstRating: "1",
            },
            reviewBody: this.$page.post.description,
            publisher: {
              "@type": "Organization",
              name: "Recenzje Seriali",
              sameAs: "https://recenzjeseriali.pl/",
              logo: {
                "@type": "ImageObject",
                url:
                  "https://recenzjeseriali.pl/assets/static/logo.3d7a5be.dd603f0.png",
                width: 120,
                height: 120,
              },
            },
            image: {
              "@type": "ImageObject",
              url:
                "https://recenzjeseriali.pl" + this.$page.post.cover_image.src,
              width: 860,
              height: 485,
            },
          }),
          type: "application/ld+json",
        },
      ],
    };
  },
};
</script>

<page-query>
  query Post ($path: String!) {
    post: post (path: $path) {
      title
      author
      tvshow
      rating
      path
      date (format: "D. MMMM YYYY")
      timeToRead
      tags {
        id
        title
        path
      }
      description
      content
      cover_image (width: 860, blur: 10)
    }
  }
</page-query>

<style lang="scss">
  .post-title {
    padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
    text-align: center;
  }

  .post {
    &__header {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      margin-top: calc(var(--space) * -1);
      margin-bottom: calc(var(--space) / 2);
      overflow: hidden;
      border-radius: var(--radius) var(--radius) 0 0;

      img {
        width: 100%;
      }

      &:empty {
        display: none;
      }
    }

    &__content {
      h2:first-child {
        margin-top: 0;
      }

      p:first-of-type {
        font-size: 1.2em;
        color: var(--title-color);
      }

      img {
        width: calc(100% + var(--space) * 2);
        margin-left: calc(var(--space) * -1);
        display: block;
        max-width: none;
      }
    }

    cite {
      font-size: 0.7rem;
      font-style: italic;
    }

    &__rating {
      margin-top: -20px;
      text-align: left;

      h4 {
        line-height: 1rem;
        font-size: 3rem;
      }

      h4 span {
        font-size: 0.5rem;
        color: #777;
      }

      h4 span i {
        font-size: 1rem !important;
        color: var(--title-color);
        margin-left: 5px;
      }
    }
  }

  .post-comments {
    padding: calc(var(--space) / 2);

    &:empty {
      display: none;
    }
  }

  .post-author {
    margin-top: calc(var(--space) / 2);
  }
</style>
