<template>
  <footer class="footer container-fluid">
    <div class="row justify-content-around">
      <app-footer-list
        class="col-8"
        :title="content.telephones.title"
        :icon="content.telephones.icon"
        v-if="hasTelephones">
        <app-footer-list-item
          v-for="(item, key) of contacts.telephones"
          :key="key"
          v-text="item"/>
      </app-footer-list>

      <app-footer-list
        class="col-8"
        :title="content.emails.title"
        :icon="content.emails.icon"
        v-if="hasEmails">
        <app-footer-list-item
          v-for="(item, key) of contacts.emails"
          :key="key"
          v-text="item"/>
      </app-footer-list>

      <app-footer-list
        class="footer_social col-8"
        v-if="hasSocial">
        <app-footer-list-item
          v-for="(item, key) of contacts.social"
          :key="key">
          <a 
            class="footer_social-link"
            :href="item.url">
            <font-awesome-icon
              :icon="handleSocialIcon(item.icon)"
              :key="item.icon.name" />
            {{ item.name }}
          </a>
        </app-footer-list-item>
      </app-footer-list>
    </div>
  </footer>
</template>

<script lang="ts">
  import { defineComponent, onMounted, computed } from "vue";
  import { useStore } from 'vuex';

  import { empty } from '@/utils';
  import Contacts from '@/entities/about/Contacts';
  import { useLocalizedText } from '@/hooks/useTranslator';
  import AppFooterList from './AppFooterList.vue';
  import AppFooterListItem from './AppFooterListItem.vue';
  import SocialIcon from '@/entities/about/SocialIcon';

  export default defineComponent({
  components: { AppFooterList, AppFooterListItem },
    name: "AppFooter",

    setup() {
      const content = {
        telephones: {
          title: useLocalizedText('app.footer.telephones.title'),
          icon: 'phone-square-alt'
        },
        emails: {
          title: useLocalizedText('app.footer.emails.title'),
          icon: 'envelope-square'
        },
        social: {
          title: useLocalizedText('app.footer.social.title'),
        }
      };
      const store = useStore();

      onMounted(() => {
        store.dispatch('about/contacts');
      });

      // Computed
      const contacts = computed((): Contacts => store.getters['about/contacts']);
      const hasTelephones = computed(() => !empty(contacts.value) && !empty(contacts.value.telephones));
      const hasEmails = computed(() => !empty(contacts.value) && !empty(contacts.value.emails));
      const hasSocial = computed(() => !empty(contacts.value) && !empty(contacts.value.social));

      // methods
      const handleSocialIcon = 
        (icon: SocialIcon) => !empty(icon.prefix) ? [icon.prefix, icon.name]: icon.name;

      return {
        content,
        contacts,
        hasTelephones,
        hasEmails,
        hasSocial,
        handleSocialIcon
      }
    }
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables";

  .footer {
    min-height: 10rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: darken($dark-color, 15);

    &_social {
      margin-top: 1rem;

      &-link {
        color: white;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
</style>