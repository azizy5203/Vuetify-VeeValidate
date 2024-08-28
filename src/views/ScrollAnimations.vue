<script setup></script>

<template>
  <div class="anim">
    <h1>Scroll Driven Animations Demo</h1>
    <p v-for="n in 7">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rerum
      beatae ea ratione, sapiente soluta eveniet laudantium. Voluptatem sint
      corrupti iste ullam repellendus, temporibus fugiat alias quidem architecto
      qui provident soluta sunt ratione voluptate tempore numquam reprehenderit
      incidunt. Delectus architecto totam tenetur, nemo culpa modi iusto officia
      at inventore. Fugiat eum, suscipit adipisci magni quaerat molestias magnam
      perspiciatis molestiae ratione harum iusto corporis earum maxime natus
      sed, incidunt labore eos impedit. Enim voluptatum voluptate dolore quod
      consequatur quae. Delectus voluptatem odit sed dolorum incidunt error, at
      earum eveniet eos dignissimos labore sit odio iure repellat cupiditate
      maxime impedit, modi minus? Obcaecati, numquam, hic dolor sequi cum
      adipisci nesciunt mollitia autem assumenda cumque aspernatur nisi. Ab quam
      iusto vero hic sunt!
    </p>

    <img
      class="anim__target"
      src="https://picsum.photos/id/684/600/400"
      alt=""
    />
    <p v-for="n in 7">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rerum
      beatae ea ratione, sapiente soluta eveniet laudantium. Voluptatem sint
      corrupti iste ullam repellendus, temporibus fugiat alias quidem architecto
      qui provident soluta sunt ratione voluptate tempore numquam reprehenderit
      incidunt. Delectus architecto totam tenetur, nemo culpa modi iusto officia
      at inventore. Fugiat eum, suscipit adipisci magni quaerat molestias magnam
      perspiciatis molestiae ratione harum iusto corporis earum maxime natus
      sed, incidunt labore eos impedit. Enim voluptatum voluptate dolore quod
      consequatur quae. Delectus voluptatem odit sed dolorum incidunt error, at
      earum eveniet eos dignissimos labore sit odio iure repellat cupiditate
      maxime impedit, modi minus? Obcaecati, numquam, hic dolor sequi cum
      adipisci nesciunt mollitia autem assumenda cumque aspernatur nisi. Ab quam
      iusto vero hic sunt!
    </p>
  </div>
</template>

<style lang="scss" scoped>
.anim {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  &__target {
    animation: reveal linear forwards;
    animation-timeline: view();
    animation-range: entry 25% cover 30%;
    opacity: 0;
    clip-path: inset(45% 20% 45% 20%);
    // animation: scale-anim linear forwards;
    // animation-timeline: scroll();
  }

  @keyframes scale-anim {
    0% {
      transform: scale(0);
      rotate: 180deg;
    }
    50% {
      //   transform: scale(1);
      //   rotate: 0deg;
    }
    100% {
      transform: scale(1);
      rotate: 0;
    }
  }

  @keyframes reveal {
    from {
      opacity: 0;
      clip-path: inset(45% 20% 45% 20%);
    }
    to {
      opacity: 1;
      clip-path: inset(0% 0% 0% 0%);
    }
  }

  @keyframes sticky-parallax-header {
    from {
      background-position: 50% 0;
      height: 100vh;
      font-size: calc(4vw + 1em);
    }
    to {
      background-position: 50% 100%;
      height: 10vh;
      font-size: 2em;
      background-color: #0b1584;
    }
  }
}
</style>
