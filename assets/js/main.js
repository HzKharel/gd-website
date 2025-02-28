;(function ($) {
  $(document).ready(function () {
    /*-------------------------------------------------------------------------------
        javaScript for sticky header
        -------------------------------------------------------------------------------*/
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('.header-area').addClass('header-fixed')
      } else {
        $('.header-area').removeClass('header-fixed')
      }
    })

    $('.menu-trigger').on('click', function () {
      $('.offcanvas-wraper, .menu-trigger').toggleClass('active')
    })

    /*---------------------------------
		Javascript for AOS animation
		----------------------------------*/
    AOS.init({
      duration: 1200,
      once: true,
    })
  })
})(jQuery)

const sliders = document.querySelectorAll(".custom-range input[type='range']")
const values = document.querySelectorAll('.custom-range .value')

sliders.forEach((slider, index) => {
  slider.addEventListener('input', (event) => {
    const tempSliderValue = event.target.value

    values[index].textContent = tempSliderValue

    const progress = (tempSliderValue / slider.max) * 100

    slider.style.background = `linear-gradient(to right, #1ABFD0 ${progress}%, #D9FBFF ${progress}%)`
  })
})

// calculations
const weeklyOrders = document.getElementById('weekly-orders')
const avgValue = document.getElementById('avg-value')
const savings = document.getElementById('savings')
const commision = 0.14

weeklyOrders.addEventListener('input', () => {
  calculateSavings()
})

avgValue.addEventListener('input', () => {
  calculateSavings()
})

const calculateSavings = () => {
  const totalCommision = Math.round(weeklyOrders.value * avgValue.value * commision)

  savings.textContent = totalCommision
}

// calculations for mobile
const weeklyOrdersMbl = document.getElementById('mbl-weekly-orders')
const avgValueMbl = document.getElementById('mbl-avg-value')
const savingsMbl = document.getElementById('mbl-savings')

weeklyOrdersMbl.addEventListener('input', () => {
  calculateSavingsMbl()
})

avgValueMbl.addEventListener('input', () => {
  calculateSavingsMbl()
})

const calculateSavingsMbl = () => {
  const totalCommisionMbl = Math.round(weeklyOrdersMbl.value * avgValueMbl.value * commision)

  console.log(totalCommisionMbl);
  savingsMbl.textContent = totalCommisionMbl
}
