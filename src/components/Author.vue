<template>
	<div class="author">
		<g-image alt="Author image" class="author__image" src="~/assets/images/logo.png" width="120" height="120" blur="5" />

		<h1 v-if="showTitle" class="author__site-title">
			{{ $static.metaData.siteName }}
		</h1>

		<p class="author__intro">
			Blog koncentrujący się na recenzjach seriali - tych dobrych i tych niekoniecznie wartych Waszego czasu. 
            Masz pytania? Chcesz do nas dołączyć? Napisz na adres: kontakt [at] egocentryk.pl.
		</p>

		<p class="author__links">
            Aktualnie oglądane:<br />
            <a title="Band of Brothers" href="https://www.imdb.com/title/tt0185906/">Band of Brothers</a>
            <a title="The Capture" href="https://www.imdb.com/title/tt8201186/">The Capture</a> 
            <a title="The Spy" href="https://www.imdb.com/title/tt5952634/">The Spy</a> 
            <a title="The Naked Director" href="https://www.imdb.com/title/tt10477528/">The Naked Director</a> 
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