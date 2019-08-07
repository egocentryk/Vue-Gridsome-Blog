<template>
	<div class="author">
		<g-image alt="Author image" class="author__image" src="~/assets/images/logo.png" width="120" height="120" blur="5" />

		<h1 v-if="showTitle" class="author__site-title">
			{{ $static.metaData.siteName }}
		</h1>

		<p class="author__intro">
			Prosty blog stworzony z wykorzystaniem Vue.js / Gridsome oraz Markdown do tworzenia treści.
		</p>

		<p class="author__links">
            Zobacz mój profil na: 
			<a href="//twitter.com/egocentryk">Twitter</a>
			<a href="//github.com/egocentryk">GitHub</a>
		</p>

	</div>
</template>

<static-query>
    query {
        metaData {
            siteName
        }
    }
</static-query>

<script>
    export default {
	    props: ['showTitle']
    }
</script>

<style lang="scss">
    .author {
        margin: 0 auto;
        max-width: 500px;
        text-align: center;
        padding: calc(var(--space) / 10) 0;

        &__image {
            border-radius: 100%;
            width: 50px;
            height: 50px;
            margin-bottom: 1em;
        }

        &__intro {
            opacity: .8;
            font-size: 0.8em;
        }

        &__site-title {
            font-size: 1em;
        }

        &__links {
            font-size: 0.7em;
            margin-top: -.5em;
            a {
                margin: 0 .5em;
            }
        }
    }
</style>