const menuBtn = document.querySelector('.menu-btn')
const menuBtnIcon = document.querySelector('.menu-icon')
const dropDownMenu = document.querySelector('.dropdown_menu')
menuBtn.onclick = function() {
    dropDownMenu.classList.toggle('open') /*calling the open dropdown menu style when button is pressed*/
    const isOpen = dropDownMenu.classList.contains('open')

}