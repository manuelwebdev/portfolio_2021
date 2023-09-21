document.querySelector('.footTitle .year').innerHTML = new Date().getFullYear()

const portfolioProjects = [
  {
    id: 'dndSpells',
    link: 'https://react-spells.netlify.app/',
    name: 'React D&D app',
    url: 'react-spells.netlify.app',
  },
  {
    id: 'newInk',
    link: '/assets/documents/New-Ink_DesignIdea2.pdf',
    name: 'New Ink Tattoos',
    url: 'Design Work',
  },
  {
    id: 'bridgewoods',
    link: 'https://bridgewoods.io',
    name: 'Bridgewoods',
    url: 'bridgewoods.io',
  },
  {
    id: 'oakcg',
    link: 'https://oakcg.com',
    name: 'Oak Capital Group',
    url: 'oakcg.com',
  },
  // {
  //   id: 'solcrave',
  //   link: 'https://solcrave.com',
  //   name: 'Sol Crave',
  //   url: 'solcrave.com',
  // },
  {
    id: 'resortboneyard',
    link: 'https://resortboneyard.com',
    name: 'Resort Boneyard',
    url: 'resortboneyard.com',
  },
]

const projectCards = document.querySelector('.projCardsWrapper')
projectCards.innerHTML = portfolioProjects?.map((proj) => {
  return `<a
  class="projCard"
  id="${proj?.id}"
  href=${proj?.link}
  target="_blank"
>
  <div class="overlay">
    <h2 class="head2 projName">${proj?.name}</h2>
    <h3 class="head3 projUrl">${proj?.url}</h3>
  </div>
</a>`
})
