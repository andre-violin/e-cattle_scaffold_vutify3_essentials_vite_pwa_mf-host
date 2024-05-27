<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <picture>
        <source
          media="(max-width: 511px)"
          sizes="(max-width: 511px) 60vw, 512px"
          srcset="@/assets/logo_sv2wlx_c_scale_w_200.png 200w"
        />
        <source
          media="(min-width: 512px)"
          sizes="(max-width: 512px) 60vw, 512px"
          srcset="@/assets/logo_sv2wlx_c_scale_w_512.png 512w"
        />
        <img
          class="mb-4 ma-auto d-block"
          sizes="(max-width: 512px) 40vw, 512px"
          srcset="
            @/assets/logo_sv2wlx_c_scale_w_200.png 200w,
            @/assets/logo_sv2wlx_c_scale_w_512.png 512w
          "
          src="@/assets/logo_sv2wlx_c_scale_w_512.png"
          alt="e-Cattle logo"
        />
      </picture>

      <div class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">
          Bem-vindo à Plataforma
        </div>

        <h1 class="text-h2 font-weight-bold"><em class="mr-1">e-</em>Cattle</h1>

        <div class="text-body-2 font-weight-light mb-n1">Host Application</div>
      </div>
    </v-responsive>
  </v-container>
</template>

<script setup>
//
</script>
