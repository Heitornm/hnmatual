export function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId.replace('#', ''))
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

export function setupSmoothScrolling() {
  // Add smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
    anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
      e.preventDefault()
      const href = this.getAttribute('href')
      if (href) {
        smoothScrollTo(href)
      }
    })
  })
}
