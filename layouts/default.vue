<template>
  <div class="flex flex-col min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm">
      <div class="container mx-auto px-4 py-3">
        <nav class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center">
            <NuxtLink to="/" class="text-xl font-bold text-indigo-600">
              FindWay
            </NuxtLink>
          </div>

          <!-- Navigation principale -->
          <ul class="hidden md:flex space-x-8">
            <li>
              <NuxtLink to="/" class="text-gray-700 hover:text-indigo-600">
                Accueil
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/quiz" class="text-gray-700 hover:text-indigo-600">
                Quiz d'orientation
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/formations" class="text-gray-700 hover:text-indigo-600">
                Formations
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/metiers" class="text-gray-700 hover:text-indigo-600">
                Métiers
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/temoignages" class="text-gray-700 hover:text-indigo-600">
                Témoignages
              </NuxtLink>
            </li>
          </ul>

          <!-- Boutons de connexion/inscription -->
          <div class="hidden md:flex items-center space-x-4">
            <NuxtLink to="/login" class="text-gray-700 hover:text-indigo-600">
              Connexion
            </NuxtLink>
            <NuxtLink to="/register" class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">
              Inscription
            </NuxtLink>
          </div>

          <!-- Menu mobile (hamburger) -->
          <div class="md:hidden">
            <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-gray-700">
              <Icon v-if="!isMobileMenuOpen" name="heroicons:bars-3" class="w-6 h-6" />
              <Icon v-else name="heroicons:x-mark" class="w-6 h-6" />
            </button>
          </div>
        </nav>

        <!-- Menu mobile (contenu) -->
        <div v-if="isMobileMenuOpen" class="md:hidden mt-4 pb-4">
          <ul class="space-y-4">
            <li>
              <NuxtLink to="/" class="block text-gray-700 hover:text-indigo-600">
                Accueil
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/quiz" class="block text-gray-700 hover:text-indigo-600">
                Quiz d'orientation
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/formations" class="block text-gray-700 hover:text-indigo-600">
                Formations
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/metiers" class="block text-gray-700 hover:text-indigo-600">
                Métiers
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/temoignages" class="block text-gray-700 hover:text-indigo-600">
                Témoignages
              </NuxtLink>
            </li>
            <li class="pt-4 border-t border-gray-200">
              <NuxtLink to="/login" class="block text-gray-700 hover:text-indigo-600">
                Connexion
              </NuxtLink>
            </li>
            <li class="pt-2">
              <NuxtLink to="/register" class="block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-center">
                Inscription
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main class="flex-grow container mx-auto px-4 py-8">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Logo et description -->
          <div class="col-span-1 md:col-span-2">
            <h2 class="text-xl font-bold mb-4">FindWay</h2>
            <p class="text-gray-300 mb-4">
              Plateforme d'orientation scolaire personnalisée pour aider les étudiants à choisir leur parcours d'études en fonction de leurs talents et passions.
            </p>
          </div>

          <!-- Liens rapides -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/apropos" class="text-gray-300 hover:text-white">
                  À propos
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/confidentialite" class="text-gray-300 hover:text-white">
                  Politique de confidentialité
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/conditions" class="text-gray-300 hover:text-white">
                  Conditions d'utilisation
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="text-gray-300 hover:text-white">
                  Contact
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <Icon name="heroicons:envelope" class="w-5 h-5 mr-2" />
                <span>contact@findway.fr</span>
              </li>
              <li class="flex items-center">
                <Icon name="heroicons:phone" class="w-5 h-5 mr-2" />
                <span>01 23 45 67 89</span>
              </li>
            </ul>
            <div class="mt-4 flex space-x-4">
              <a href="#" class="text-gray-300 hover:text-white">
                <Icon name="mdi:facebook" class="w-6 h-6" />
              </a>
              <a href="#" class="text-gray-300 hover:text-white">
                <Icon name="mdi:twitter" class="w-6 h-6" />
              </a>
              <a href="#" class="text-gray-300 hover:text-white">
                <Icon name="mdi:instagram" class="w-6 h-6" />
              </a>
              <a href="#" class="text-gray-300 hover:text-white">
                <Icon name="mdi:linkedin" class="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div class="mt-8 pt-8 border-t border-gray-700 text-center">
          <p class="text-gray-400">
            &copy; {{ new Date().getFullYear() }} FindWay. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const isMobileMenuOpen = ref(false);

// Fermer le menu mobile lors du changement de page
watch(() => useRoute().path, () => {
  isMobileMenuOpen.value = false;
});
</script>
