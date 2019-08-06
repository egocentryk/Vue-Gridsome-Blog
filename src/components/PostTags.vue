<template>
    <div class="post-tags">
   		<g-link class="post-tags__link" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
   			{{ tag.title }}
   		</g-link>
    </div>
</template>

<script>
    export default {
        props: ['post']
    }
</script>

<style lang="scss">
    .post-tags {
        margin: 1em 0 0;

        &__link {
  	        margin-right: .7em;
            font-size: .6em;
            text-transform: uppercase;
  	        color: currentColor;
  	        text-decoration: none;
  	        background-color: var(--bg-color);
  	        color: red!important;
  	        border-radius: var(--radius);
        }
    }
</style>