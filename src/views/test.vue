<template>
<section>
  <a href="https://buefy.github.io/documentation/collapse">Codepen</a>

  <b-collapse :open="false">
    <button class="button is-primary" slot="trigger">Click me!</button>
      <h3>Subtitle</h3>
  </b-collapse>

  <b-collapse class="card">
    <div slot="trigger" slot-scope="props" class="card-header">
        <a class="card-header-icon">
          <i class="fas fa-chevron-down"></i>
        </a>
    </div>
    <div class="card-content"><div class="content">Lorem </div></div>
  </b-collapse>

</section>
</template>

<script>
export default {
  
}
</script>
