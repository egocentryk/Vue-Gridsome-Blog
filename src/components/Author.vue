<template>
  <div class="author">
    <g-image
      alt="Author image"
      class="author__image"
      src="~/assets/images/logo.png"
      width="120"
      height="120"
      blur="5"
    />

    <h1 v-if="showTitle" class="author__site-title">
      {{ $static.metadata.siteName }}
    </h1>

    <p class="author__intro">
      Blog koncentrujący się na recenzjach seriali - tych dobrych i tych
      niekoniecznie wartych Waszego czasu. Masz pytania? Chcesz opublikować tutaj swoją recenzję?<br />
      Napisz na adres: kontakt [at] egocentryk.pl.
    </p>

    <p class="author__links">
      Aktualnie oglądane:<br />
      <a title="To the Lake" href="https://www.imdb.com/title/tt9151230/"
        >To the Lake</a
      >
      <a title="Tehran" href="https://www.imdb.com/title/tt10577736/"
        >Tehran</a
      >
      <a title="The Vow" href="https://www.imdb.com/title/tt10222764/"
        >The Vow</a
      >
      <a
        title="Deadwind"
        href="https://www.imdb.com/title/tt6616260/"
        >Deadwind</a
      >
    </p>
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<script>
export default {
  props: ["showTitle"],
};
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
    opacity: 0.8;
    font-size: 0.8em;
  }

  &__site-title {
    font-size: 1em;
  }

  &__links {
    font-size: 0.7em;
    margin-top: -0.5em;
    a {
      margin: 0 0.5em;
    }
  }
}
</style>
