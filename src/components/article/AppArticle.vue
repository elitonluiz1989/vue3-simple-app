<template>
    <article class="article position-relative">
      <header class="article_header">
        <h3 class="article_title">{{ title }}</h3>

        <footer
          class="article_header-footer capitalize-first-letter"
          v-html="useLocalizedText('app.article.header.footer.written_info', writtenInfo)"
          v-if="hasWrittenInfo">
        </footer>
      </header>

      <section :class="contentStyles">
        <slot />
      </section>

      <footer class="article_footer position-absolute" v-if="!showFullText">
        <button class="article_footer-btn btn w-100" @click="footerBtnToogle">
          {{ footerBtnText }}
        </button>
      </footer>
    </article>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

import WrittenInfo from '@/entities/article/WrittenInfo';

import { useLocalizedText } from '@/hooks/useTranslator';

export default defineComponent({
  name: 'AppArticle',

  props: {
    title: {
      type: String,
      required: true
    },

    author: {
      type: String,
      required: false,
    },

    writtenInfo: {
      type: Object as () => WrittenInfo,
    },

    showFullText: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    // Variables
    const defaultContenStyle = [ 'article_content', 'overflow-hidden' ];
    const isFullText = ref(props.showFullText);

    // computed methods
    const hasWrittenInfo = computed(() => props.writtenInfo !== undefined);
    const contentStyles = computed((): string[] => {
      return isFullText.value ? 
        [...defaultContenStyle, 'article_content--full'] : 
        defaultContenStyle;
    });
    const footerBtnText = computed((): string => {
      const localizedText = isFullText.value ? 'app.article.footer.btn.hide' : 'app.article.footer.btn.show';
      return useLocalizedText(localizedText);
    });

    // Methods
    const footerBtnToogle = () => isFullText.value = !isFullText.value;

    return {
      useLocalizedText,
      hasWrittenInfo,
      contentStyles,
      footerBtnText,
      footerBtnToogle
    }
  }
  
});
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables";

  $article-padding: 0.5rem;

  .article {
    padding: $article-padding;
    background-color: $lightest-color;

    &_title {
      text-shadow: 0 0 1px #000;
    }

    &_header {
      &-footer {
        padding: 0.5rem 0;
        font-size: 0.7em;
      }
    }

    &_content {
      max-height: 20rem;

      &--full {
        max-height: fit-content;
        padding-bottom: 2.5rem;
      }
    }

    &_footer {
      right: $article-padding;
      bottom: $article-padding;
      left: $article-padding;
      z-index: 1;
      background-color: $lightest-color;

      &-btn {
        height: 1.6rem;
        line-height: 0;
        border: 1px solid $dark-color;
        border-radius: 0;
      }
    }
  }
</style>