<template>
  <main>
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">ABOUT PANGASINAN</span>
        <h1>Discover the Natural Heritage of Pangasinan</h1>
        <p>Pangasinan is a province rich in natural beauty and destinations that reflect the unique character of its landscapes, coastlines, islands, and inland attractions.</p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="section-heading">
          <span class="eyebrow">NATURAL HERITAGE</span>
          <h2>Places that showcase Pangasinan's natural beauty</h2>
          <p>From relaxing hot springs to island landscapes and coastal scenery, these destinations offer visitors a closer look at the province's natural heritage.</p>
        </div>

        <div class="heritage-list">
          <article class="heritage-item">
            <div class="heritage-number">01</div>
            <div><h3>Balungao Hot Spring</h3><p>Located in Balungao, this natural attraction is known for its hot spring and the surrounding landscape, making it a place where visitors can enjoy and appreciate Pangasinan's inland natural environment.</p></div>
          </article>
          <article class="heritage-item">
            <div class="heritage-number">02</div>
            <div><h3>Hundred Islands</h3><p>Located in Alaminos City, the Hundred Islands is one of Pangasinan's most recognized natural attractions, featuring a remarkable group of islands and coastal scenery.</p></div>
          </article>
          <article class="heritage-item">
            <div class="heritage-number">03</div>
            <div><h3>Bolinao's Coastal Landscape</h3><p>Bolinao is known for its coastal environment and natural attractions, including beaches, rock formations, caves, and scenic areas that highlight the beauty of western Pangasinan.</p></div>
          </article>
        </div>
      </div>
    </section>

    <section class="content-section content-section--alt">
      <div class="container preservation">
        <span class="eyebrow">PRESERVING OUR HERITAGE</span>
        <h2>Protecting Pangasinan's natural treasures</h2>
        <p>Pangasinan's natural heritage is an important part of the province's identity and tourism. Caring for these places helps protect their beauty, supports responsible tourism, and allows future generations to experience and appreciate them.</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.page-hero { padding: 90px 0 70px; background: linear-gradient(135deg, #e8f3ef, #f8f7f1); }
.page-hero h1 { max-width: 800px; margin: 10px 0 16px; font-size: clamp(2.2rem, 6vw, 4.4rem); line-height: 1.05; }
.page-hero p { max-width: 720px; color: var(--muted); font-size: 1.08rem; line-height: 1.75; }
.content-section { padding: 72px 0; }
.content-section--alt { background: #f1f5f2; }
.section-heading { max-width: 760px; margin-bottom: 34px; }
.section-heading h2, .preservation h2 { margin: 10px 0 12px; }
.section-heading p, .preservation p { color: var(--muted); line-height: 1.75; }
.heritage-list { display: grid; gap: 18px; }
.heritage-item { display: grid; grid-template-columns: 70px 1fr; gap: 22px; padding: 26px; background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); box-shadow: var(--shadow); }
.heritage-number { font-size: 1.35rem; font-weight: 800; color: var(--accent); }
.heritage-item h3 { margin: 0 0 8px; }
.heritage-item p { margin: 0; color: var(--muted); line-height: 1.7; }
.preservation { max-width: 800px; }
@media (max-width: 820px) { .page-hero { padding: 64px 0 52px; } .content-section { padding: 56px 0; } .heritage-item { grid-template-columns: 1fr; gap: 10px; } }
</style>
