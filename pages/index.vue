<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
              Trouvez votre voie, <br />suivez votre passion
            </h1>
            <p class="text-xl mb-8">
              Découvrez le parcours d'études qui vous correspond vraiment grâce à notre plateforme d'orientation personnalisée.
            </p>
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <NuxtLink
                to="/quiz"
                class="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium text-center"
              >
                Faire le quiz
              </NuxtLink>
              <NuxtLink
                to="/formations"
                class="border border-white text-white hover:bg-white hover:text-indigo-600 px-6 py-3 rounded-lg font-medium text-center"
              >
                Explorer les formations
              </NuxtLink>
            </div>
          </div>
          <div class="md:w-1/2">
            <img
              src="https://placehold.co/600x400/indigo/white?text=Illustration+Orientation"
              alt="Illustration orientation scolaire"
              class="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Comment ça marche -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Comment ça marche ?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="heroicons:clipboard-document-check" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-semibold mb-3">1. Répondez au quiz</h3>
            <p class="text-gray-600">
              Découvrez vos talents, passions et aptitudes grâce à notre questionnaire interactif et ludique.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="heroicons:chart-bar" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-semibold mb-3">2. Recevez vos résultats</h3>
            <p class="text-gray-600">
              Obtenez une analyse personnalisée et des recommandations de formations et métiers qui vous correspondent.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="heroicons:academic-cap" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-semibold mb-3">3. Explorez vos options</h3>
            <p class="text-gray-600">
              Consultez les détails des formations recommandées, écoutez des témoignages et prenez une décision éclairée.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pourquoi nous choisir -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Pourquoi choisir FindWay ?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex">
            <div class="mr-4 text-indigo-600">
              <Icon name="heroicons:sparkles" class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Orientation personnalisée</h3>
              <p class="text-gray-600">
                Notre approche est basée sur vos talents réels et vos passions, pas uniquement sur vos résultats scolaires.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="mr-4 text-indigo-600">
              <Icon name="heroicons:users" class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Témoignages authentiques</h3>
              <p class="text-gray-600">
                Écoutez des étudiants et professionnels partager leur expérience dans différentes filières.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="mr-4 text-indigo-600">
              <Icon name="heroicons:rocket-launch" class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Accompagnement continu</h3>
              <p class="text-gray-600">
                Suivez votre progression et affinez vos choix au fur et à mesure de votre parcours.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="mr-4 text-indigo-600">
              <Icon name="heroicons:rectangle-stack" class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Base de données complète</h3>
              <p class="text-gray-600">
                Une information à jour sur des centaines de formations et métiers dans tous les domaines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Témoignages -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Ce qu'en disent nos utilisateurs</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <img
                src="https://placehold.co/100/indigo/white?text=A"
                alt="Avatar"
                class="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 class="font-semibold">Laura, 18 ans</h4>
                <p class="text-gray-500">Étudiante en médecine</p>
              </div>
            </div>
            <p class="text-gray-600 italic">
              "Grâce à FindWay, j'ai confirmé ma passion pour la médecine et découvert des spécialités auxquelles je n'aurais jamais pensé. Le quiz a vraiment cerné ma personnalité !"
            </p>
            <div class="mt-4 text-yellow-400 flex">
              <Icon name="heroicons:star-solid" class="w-5 h-5" />
              <Icon name="heroicons:star-solid" class="w-5 h-5" />
              <Icon name="heroicons:star-solid" class="w-5 h-5" />
              <Icon name="heroicons:star-solid" class="w-5 h-5" />
              <Icon name="heroicons:star-solid" class="w-5 h-5" />
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <img
                src="https://placehold.co/100/indigo/white?text=T"
                alt="Avatar"
                class="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 class="font-semibold">Thomas, 20 ans</h4>
                <p class="text-gray-500">Étudiant en informatique</p>
              </div>
            </div>
            <p class="text-gray-600 italic">
              "J'étais complètement perdu après le bac. FindWay m'a aidé à comprendre que mes compétences en résolution de problèmes étaient parfaites pour le développement web."
            </p>
            <div class="mt-4 text-yellow-400 flex">
              <Icon name="heroicons:star-solid" class="w-5 h-5" />
              <Icon name="heroicons:star-solid" class="w-5 h-5" />
              <Icon name="heroicons:star-solid" class="w-5 h-5" />
              <Icon name="heroicons:star-solid" class="w-5 h-5" />
              <Icon name="heroicons:star" class="w-5 h-5" />
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <img
                src="https://placehold.co/100/indigo/white?text=S"
                alt="Avatar"
                class="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 class="font-semibold">Sofia, 17 ans</h4>
                <p class="text-gray-500">Lycéenne en terminale</p>
              </div>
            </div>
            <p class="text-gray-600 italic">
              "Les témoignages vidéo m'ont beaucoup aidée à me projeter dans différentes filières. Ça change des brochures ennuyeuses des salons d'orientation !"
            </p>
            <div class="mt-4 text-yellow-400 flex">
              <Icon name="heroicons:star-solid" class="w-5 h-5" />
              <Icon name="heroicons:star-solid" class="w-5 h-5" />
              <Icon name="heroicons:star-solid" class="w-5 h-5" />
              <Icon name="heroicons:star-solid" class="w-5 h-5" />
              <Icon name="heroicons:star-solid" class="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call-to-action -->
    <section class="py-16 bg-indigo-600 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Prêt à découvrir votre voie ?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Commencez dès maintenant votre parcours d'orientation personnalisé et découvrez les formations qui correspondent à vos talents et passions.
        </p>
        <NuxtLink
          to="/quiz"
          class="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium inline-block"
        >
          Commencer le quiz
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
// Meta title et description pour SEO
useHead({
  title: 'FindWay - Plateforme d\'orientation scolaire personnalisée',
  meta: [
    { 
      name: 'description', 
      content: 'Découvrez le parcours d\'études qui vous correspond vraiment grâce à notre plateforme d\'orientation personnalisée basée sur vos talents et passions.'
    }
  ]
})
</script>
