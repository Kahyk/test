const naoButton = document.getElementById("nao");

const handleNao = () => {
    naoButton.style.position = "fixed";

    const maxTop = window.innerHeight - naoButton.offsetHeight;
    const maxLeft = window.innerWidth - naoButton.offsetWidth;

    const randTop = Math.random() * maxTop;
    const randLeft = Math.random() * maxLeft;

    naoButton.style.top = `${randTop}px`;
    naoButton.style.left = `${randLeft}px`;
};

naoButton.addEventListener("mouseover", handleNao);
naoButton.addEventListener("click", handleNao);
