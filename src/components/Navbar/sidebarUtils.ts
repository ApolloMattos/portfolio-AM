export function setAttributes(navbar: HTMLElement, open: Boolean) {
    if (navbar && open === true) {
        navbar.removeAttribute('inert')
    }
    else {
        navbar.setAttribute('inert', "")
    }
}

