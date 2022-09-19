window.onload=()=>{
    // toggle functionality
    const toggle = document.querySelector(".toggle-btn")
    const collapse = document.querySelector(".collapse")
    toggle.onclick=()=>{
        collapse.classList.toggle("active")
    }
}