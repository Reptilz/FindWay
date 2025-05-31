<template>
  <section class="py-16 bg-gray-50 overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800">Ce qu'en disent nos étudiants</h2>
        <div class="flex space-x-3">
          <button 
            @click="scrollToLeft" 
            :class="[
              'p-2 rounded-full transition-colors',
              isAtStart 
                ? 'bg-gray-100 text-gray-400' 
                : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-600'
            ]"
            aria-label="Précédent"
          >
            <Icon name="heroicons:chevron-left" class="w-5 h-5" />
          </button>
          <button 
            @click="scrollRight" 
            :class="[
              'p-2 rounded-full transition-colors',
              isAtEnd 
                ? 'bg-gray-100 text-gray-400' 
                : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-600'
            ]"
            aria-label="Suivant"
          >
            <Icon name="heroicons:chevron-right" class="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div class="relative">
        <div 
          ref="reviewsContainer" 
          class="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 cursor-grab active:cursor-grabbing" 
          :style="{ scrollBehavior: 'smooth' }"
          @mousedown="startDrag"
          @mousemove="onDrag"
          @mouseup="stopDrag"
          @mouseleave="stopDrag"
          @touchstart="startDrag"
          @touchmove="onDrag"
          @touchend="stopDrag"
        >
          <div 
            v-for="(review, index) in reviews" 
            :key="index" 
            class="bg-white p-6 rounded-lg shadow-md flex-shrink-0 w-full md:w-96"
          >
            <div class="flex items-center mb-4">
              <img
                :src="review.avatar || `https://placehold.co/100/indigo/white?text=${review.name[0]}`"
                alt="Avatar"
                class="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 class="font-semibold text-gray-800">{{ review.name }}, {{ review.age }} ans</h4>
                <p class="text-gray-500">{{ review.status }}</p>
              </div>
            </div>
            <p class="text-gray-700 italic min-h-[100px]">
              "{{ review.text }}"
            </p>
            <div class="mt-4 text-yellow-400 flex">
              <Icon 
                v-for="star in 5" 
                :key="star"
                :name="star <= review.stars ? 'heroicons:star-solid' : 'heroicons:star'" 
                class="w-5 h-5" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

// Références du carousel
const reviewsContainer = ref(null);
const scrollPosition = ref(0);
const maxScroll = ref(0);

// Variables de glissage
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);

// États pour savoir si on est au début ou à la fin du carousel
const isAtStart = computed(() => scrollPosition.value <= 0);
const isAtEnd = computed(() => scrollPosition.value >= maxScroll.value);

// Fonction pour mettre à jour la position de défilement
const updateScrollPosition = () => {
  if (reviewsContainer.value) {
    scrollPosition.value = reviewsContainer.value.scrollLeft;
    maxScroll.value = reviewsContainer.value.scrollWidth - reviewsContainer.value.clientWidth;
  }
};

// Fonctions de glissage
const startDrag = (e) => {
  if (!reviewsContainer.value) return;
  
  isDragging.value = true;
  
  // Désactive le comportement de défilement naturel sur mobile
  if (e.type === 'touchstart') {
    startX.value = e.touches[0].pageX - reviewsContainer.value.offsetLeft;
  } else {
    startX.value = e.pageX - reviewsContainer.value.offsetLeft;
    e.preventDefault(); // Empêche la sélection de texte pendant le glissement
  }
  
  scrollLeft.value = reviewsContainer.value.scrollLeft;
};

const onDrag = (e) => {
  if (!isDragging.value || !reviewsContainer.value) return;
  
  let x;
  if (e.type === 'touchmove') {
    x = e.touches[0].pageX - reviewsContainer.value.offsetLeft;
  } else {
    x = e.pageX - reviewsContainer.value.offsetLeft;
    e.preventDefault();
  }
  
  const distance = (x - startX.value) * 2; // Multiplicateur pour ajuster la sensibilité
  reviewsContainer.value.scrollLeft = scrollLeft.value - distance;
  updateScrollPosition();
};

const stopDrag = () => {
  isDragging.value = false;
};

// Fonction pour faire défiler vers la gauche avec les boutons
const scrollToLeft = () => {
  if (reviewsContainer.value) {
    const containerWidth = reviewsContainer.value.clientWidth;
    reviewsContainer.value.scrollBy({ left: -containerWidth / 2, behavior: 'smooth' });
  }
};

// Fonction pour faire défiler vers la droite avec les boutons
const scrollRight = () => {
  if (reviewsContainer.value) {
    const containerWidth = reviewsContainer.value.clientWidth;
    reviewsContainer.value.scrollBy({ left: containerWidth / 2, behavior: 'smooth' });
  }
};

// Initialisation après le montage du composant
onMounted(() => {
  if (reviewsContainer.value) {
    // Masquer la barre de défilement
    reviewsContainer.value.classList.add('hide-scrollbar');
    
    // Calculer la position maximale de défilement
    updateScrollPosition();
    
    // Ajouter un écouteur d'événement pour suivre la position de défilement
    reviewsContainer.value.addEventListener('scroll', updateScrollPosition);
    
    // Gérer les changements de taille de la fenêtre
    window.addEventListener('resize', updateScrollPosition);
  }
});

// Nettoyage des écouteurs d'événements à la destruction du composant
onBeforeUnmount(() => {
  if (reviewsContainer.value) {
    reviewsContainer.value.removeEventListener('scroll', updateScrollPosition);
  }
  window.removeEventListener('resize', updateScrollPosition);
});

// Reviews
const reviews = [
  {
    name: "Klaudia",
    age: 22,
    status: "Étudiante en médecine",
    text: "Grâce à FindWay, j'ai confirmé ma passion pour la médecine et découvert des spécialités auxquelles je n'aurais jamais pensé. Le quiz a vraiment cerné ma personnalité !",
    stars: 5,
    avatar: null
  },
  {
    name: "Thomas",
    age: 20,
    status: "Étudiant en informatique",
    text: "J'étais complètement perdu après le bac. FindWay m'a aidé à comprendre que mes compétences en résolution de problèmes étaient parfaites pour le développement web.",
    stars: 5,
    avatar: null
  },
  {
    name: "Jessica",
    age: 17,
    status: "Lycéenne en terminale",
    text: "FindWay m'a aidée à explorer des domaines que je n'avais jamais envisagés et à comprendre quelles études correspondent à ma personnalité et mes compétences.",
    stars: 5,
    avatar: null
  },
  {
    name: "Lucas",
    age: 19,
    status: "Étudiant en commerce",
    text: "Le quiz d'orientation de FindWay m'a permis de mieux comprendre mes points forts et de découvrir des filières commerciales qui correspondent à mes ambitions.",
    stars: 4,
    avatar: null
  },
  {
    name: "Emma",
    age: 21,
    status: "Étudiante en design",
    text: "J'hésitais entre plusieurs voies créatives. FindWay m'a aidée à clarifier mes priorités et à choisir la formation qui valorise mes compétences artistiques.",
    stars: 5,
    avatar: null
  }
];
</script>

<style scoped>
/* Masquer la barre de défilement tout en gardant la fonctionnalité de défilement */
.scrollbar-hide {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer et Edge */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari et Opera */
}

/* Styles pour les cartes d'avis */
.bg-white {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid transparent;
}

.bg-white:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #4f46e5; /* indigo-600 */
}

/* Effet de gradient pour suggérer qu'il y a plus de contenu */
.relative::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50px;
  background: linear-gradient(to right, rgba(249, 250, 251, 0), rgba(249, 250, 251, 0.9));
  pointer-events: none;
}
</style>
